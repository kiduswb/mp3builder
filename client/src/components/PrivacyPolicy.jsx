// PrivacyPolicy.jsx

import { Link } from "react-router-dom"

function PrivacyPolicy()
{
    return (
        <section className="container">
            <div className="row py-5 mb-4">
                <div className="col-lg-12 mb-5 text-center">
                    <Link className="link" to="/"><i className="fa fa-arrow-left me-2"></i> Return Home</Link>
                </div>
                <div className="col-lg-6 mx-auto">
                    <h1 className="text-center mb-3">Privacy Policy</h1>
                    <p>I am committed to protecting the privacy of my users. This Privacy Policy outlines how I collect, use, and safeguard any personal information that you provide while using my website.</p>
                    <h3>Information I Collect</h3>
                    <p>
                        I do not collect any personal information from my users. When you use my website to convert YouTube videos to MP3 format, I do not require you to provide any personal details such as your name, email address, or any other identifying information.
                    </p>
                    <h3>Use of Cookies</h3>
                    <p>
                        I may use cookies to enhance your experience while using my website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. However, these cookies do not collect any personal information.
                    </p>
                    <h3>Third-Party Links</h3>
                    <p>
                        My website may contain links to third party websites. These third party websites have separate and independent privacy policies. I have no responsibility or liability for the content or activities of these linked websites.
                    </p>
                    <h3>Security</h3>
                    <p>
                        I am committed to ensuring that your information is secure. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and I cannot guarantee absolute security.
                    </p>
                    <h3>Changes to This Privacy Policy</h3>
                    <p>
                        I reserve the right to update or change my website's Privacy Policy at any time. Any changes made will be effective immediately upon posting the updated Privacy Policy on the website.
                    </p>
                    <h3>Contact Information</h3>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, you can contact me at: info@mp3builder.net
                    </p>
                    <b>By using our website, you consent to our Privacy Policy.</b>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy