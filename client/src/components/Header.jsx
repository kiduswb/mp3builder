// Header.jsx

function Header()
{
    return (
        <section className="container">
            <div className="row mt-5 mb-3">
                <div className="col-lg-9 mx-auto text-center">
                    <img src="/logo.svg" alt="MP3Builder Logo" className="hero-img" />
                    <h1>MP3Builder</h1>
                    <p className="lead">
                        Download MP3 files from YouTube with custom tags and metadata.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header