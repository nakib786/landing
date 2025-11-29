import { Link } from 'react-router-dom'
import AdSense from '../components/AdSense'
import ZodiacLogo from '../components/ZodiacLogo'
import StarField from '../components/StarField'
import FluidCursorEffect from '../components/ui/smokey-cursor-effect'
import HamburgerMenu from '../components/HamburgerMenu'

function PrivacyPolicy() {
  return (
    <>
      <FluidCursorEffect minimal />
      
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        <StarField />
        
        <nav className="relative z-20 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <ZodiacLogo />
            </Link>
          </div>
        </nav>
        
        <HamburgerMenu />

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Privacy Policy
            </h1>
            
            <div className="text-purple-200 text-sm mb-8 text-center">
              <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-purple-100">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  Welcome to Free Horoscope Now ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and share your personal information. This Privacy Policy explains our practices regarding data collection and use when you visit our website at <strong className="text-white">www.freehoroscopenow.com</strong>.
                </p>
                <p>
                  By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-purple-200 mb-3">2.1 Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages you visit on our website</li>
                  <li>Time and date of your visit</li>
                  <li>Time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device identifiers</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-purple-200 mb-3 mt-6">2.2 Cookies and Similar Technologies</h3>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our website</li>
                  <li>To analyze how visitors use our website</li>
                  <li>To improve user experience</li>
                  <li>To display personalized content and advertisements</li>
                  <li>To detect and prevent technical issues</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Google AdSense</h2>
                <p>
                  Our website uses Google AdSense, a service provided by Google LLC ("Google") for displaying advertisements. Google AdSense uses cookies and similar technologies to serve ads based on your prior visits to our website or other websites.
                </p>
                <p>
                  <strong className="text-white">Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</strong>
                </p>
                <p>
                  You may opt out of personalized advertising by visiting Google's Ads Settings at{' '}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 underline"
                  >
                    https://www.google.com/settings/ads
                  </a>
                  {' '}or by visiting{' '}
                  <a 
                    href="https://www.aboutads.info/choices/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 underline"
                  >
                    https://www.aboutads.info/choices/
                  </a>
                  .
                </p>
                <p>
                  For more information about how Google uses data when you use our website, please visit{' '}
                  <a 
                    href="https://policies.google.com/technologies/partner-sites" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 underline"
                  >
                    Google's Privacy & Terms
                  </a>
                  .
                </p>
                <p>
                  <strong className="text-white">Our AdSense Publisher ID: ca-pub-3360285631990666</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
                <p>We may use third-party services that collect, monitor, and analyze information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Google Analytics:</strong> To understand how visitors interact with our website</li>
                  <li><strong className="text-white">Google AdSense:</strong> To display relevant advertisements</li>
                  <li><strong className="text-white">Hosting Services:</strong> To host and deliver our website</li>
                </ul>
                <p>
                  These third parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights Under GDPR (European Union)</h2>
                <p>
                  If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Right to Access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong className="text-white">Right to Rectification:</strong> You have the right to request that we correct any inaccurate personal data.</li>
                  <li><strong className="text-white">Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong className="text-white">Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li><strong className="text-white">Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li><strong className="text-white">Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                  <li><strong className="text-white">Right to Withdraw Consent:</strong> You have the right to withdraw your consent at any time where we rely on consent to process your personal information.</li>
                </ul>
                <p>
                  If you wish to exercise any of these rights, please contact us using the contact information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
                <p>
                  We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p>
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
                </p>
                <p>
                  If you are located outside the United States and choose to provide information to us, please note that we may transfer the data, including personal data, to the United States and process it there.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, your rights, or our data practices, please contact us:
                </p>
                <div className="bg-white/5 p-4 rounded-lg mt-4">
                  <p className="text-white font-semibold mb-2">Free Horoscope Now</p>
                  <p>Website: <a href="https://www.freehoroscopenow.com" className="text-yellow-400 hover:text-yellow-300 underline">www.freehoroscopenow.com</a></p>
                  <p className="mt-2">
                    For privacy-related inquiries, please contact us through our website contact form or email us at{' '}
                    <a href="mailto:privacy@freehoroscopenow.com" className="text-yellow-400 hover:text-yellow-300 underline">
                      privacy@freehoroscopenow.com
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Cookie Policy</h2>
                <p>
                  We use cookies to enhance your experience on our website. Cookies are small text files that are placed on your device when you visit our website.
                </p>
                <h3 className="text-xl font-semibold text-purple-200 mb-3 mt-4">Types of Cookies We Use:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong className="text-white">Advertising Cookies:</strong> Used to deliver relevant advertisements (via Google AdSense)</li>
                </ul>
                <p className="mt-4">
                  You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <Link 
                to="/" 
                className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors"
              >
                <span className="mr-2">←</span> Back to Home
              </Link>
            </div>
          </div>
        </main>

        {/* Bottom Ad */}
        <div className="w-full max-w-md mx-auto mt-0 pb-0">
          <AdSense adSlot="3367554321" adFormat="rectangle" />
        </div>
        
        {/* AMP Auto Ads */}
        <amp-auto-ads 
          type="adsense"
          data-ad-client="ca-pub-3360285631990666">
        </amp-auto-ads>
      </div>
    </>
  )
}

export default PrivacyPolicy

