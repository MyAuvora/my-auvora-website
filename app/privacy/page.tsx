import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Auvora',
  description: 'Auvora Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">
            Last updated: March 5, 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Auvora (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications, websites, and services (collectively, the &quot;Services&quot;). Please read this privacy policy carefully. By using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personally identifiable information that you voluntarily provide when using our Services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (business name, address, industry type)</li>
                <li>Account credentials (username and password)</li>
                <li>Payment and billing information</li>
                <li>Profile information and preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you access our Services, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Log data (IP address, browser type, pages visited, time and date of visits)</li>
                <li>Usage data (features used, interactions within the app)</li>
                <li>Location data (with your consent, where applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide, maintain, and improve our Services</li>
                <li>To process transactions and manage your account</li>
                <li>To send you updates, notifications, and support communications</li>
                <li>To personalize your experience and deliver AI-powered insights</li>
                <li>To analyze usage patterns and improve our platform</li>
                <li>To detect, prevent, and address technical issues or fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., payment processing, hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide you with our Services. We may also retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. If you request account deletion, we will process your request within 30 days and remove your data from our active systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a portable copy of your data</li>
                <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:Patrick_Metzger@myauvora.com" className="text-teal-600 hover:underline">
                  Patrick_Metzger@myauvora.com
                </a>
                . You may also request account deletion through our{' '}
                <Link href="/delete-account" className="text-teal-600 hover:underline">
                  Account Deletion page
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the Services after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 font-semibold">Auvora</p>
                <p className="text-gray-600">
                  Email:{' '}
                  <a href="mailto:Patrick_Metzger@myauvora.com" className="text-teal-600 hover:underline">
                    Patrick_Metzger@myauvora.com
                  </a>
                </p>
                <p className="text-gray-600">
                  Website:{' '}
                  <a href="https://myauvora.com" className="text-teal-600 hover:underline">
                    myauvora.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/" className="text-teal-600 hover:underline text-sm">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
