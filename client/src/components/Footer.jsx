// Footer.jsx

import { Link } from "react-router-dom"

function Footer()
{
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <span>Built with 💖 and ☕!</span>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-3 py-3">
                        <Link className="link" to="/legal/terms">Terms of Service</Link>
                        <Link className="link" to="/legal/privacy">Privacy Policy</Link>
                        <a href="https://github.com/kiduswb/mp3builder" target="_blank" rel="noopener" className="link"><i className="fab fa-github"></i> Contribute</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer