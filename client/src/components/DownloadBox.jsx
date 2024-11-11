// DownloadBox.jsx

import { useState } from "react"

function DownloadBox()
{
    return (
        <section className="container">
            <div className="row">
                <div className="col-lg-9 mb-5 mx-auto text-center">
                    <form className="d-flex flex-wrap gap-2 justify-content-center">
                        <input className="form-control rounded-0 w-75" placeholder="Enter YouTube link, e.g. https://www.youtube.com/watch?v=PBmQnh4eS_w" />
                        <button className="btn btn-lime rounded-0"><i className="fa fa-file-audio"></i> Convert</button>
                    </form>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default DownloadBox