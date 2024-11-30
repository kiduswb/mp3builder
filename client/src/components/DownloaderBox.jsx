// DownloaderBox.jsx

import { useState } from "react"

function DownloaderBox()
{

    const handleSubmit = () => {
        //...
    }

    return (
        <section className="container mb-5">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card p-3 rounded-0 shadow bg-dark text-ivory">
                        
                        <div className="py-3">
                            <div className="alert rounded-0 bg-danger text-light">
                                <i className="fa fa-exclamation-triangle me-2"></i>
                                Sample error message.
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-2 mb-4">
                            <h4>Step 1 &mdash; Enter YouTube Link</h4>
                            <input type="text" id="yt-link" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="e.g. https://www.youtube.com/watch?v=N4gmGYhr-7k" />
                        </div>

                        <div className="d-flex flex-column gap-2 mb-5">
                            <h4 className="mb-3">Step 2 &mdash; Edit Tags & Download MP3 File</h4>
                            <form onSubmit={handleSubmit()}>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Upload Cover Art</label>
                                    <input type="file" className="form-control form-control-dark bg-dark text-light rounded-0" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Title" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Artist" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Album" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Year" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Genre" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Comments" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-dark bg-dark text-light rounded-0" placeholder="Track Number" />
                                </div>
                                <button className="btn btn-lime btn-lg rounded-0 col-12">
                                    <i className="fa fa-file-download me-2"></i> Download MP3 File
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloaderBox