import Link from 'next/link';

export default function Wellness() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Auvora for Wellness Practices
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                CRM for chiropractic, physical therapy, massage, and other wellness clinics that need better patient and client follow-up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo?vertical=wellness"
                  className="bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-center transition-colors text-lg"
                >
                  Book a Wellness Demo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-teal-100 to-amber-50 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 bg-teal-600 rounded w-24"></div>
                    <div className="h-3 bg-amber-500 rounded w-16"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for wellness professionals.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chiropractic</h3>
              <p className="text-gray-600">Keep your schedule full with consistent patient follow-up.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Physical therapy</h3>
              <p className="text-gray-600">Track patient progress and engagement throughout treatment.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Massage and wellness clinics</h3>
              <p className="text-gray-600">Manage client relationships and reactivation campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keep your schedule full and patients engaged.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Never lose a new patient inquiry</h3>
              <p className="text-gray-600">Track every lead from first contact to scheduled appointment.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reactivate inactive patients</h3>
              <p className="text-gray-600">Automated reminders help you follow up with patients who haven't been in.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track patient engagement</h3>
              <p className="text-gray-600">See which patients need attention and when to reach out.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Auvora Wellness does for you.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead and patient pipeline</h3>
              <p className="text-gray-600">Track new inquiries and existing patients in one organized system.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up tasks</h3>
              <p className="text-gray-600">Get reminders for missed appointments and reactivation campaigns.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communication log</h3>
              <p className="text-gray-600">Keep a complete history of all patient interactions.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic reporting</h3>
              <p className="text-gray-600">Track new patients, retention, and engagement over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing tailored to your clinic.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're finalizing pricing for Auvora Wellness. Contact us to discuss your clinic and get early access pricing.
            </p>
            <Link
              href="/demo?vertical=wellness"
              className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-lg transition-colors"
            >
              Contact Us About Wellness
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From inquiry to loyal patient.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capture</h3>
              <p className="text-gray-600">Every new patient inquiry flows into your pipeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow Up</h3>
              <p className="text-gray-600">Consistent follow-up keeps patients engaged and coming back.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retain</h3>
              <p className="text-gray-600">Build long-term patient relationships with smart reactivation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions about Auvora Wellness?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">When will Auvora Wellness be available?</h3>
              <p className="text-gray-600">We're currently in development. Contact us to join our early access list and help shape the product.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Will it integrate with my practice management software?</h3>
              <p className="text-gray-600">Auvora focuses on lead management and patient engagement. It's designed to work alongside your existing practice management tools.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is it HIPAA compliant?</h3>
              <p className="text-gray-600">Yes, we're building Auvora Wellness with HIPAA compliance as a core requirement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Auvora Wellness in action.
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Book a demo and we'll show you how Auvora can help your practice grow.
          </p>
          <Link
            href="/demo?vertical=wellness"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-colors"
          >
            Book a Wellness Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
