import Link from 'next/link';

export default function Education() {
  return (
    <main className="min-h-screen">
      <section className="aurora-bg py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-amber-400 bg-opacity-20 backdrop-blur-sm text-amber-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-400">
                📚 Built for Education
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Auvora for <span className="gradient-text">Private Schools, Micro Schools, and Daycares</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
                The all-in-one platform for educational institutions. Complete <strong>enrollment management, integrated POS, staff scheduling,</strong> and <strong>AI-powered enrollment intelligence</strong>—no other software needed. Stop juggling multiple tools and start enrolling smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/demo?vertical=education"
                  className="bg-teal-700 text-white px-10 py-5 rounded-xl hover:bg-teal-800 font-bold text-center transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Book an Education Demo →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ AI-Powered for Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your AI Enrollment Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Auvora Education includes an AI agent that learns your school's enrollment patterns and helps you fill spots faster. Combined with integrated POS for tuition payments and complete enrollment management, you'll never need another software tool.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Peak Enrollment Periods</h3>
              <p className="text-gray-600 text-sm">Your AI identifies when families are most likely to inquire and enroll, helping you plan marketing and outreach timing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tour-to-Enrollment Insights</h3>
              <p className="text-gray-600 text-sm">Get AI recommendations on optimal follow-up timing after tours and which families are most likely to enroll.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ask About Your School</h3>
              <p className="text-gray-600 text-sm">"How many families toured last month?" "What's our average time from inquiry to enrollment?" Just ask—instant answers.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-700 italic">
              The AI learns from your enrollment data and gets smarter over time, helping you make better decisions about outreach and follow-up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Made for small schools and centers.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Private schools</h3>
              <p className="text-gray-600">Track every family inquiry and enrollment journey.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Micro schools</h3>
              <p className="text-gray-600">Manage tours and waitlists with ease.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daycares & early childhood centers</h3>
              <p className="text-gray-600">Keep families engaged from inquiry to enrollment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Never lose track of a prospective family.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Every inquiry in one place</h3>
              <p className="text-gray-600">Centralize all family inquiries from phone, email, and web forms.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consistent follow-up after every tour</h3>
              <p className="text-gray-600">Automated reminders ensure you follow up with every family.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clear enrollment pipeline</h3>
              <p className="text-gray-600">See exactly where each family is in the enrollment process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Auvora Education does for you.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated POS</h3>
              <p className="text-gray-600">Process tuition payments, registration fees, and other charges—all in one platform.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teacher Scheduling</h3>
              <p className="text-gray-600">Schedule teachers and aides with ratio awareness, manage shift swaps, and ensure proper coverage.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inquiry pipeline</h3>
              <p className="text-gray-600">Track families from New Inquiry → Tour Scheduled → Tour Completed → Decision Pending → Enrolled / Waitlist.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parent communication log</h3>
              <p className="text-gray-600">Keep a complete history of all interactions with each family.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up automation</h3>
              <p className="text-gray-600">Automated reminders ensure you never forget to reach out after tours or important milestones.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waitlist management</h3>
              <p className="text-gray-600">Manage waitlists and automatically notify families when spots open up.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics and reporting</h3>
              <p className="text-gray-600">Track inquiries, tours, enrollments, and revenue over time with comprehensive dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless integrations with tools you already use.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While Auvora is an all-in-one platform, we integrate with key tools to make your workflow even smoother.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">QuickBooks</h3>
              <p className="text-gray-600">Sync your accounting and payroll data seamlessly.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600">Connect your Facebook page for lead capture and messaging.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600">Capture leads from Instagram DMs and comments automatically.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IXL</h3>
              <p className="text-gray-600">Integrate with IXL for comprehensive learning management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From first inquiry to first day.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capture</h3>
              <p className="text-gray-600">Every family inquiry flows into your pipeline automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guide through tours/decisions</h3>
              <p className="text-gray-600">Track tours and follow up consistently to help families decide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enroll</h3>
              <p className="text-gray-600">Convert inquiries into enrolled families with clear next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions about Auvora Education?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to switch from my current school management system?</h3>
              <p className="text-gray-600">No! Auvora Education is an all-in-one platform, but we integrate with tools like IXL, QuickBooks, Facebook, and Instagram to complement your existing workflow.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What integrations does Auvora support?</h3>
              <p className="text-gray-600">Auvora integrates with IXL for learning management, QuickBooks for accounting and payroll, and connects with Facebook and Instagram for lead capture and social media management.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does setup take?</h3>
              <p className="text-gray-600">Most schools are up and running within a week. We provide onboarding support to help you get started quickly.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How does the AI agent work?</h3>
              <p className="text-gray-600">The AI agent learns your school's enrollment patterns and provides smart recommendations on tour follow-up timing, peak enrollment periods, and family engagement. Just ask it questions and get instant answers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Auvora Education in action.
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Book a demo and we'll show you how Auvora can help your school grow enrollment.
          </p>
          <Link
            href="/demo?vertical=education"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-colors"
          >
            Book an Education Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
