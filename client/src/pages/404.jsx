// 404.jsx

import { Link } from "react-router-dom"
import Footer from "../components/Footer"

function NotFound()
{
    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 py-5 mx-auto text-center">
                        <h1><i className="fa fa-info-circle me-2"></i> 404 - Not Found</h1>
                        <p className="lead">The page you're looking for is not found.</p>
                        <Link className="link" to="/">&larr; Return Home</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound