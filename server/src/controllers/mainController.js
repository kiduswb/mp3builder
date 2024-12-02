import { v4 as uuidv4 } from 'uuid'
import { S3Client, GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command, DeleteObjectsCommand } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { PassThrough } from 'stream'
import ytdl from '@distube/ytdl-core'
import ffmpeg from 'fluent-ffmpeg'
import nodeID3 from 'node-id3'

import streamToBuffer from '../utils/streamToBuffer.js'
import { Cookie } from 'tough-cookie'

// Convert YouTube link to MP3
export const convertYouTubeLink = async (req, res) => 
{        
    const tags = {
        title: req.body.title,
        artist: req.body.artists,
        album: req.body.album,
        year: req.body.year,
        genre: req.body.genres,
        comment: req.body.comments,
        track: req.body.track_number
    }
    const album_art = req.files.album_art

    // Assert that all fields are filled
    if (!album_art || !tags.title || !tags.artist || !tags.album || !tags.genre || !tags.year || !tags.comment || !tags.track) {
        return res.status(400).json({ error: "Error: Please fill in all fields." })
    }
   
    try {
        // Validate YouTube link
        const yt_link = req.body.yt_link

        if (!ytdl.validateURL(yt_link)) {
            return res.status(400).json({ error: "Invalid YouTube URL" })
        }

        // Generate unique identifiers
        const uniqueId = uuidv4()
        const videoKey = `${uniqueId}_video.mp4`
        const mp3Key = `${uniqueId}_${tags.title.replace(/[^a-z0-9]/gi, '_')}.mp3`
        const albumArtKey = `${uniqueId}_albumart.jpg`

        // Configure S3 Client
        const s3Client = new S3Client({
            endpoint: process.env.S3_ENDPOINT,
            region: 'us1',
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY
            },
            forcePathStyle: true
        })

        // Upload album art
        const albumArtUploader = new Upload({
            client: s3Client,
            params: {
                Bucket: process.env.S3_BUCKET,
                Key: albumArtKey,
                Body: album_art.data,
                ContentType: album_art.mimetype
            }
        })
        await albumArtUploader.done()

        // Download YouTube video to S3
        const videoPassThrough = new PassThrough()
        const videoUploader = new Upload({
            client: s3Client,
            params: {
                Bucket: process.env.S3_BUCKET,
                Key: videoKey,
                Body: videoPassThrough,
                ContentType: 'video/mp4'
            }
        })

        // Start upload in background
        const videoUploadPromise = videoUploader.done()

        // Pipe YouTube download to upload stream
        ytdl(yt_link, 
            { 
                quality: 'highestaudio',
                requestOptions: {
                    headers: {
                        Cookie: process.env.YT_COOKIE
                    }
                }
            })
            .pipe(videoPassThrough)

        // Wait for video upload to complete
        await videoUploadPromise

        // Convert to MP3 using FFmpeg stream
        const mp3PassThrough = new PassThrough()
        const mp3Uploader = new Upload({
            client: s3Client,
            params: {
                Bucket: process.env.S3_BUCKET,
                Key: mp3Key,
                Body: mp3PassThrough,
                ContentType: 'audio/mpeg'
            }
        })

        // Start MP3 upload in background
        const mp3UploadPromise = mp3Uploader.done()

        const tempVideoUrl = await getSignedUrl(s3Client, new GetObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Key: videoKey,
        }), { expiresIn: 3600 });

        // FFmpeg conversion
        await new Promise((resolve, reject) => {
            ffmpeg()
                .input(`${tempVideoUrl}`)
                .toFormat('mp3')
                .pipe(mp3PassThrough)
                .on('end', resolve)
                .on('error', reject)
        })

        // Wait for MP3 upload to complete
        await mp3UploadPromise

        // Retrieve MP3 and Album Art for metadata
        const [mp3Response, albumArtResponse] = await Promise.all([
            s3Client.send(new GetObjectCommand({
                Bucket: process.env.S3_BUCKET,
                Key: mp3Key
            })),
            s3Client.send(new GetObjectCommand({
                Bucket: process.env.S3_BUCKET,
                Key: albumArtKey
            }))
        ])

        // Read streams to buffers
        const mp3Buffer = await streamToBuffer(mp3Response.Body)
        const albumArtBuffer = await streamToBuffer(albumArtResponse.Body)

        // Add metadata
        const id3_tags = {
            title: tags.title,
            artist: tags.artist,
            album: tags.album,
            year: tags.year,
            genre: tags.genre,
            comment: {
                language: "eng",
                text: tags.comment
            },
            trackNumber: tags.track,
            image: {
                mime: "image/jpeg",
                type: { id: 3, name: "front cover" }, // Front cover type
                description: "Album Cover",
                imageBuffer: albumArtBuffer
            }
        };
        
        // Write ID3 tags
        const taggedMp3Buffer = nodeID3.update(id3_tags, mp3Buffer);
        
        if (!taggedMp3Buffer) {
            throw new Error("Failed to write ID3 tags");
        }

        // Upload tagged MP3
        const finalUploader = new Upload({
            client: s3Client,
            params: {
                Bucket: process.env.S3_BUCKET,
                Key: mp3Key,
                Body: taggedMp3Buffer,
                ContentType: 'audio/mpeg',
                Metadata: {
                    title: id3_tags.title,
                    artist: id3_tags.artist,
                    album: id3_tags.album
                }
            }
        })
        await finalUploader.done()

        // Generate download link
        const downloadCommand = new GetObjectCommand({
            Bucket: process.env.S3_BUCKET,
            Key: mp3Key
        })
        const downloadLink = await getSignedUrl(s3Client, downloadCommand, { 
            expiresIn: 2 * 60 * 60 // 2 hours
        })

        // Delete temporary video and album art files
        await Promise.all([
            s3Client.send(new DeleteObjectCommand({
                Bucket: process.env.S3_BUCKET,
                Key: videoKey
            })),
            s3Client.send(new DeleteObjectCommand({
                Bucket: process.env.S3_BUCKET,
                Key: albumArtKey
            }))
        ])

        return res.status(201).json({
            download_link: downloadLink,
            file_id: uniqueId
        })

    } catch (e) {
        console.error('Conversion Error:', e)
        return res.status(500).json({ 
            error: "Server error. Please try again later."
        })
    }
}

// Deletes generated files > 2 hours old
export const cleanupCRON = async (req, res) => 
{
    try {
        // Configure the S3 Client
        const s3Client = new S3Client({
            endpoint: process.env.S3_ENDPOINT,
            region: "us1",
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY,
            },
            forcePathStyle: true,
        });

        const bucketName = process.env.S3_BUCKET;

        // List all objects in the bucket
        const listCommand = new ListObjectsV2Command({ Bucket: bucketName });
        const listResponse = await s3Client.send(listCommand);

        if (!listResponse.Contents || listResponse.Contents.length === 0) {
            return res.status(200).json({ message: "No files to clean up." });
        }

        const now = new Date();
        const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago

        // Filter objects older than 2 hours
        const objectsToDelete = listResponse.Contents.filter((obj) => {
            const lastModified = new Date(obj.LastModified);
            return lastModified < twoHoursAgo;
        }).map((obj) => ({ Key: obj.Key }));

        if (objectsToDelete.length === 0) {
            return res.status(200).json({ message: "No files older than 2 hours." });
        }

        // Delete the filtered objects
        const deleteCommand = new DeleteObjectsCommand({
            Bucket: bucketName,
            Delete: { Objects: objectsToDelete },
        });

        await s3Client.send(deleteCommand);

        return res.status(200).json({
            message: `${objectsToDelete.length} files deleted successfully.`,
        });
    } catch (error) {
        console.error("Cleanup Error:", error); //!TODO: Add error logging later
        return res.status(500).json({
            error: "Server error during cleanup. Please try again later.",
        });
    }
};