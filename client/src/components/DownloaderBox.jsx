// DownloaderBox.jsx

import { useState } from "react"

function DownloaderBox()
{
    
    const [error, setError] = useState(null)
    const [downloadLink, setDownloadLink] = useState(null)
    
    const handleSubmit = (e) => 
    {
        e.preventDefault()
        setError(null)
        setDownloadLink(null)

        // Validate YouTube Link

        const ytLink = document.getElementById("yt-link").value
        
        if (ytLink === "") {
            setError("Please enter a YouTube link.")
            return
        }

        // Validate Tags

        const album_art = document.getElementById("album_art").files[0]
        const title = document.getElementById("title").value
        const artists = document.getElementById("artists").value
        const album = document.getElementById("album").value
        const year = document.getElementById("year").value
        const genres = document.getElementById("genres").value
        const comments = document.getElementById("comments").value
        const track_number = document.getElementById("track_number").value

        if (title === "" || artists === "" || album === "" || genres === "" || year === "" || comments === "" || track_number === "") {
            setError("Please fill in all fields.")
            return
        }

        if(title.length > 100 || artists.length > 100 || album.length > 100 || year.length > 100 || genres.length > 100 || comments.length > 100 || track_number.length > 100) {
            setError("All fields must be less than 100 characters.")
            return
        }
        
        const commaRegex = /^(?:[\w\s]+)(?:,\s*[\w\s]+)*$/
        if(!commaRegex.test(genres)) {
            setError("Genres must be comma separated.")
            return
        }

        if(!commaRegex.test(artists)) {
            setError("Artists must be comma separated.")
            return
        }

        const yearRegex = /^\d{4}$/
        if(!yearRegex.test(year)) {
            setError("Please enter a valid year.")
            return
        }

        const trackNumberRegex = /^\d+$/
        if(!trackNumberRegex.test(track_number)) { 
            setError("Track number must be a number.")
            return
        }

        // Validate album artwork
        if (album_art === undefined) {
            setError("Please upload album artwork.")
            return
        }

        // Process Form Submission
        //...
    }
    
    return (
        <section className="container mb-5">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card p-3 rounded-0 shadow bg-dark text-ivory">
                        
                        {
                            error &&
                            <div className="py-3">
                                <div className="alert rounded-0 bg-danger text-light">
                                    <i className="fa fa-exclamation-triangle me-2"></i>
                                    {error}
                                </div>
                            </div>
                        }

                        <div className="d-flex flex-column gap-2 mb-4">
                            <h4>Step 1 &mdash; Enter YouTube Link</h4>
                            <input type="text" id="yt-link" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="e.g. https://www.youtube.com/watch?v=N4gmGYhr-7k" />
                        </div>

                        <div className="d-flex flex-column gap-2 mb-5">
                            <h4 className="mb-3">Step 2 &mdash; Edit Tags & Download MP3 File</h4>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Upload Cover Art</label>
                                    <input type="file" required name="album_art" id="album_art" accept="image/*" className="form-control form-control-dark bg-dark text-light rounded-0" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="title" id="title" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Title" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="artists" id="artists" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Artist(s) - enter a comma separated list" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="album" id="album" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Album" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="year" id="year" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Year" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="genres" id="genres" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Genre(s) - enter a comma separated list" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="comments" id="comments" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Comments" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="track_number" id="track_number" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Track Number" />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-lime btn-lg rounded-0 col-12">
                                        <i className="fa fa-file-download me-2"></i> Download MP3 File
                                    </button>
                                </div>

                                {
                                    downloadLink &&
                                    <div className="alert rounded-0 bg-success text-light">
                                        <i className="fa fa-check-circle me-2"></i>
                                        Here's your download link -
                                        <a href={downloadLink} className="link-light ms-2">{downloadLink}</a>
                                    </div>
                                }

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloaderBox