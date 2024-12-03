// TermsofUse.jsx

import { Link } from "react-router-dom"

function TOS()
{
    return (
        <section className="container">
            <div className="row py-5 mb-4">
                <div className="col-lg-12 mb-5 text-center">
                    <Link className="link" to="/"><i className="fa fa-arrow-left me-2"></i> Return Home</Link>
                </div>
                <div className="col-lg-6 mx-auto">
                    <h1 className="text-center mb-3">Terms of Service</h1>
                    <p>These Terms of Use ("Terms") govern your use of the MP3Builder website. By accessing or using our website, you agree to comply with these terms. If you do not agree with any part of these terms, you may not use our services.</p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>When using MP3Builder website, you agree to these Terms of Use and any additional terms and conditions that may apply to specific features or services provided by MP3Builder.</p>
                    <h3>2. User Responsibilities</h3>
                    <p>
                        <ul>
                            <li>a. You should have the permission to upload, convert and download the content that you are uploading to MP3Builder. You are only one responsible for ensuring that you have the necessary permissions to upload and convert the content.</li>
                            <li>b. You will not MP3Builder for any illegal or unauthorized purpose. And must comply with all applicable laws and regulations while using my services.</li>
                            <li>c. You will be responsible for any content you upload or convert using MP3Builder. I do not endorse, support, or guarantee the accuracy, integrity, or quality of any content uploaded by users.</li>
                        </ul>
                    </p>
                    <h3>3. Prohibited Activities</h3>
                    <p>
                        <ul>
                            <li>a. You should not use MP3Builder to infringe upon the intellectual property rights of others.</li>
                            <li>b. You should not use MP3Builder to distribute or transmit any harmful, illegal, or inappropriate content.</li>
                            <li>c. You should not try to gain unauthorized access to any part of the MP3Builder website or its servers.</li>
                        </ul>
                    </p>
                    <h3>4. Limitation of Liability</h3>
                    <p>
                        <ul>
                            <li>a. MP3Builder is provided on an "as is" and "as available" basis. We do not guarantee that our services will be uninterrupted, error-free, or secure.</li>
                            <li>b. We are not liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising out of your use of MP3Builder or any content obtained from our website.</li>
                        </ul>
                    </p>
                    <h3>5. Copyright</h3>
                    <p>
                        <ul>
                            <p>MP3Builder respects the intellectual property rights of others and requests you to do the same. MP3Builder does not permit infringement of intellectual property rights on its platform and will promptly suspend commercial content (served via a publicly available web address / URL) from being able to be converted and downloaded by its platform when kindly notified.</p>
                            <p>If you're a content creator/owner, copyright owner, or an agent thereof and would like to disable the possible use of MP3Builder's platform to convert your publicly available content(s), please kindly send us a request via email at info@mp3builder.net with the following information:</p>
                            <ul>
                                <li>The URL(s) and description(s) of the content(s) you want us to block.</li>
                                <li>A form of electronic or physical evidence showing that you have the rights to act for the content(s).</li>
                                <li>Contact information that is reasonably sufficient to permit us to contact you, such as an address, telephone number, and a valid email address.</li>
                            </ul>
                            <p>The relevant content(s) will be blacklisted in our system within 24 hours.</p>
                        </ul>
                    </p>
                    <h3>6. Changes to Terms</h3>
                    <p>I reserve the right to update or modify these Terms of Use at any time without prior notice. Any changes made will be effective immediately upon posting on the MP3Builder website. Your continued use of our services after the posting of changes constitutes your acceptance of the updated Terms of Use.</p>
                    <p>If you have any questions or concerns about these Terms of Use, please contact us at info@mp3builder.net</p>
                    <b>By using MP3Builder, you agree to these Terms of Use.</b>
                </div>
            </div>
        </section>
    )
}

export default TOS