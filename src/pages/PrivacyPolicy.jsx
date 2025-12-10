import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <div className="privacy-container">
                <Link to="/" className="back-link">
                    <span className="back-arrow">←</span> Back to Home
                </Link>

                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: December 4, 2025</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Job Fresh ("we," "our," or "us"). We are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                        when you visit our website jobfresh.in.
                    </p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>
                    <h3>2.1 Automatically Collected Information</h3>
                    <p>When you visit our website, we automatically collect certain information about your device, including:</p>
                    <ul>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>IP address</li>
                        <li>Pages you visit on our site</li>
                        <li>Time and date of your visit</li>
                        <li>Referring website addresses</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track activity on our website and store certain information.
                        Cookies are files with a small amount of data which may include an anonymous unique identifier.
                    </p>
                    <h3>3.1 Types of Cookies We Use</h3>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                        <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Third-Party Advertising - Google AdSense</h2>
                    <p>
                        We use Google AdSense, a third-party advertising service, to display advertisements on our website.
                        Google AdSense uses cookies and other tracking technologies to:
                    </p>
                    <ul>
                        <li>Serve personalized advertisements based on your interests</li>
                        <li>Measure the effectiveness of advertisements</li>
                        <li>Perform analytics to improve ad performance</li>
                        <li>Collect data about your browsing behavior across different websites</li>
                    </ul>
                    <p>
                        For more information about Google's privacy practices, please visit:{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Google Privacy Policy
                        </a>
                    </p>

                    <h3>4.1 Data Collected by Google AdSense</h3>
                    <p>Google AdSense may collect and process the following information:</p>
                    <ul>
                        <li>IP address and device identifiers</li>
                        <li>Browser type and settings</li>
                        <li>Pages viewed and links clicked</li>
                        <li>Geographic location (approximate)</li>
                        <li>Time spent on pages</li>
                        <li>Advertising identifiers (e.g., Android Advertising ID, Apple IDFA)</li>
                    </ul>
                </section>

                <section>
                    <h2>5. How We Use Your Information</h2>
                    <p>We use the collected information for the following purposes:</p>
                    <ul>
                        <li>To provide and maintain our website</li>
                        <li>To improve user experience</li>
                        <li>To analyze website usage and trends</li>
                        <li>To display relevant job listings</li>
                        <li>To serve personalized advertisements through Google AdSense</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2>6. Data Sharing and Disclosure</h2>
                    <p>We may share your information with:</p>
                    <ul>
                        <li><strong>Google AdSense:</strong> For advertising purposes</li>
                        <li><strong>Analytics Providers:</strong> To understand website usage</li>
                        <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                    </ul>
                    <p>We do not sell your personal information to third parties.</p>
                </section>

                <section>
                    <h2>7. Your Privacy Rights</h2>
                    <h3>7.1 Cookie Consent</h3>
                    <p>
                        You can control and/or delete cookies as you wish. You can delete all cookies that are
                        already on your computer and you can set most browsers to prevent them from being placed.
                    </p>

                    <h3>7.2 Opt-Out of Personalized Advertising</h3>
                    <p>You can opt out of personalized advertising by:</p>
                    <ul>
                        <li>Adjusting your browser settings to block third-party cookies</li>
                        <li>Using browser privacy/incognito mode</li>
                        <li>Visiting the Network Advertising Initiative opt-out page: <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">NAI Opt-Out</a></li>
                        <li>Visiting the Digital Advertising Alliance opt-out page: <a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">DAA Opt-Out</a></li>
                    </ul>

                    <h3>7.3 GDPR Rights (European Users)</h3>
                    <p>If you are located in the European Economic Area (EEA), you have the following rights:</p>
                    <ul>
                        <li>Right to access your personal data</li>
                        <li>Right to rectification of inaccurate data</li>
                        <li>Right to erasure ("right to be forgotten")</li>
                        <li>Right to restrict processing</li>
                        <li>Right to data portability</li>
                        <li>Right to object to processing</li>
                    </ul>

                    <h3>7.4 CCPA Rights (California Users)</h3>
                    <p>If you are a California resident, you have the right to:</p>
                    <ul>
                        <li>Know what personal information is collected</li>
                        <li>Know if your personal information is sold or disclosed and to whom</li>
                        <li>Say no to the sale of personal information</li>
                        <li>Access your personal information</li>
                        <li>Request deletion of your personal information</li>
                    </ul>
                </section>

                <section>
                    <h2>8. Data Retention</h2>
                    <p>
                        We retain automatically collected information for as long as necessary to fulfill the purposes
                        outlined in this Privacy Policy, unless a longer retention period is required by law.
                    </p>
                </section>

                <section>
                    <h2>9. Security</h2>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your information.
                        However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2>10. Children's Privacy</h2>
                    <p>
                        Our website is not intended for users under the age of 18. We do not knowingly collect
                        personal information from children under 18. If you become aware that a child has provided
                        us with personal information, please contact us.
                    </p>
                </section>

                {/* Google AdSense Information */}
                <section>
                    <h2>11. Google AdSense Privacy</h2>
                    <p>
                        We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits
                        to our website or other websites. You may opt out of personalized advertising by visiting
                        {' '}<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
                    </p>
                    <p>
                        Alternatively, you can opt out of third-party cookies by visiting
                        {' '}<a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
                    </p>
                </section>

                <section>
                    <h2>12. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by
                        posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                </section>

                <section>
                    <h2>13. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <ul>
                        <li>Email: kakarllaprakash108@gmail.com</li>
                        <li>Website: <a href="https://www.jobfresh.in">www.jobfresh.in</a></li>
                    </ul>
                </section>

                <div className="policy-footer">
                    <Link to="/" className="btn-primary">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
