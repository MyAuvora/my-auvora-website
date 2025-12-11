import Link from 'next/link';

export default function Fitness() {
  return (
    <main className="min-h-screen">
      <section className="aurora-bg py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-amber-400 bg-opacity-20 backdrop-blur-sm text-amber-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-400">
                💪 Built for Boutique Fitness
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Auvora for <span className="gradient-text">Fitness Studios</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
                The all-in-one platform for boutique fitness and dance studios. Complete <strong>CRM, integrated POS, staff scheduling,</strong> and <strong>AI-powered business intelligence</strong>—no other software needed. Stop juggling multiple tools and start growing smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/demo?vertical=fitness"
                  className="bg-teal-700 text-white px-10 py-5 rounded-xl hover:bg-teal-800 font-bold text-center transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Book a Fitness Demo →
                </Link>
                <Link
                  href="/demo?vertical=fitness"
                  className="border-2 border-amber-600 bg-white text-amber-700 px-10 py-5 rounded-xl hover:bg-amber-50 font-bold text-center transition-all shadow-md hover:shadow-lg"
                >
                  Apply for Early Access
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
              ✨ AI-Powered for Fitness
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your AI Fitness Business Coach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Auvora Fitness includes an AI agent that learns your studio's patterns and helps you make smarter decisions every day. Combined with integrated POS and complete studio management, you'll never need another software tool.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Optimal Class Times</h3>
              <p className="text-gray-600 text-sm">Your AI analyzes attendance patterns and suggests the best times to schedule classes for maximum attendance and revenue.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Conversion Insights</h3>
              <p className="text-gray-600 text-sm">Get AI-powered suggestions on when to follow up with leads, what messaging works best, and which prospects are most likely to convert.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ask Your Studio Anything</h3>
              <p className="text-gray-600 text-sm">"Which class has the best retention?" "How many leads did we get from Instagram last month?" Just ask—no digging through reports.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-700 italic">
              The AI learns from your studio's data and gets smarter over time, helping you make better decisions faster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for boutique fitness operators.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              For boutique studios, gyms, and dance studios running classes, personal training, or hybrid models.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boutique studios, gyms, and dance studios</h3>
              <p className="text-gray-600">Perfect for fitness businesses of any size, from single studios to multi-location operations.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Owners and GMs</h3>
              <p className="text-gray-600">Who split time between the floor and front desk.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teams tired of spreadsheets</h3>
              <p className="text-gray-600">And generic CRMs that don't fit your workflow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-teal-50 to-gray-50 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Turn more leads into long-term members.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Never lose a lead</h3>
              <p className="text-gray-600">Track every prospect from first contact to membership signup.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow up automatically</h3>
              <p className="text-gray-600">Automated reminders ensure no lead falls through the cracks.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Know your numbers</h3>
              <p className="text-gray-600">See conversion rates and pipeline health at a glance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Auvora Fitness does for you.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated POS</h3>
              <p className="text-gray-600">Process payments, sell memberships and packages, and track revenue—all in one platform.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coach Scheduling</h3>
              <p className="text-gray-600">Schedule coaches for classes and PT sessions, manage availability, and ensure coverage with alerts.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead pipeline</h3>
              <p className="text-gray-600">Track leads from first contact to membership. See exactly where each prospect is in your funnel.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead tracking</h3>
              <p className="text-gray-600">Monitor lead engagement and attendance to identify hot prospects.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up automation</h3>
              <p className="text-gray-600">Day 1, day 3, day 7 follow-ups happen automatically. Never forget to reach out.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member management</h3>
              <p className="text-gray-600">Track attendance, manage memberships, and monitor engagement—all in one place.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics and reporting</h3>
              <p className="text-gray-600">Track leads, conversions, revenue, and retention with comprehensive dashboards.</p>
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
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From lead to loyal member.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capture</h3>
              <p className="text-gray-600">Every inquiry, walk-in, and referral flows into your pipeline automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow Up</h3>
              <p className="text-gray-600">Automated reminders and sequences keep you on top of every lead.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convert and Retain</h3>
              <p className="text-gray-600">Turn leads into members and keep them engaged long-term.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions about Auvora Fitness?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">When will Auvora Fitness be live?</h3>
              <p className="text-gray-600">We're launching in early 2026. Founding partners get priority access and exclusive benefits.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I use Auvora with my existing booking or billing system?</h3>
              <p className="text-gray-600">Yes! Auvora is an all-in-one platform, but we integrate with tools like QuickBooks, Facebook, and Instagram to make your workflow seamless.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What integrations does Auvora support?</h3>
              <p className="text-gray-600">Auvora integrates with QuickBooks for accounting and payroll, and connects with Facebook and Instagram for lead capture and social media management.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How does the AI agent work?</h3>
              <p className="text-gray-600">The AI agent learns your studio's patterns over time and provides smart recommendations on class scheduling, lead follow-up, and business insights. Just ask it questions and it delivers instant answers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Auvora Fitness in action.
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Book a demo and we'll walk you through how Auvora can help your studio grow.
          </p>
          <Link
            href="/demo?vertical=fitness"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-colors"
          >
            Book a Fitness Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
