// PrivacyPolicy.jsx

import { Link } from "react-router-dom"

function PrivacyPolicy()
{
    return (
        <section className="container">
            <div className="row py-5">
                <div className="col-lg-12 mb-5 text-center">
                    <Link className="link" to="/"><i className="fa fa-arrow-left me-2"></i> Return Home</Link>
                </div>
                <div className="col-lg-9 mx-auto">
                    <h2 className="text-center">Privacy Policy</h2>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy