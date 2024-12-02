// mainController.js

import fs from 'fs'
import ytdl from '@distube/ytdl-core'
import ffmpeg from 'fluent-ffmpeg'
import MP3Tag from 'mp3tag.js'

// Converts YouTube link to MP3 file with custom metadata
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
        return res.status(400).json({ error: "Please fill in all fields." })
    }
    
    //...
    await new Promise(resolve => setTimeout(resolve, 3000));
    return res.status(201).json({ download_link: "https://example.com/download.mp3" })
};

// Deletes uploads and downloads that are more than 2 hours
export const cleanupCRON = (req, res) => {
    //...
};