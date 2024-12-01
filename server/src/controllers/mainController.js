// mainController.js



// Converts YouTube link to MP3 file with custom metadata
export const convertYouTubeLink = (req, res) => 
{    
    // Move uploaded album art to uploads folder
    const album_art = req.files.album_art
    const album_art_filename = Date.now() + "_" + album_art.name
    
    try {
        album_art.mv('./uploads/' + album_art_filename)
    } catch (err) {
        return res.sendStatus(500)
    }

    // Download MP3 from YouTube link and place into ./uploads
    //...

    // Change MP3 metadata and tags
    // ...

    // Move MP3 file to ./downloads and send link to client
    // ...
};

// Deletes uploads and downloads that are more than 2 hours
export const cleanupCRON = (req, res) => {
    //...
};