import Link from 'next/link';

export default function Fitness() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Auvora for Fitness Studios
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The all-in-one platform for boutique fitness. Complete CRM, integrated POS, and AI-powered business intelligence—no other software needed. Stop juggling multiple tools and start growing smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo?vertical=fitness"
                  className="bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-center transition-colors text-lg"
                >
                  Book a Fitness Demo
                </Link>
                <Link
                  href="/demo?vertical=fitness"
                  className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 font-semibold text-center transition-colors"
                >
                  Join Pre-Sale at $249/month
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
              For boutique studios and gyms running classes, personal training, or hybrid models.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boutique studios and gyms</h3>
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated POS</h3>
              <p className="text-gray-600">Process payments, sell memberships and packages, and track revenue—all in one platform.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead pipeline</h3>
              <p className="text-gray-600">Track leads from first contact to membership. See exactly where each prospect is in your funnel.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead tracking</h3>
              <p className="text-gray-600">Monitor lead engagement and attendance to identify hot prospects.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow-up automation</h3>
              <p className="text-gray-600">Day 1, day 3, day 7 follow-ups happen automatically. Never forget to reach out.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member management</h3>
              <p className="text-gray-600">Track attendance, manage memberships, and monitor engagement—all in one place.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8">
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
              Simple pricing for growing studios.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-4 border-amber-500 rounded-xl p-8 bg-white shadow-lg">
              <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                Founding Partner Pre-Sale
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$249<span className="text-xl text-gray-600">/month</span></div>
                <div className="text-gray-600">per location</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Limited early access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Locked-in for 12 months</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Roadmap input</span>
                </li>
              </ul>
              <Link
                href="/demo?vertical=fitness"
                className="block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-center transition-colors"
              >
                Apply for Pre-Sale
              </Link>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-white">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                Standard Pricing
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$399<span className="text-xl text-gray-600">/month</span></div>
                <div className="text-gray-600">per location</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All core features</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Regular updates included</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Standard support</span>
                </li>
              </ul>
              <Link
                href="/demo?vertical=fitness"
                className="block border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-lg hover:bg-teal-50 font-semibold text-center transition-colors"
              >
                Book a Demo
              </Link>
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
              <p className="text-gray-600">We're launching in early 2026. Founding partners get priority access and locked-in pricing.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I use Auvora with my existing booking or billing system?</h3>
              <p className="text-gray-600">Yes! Auvora focuses on lead management and follow-up. It works alongside your existing booking and billing tools.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in the pre-sale offer?</h3>
              <p className="text-gray-600">Early access, locked-in pricing at $249/month for 12 months, priority support, and direct input on our roadmap.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is there a contract or can I cancel anytime?</h3>
              <p className="text-gray-600">Pre-sale partners commit to 12 months at the discounted rate. Standard pricing is month-to-month with no long-term contract.</p>
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
