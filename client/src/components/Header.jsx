// Header.jsx

function Header()
{
    return (
        <section className="container">
            <div className="row py-5">
                <div className="col-lg-9 mx-auto text-center">
                    <img src="/logo.svg" alt="MP3Builder Logo" className="hero-img" />
                    <h1>MP3Builder</h1>
                    <p className="lead">
                        Convert YouTube videos to MP3 files with custom metadata.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header