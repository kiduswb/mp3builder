// mainController.js

import fs from 'fs'
import ytdl from '@distube/ytdl-core'
import ffmpeg from 'fluent-ffmpeg'
import MP3Tag from 'mp3tag.js'

// Converts YouTube link to MP3 file with custom metadata
export const convertYouTubeLink = async (req, res) => {    
    
    //...
    await new Promise(resolve => setTimeout(resolve, 3000));
    return res.status(201).json({ download_link: "https://example.com/download.mp3" })
};

// Deletes uploads and downloads that are more than 2 hours
export const cleanupCRON = (req, res) => {
    //...
};