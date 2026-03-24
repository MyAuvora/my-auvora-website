import Link from 'next/link';

export default function Fitness() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="aurora-bg py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-amber-400 bg-opacity-20 backdrop-blur-sm text-amber-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-400">
                Now Available
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                The Only Software Your <span className="gradient-text">Fitness Studio</span> Needs
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
                CRM, POS, scheduling, member management, lead pipeline, retention tools, and an <strong>AI business coach</strong> that knows your studio inside and out. One platform. No integrations. No spreadsheets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/demo?vertical=fitness"
                  className="bg-teal-700 text-white px-10 py-5 rounded-xl hover:bg-teal-800 font-bold text-center transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Book a Demo
                </Link>
                <a
                  href="https://auvora-app-a9x7z6ay.devinapps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-teal-700 bg-white text-teal-700 px-10 py-5 rounded-xl hover:bg-teal-50 font-bold text-center transition-all shadow-md hover:shadow-lg"
                >
                  Try the Live Demo
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">No credit card required. See the full platform instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sound familiar?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-gray-800">&ldquo;I have leads in my DMs, a spreadsheet, and my head. I know I&apos;m losing people.&rdquo;</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-gray-800">&ldquo;I pay for a CRM, a booking tool, a payment processor, and a scheduling app. None of them talk to each other.&rdquo;</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-gray-800">&ldquo;I don&apos;t know which members are about to cancel until they&apos;re already gone.&rdquo;</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-gray-800">&ldquo;I spend more time on admin than actually coaching or growing my business.&rdquo;</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-xl text-teal-700 font-bold">Auvora fixes all of this. In one platform.</p>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything your studio needs. <span className="text-amber-400">Nothing it doesn&apos;t.</span>
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Built specifically for boutique fitness, gyms, and dance studios. Not a generic CRM with fitness features bolted on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Member Management</h3>
              <p className="text-teal-100">Track Active Members vs. Class Pack Clients. Freeze, cancel, or reactivate memberships with one click. See visit streaks, risk scores, and engagement at a glance.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrated POS</h3>
              <p className="text-teal-100">Sell memberships, class packs, and drop-ins. Process card payments. Auto-generate agreements. Save cards to profiles. All inside the CRM.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lead Pipeline</h3>
              <p className="text-teal-100">Visual pipeline from New Lead to Won. Full lead profiles with activity timelines, notes, and recommended actions. Leads auto-convert to members on enrollment.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Staff Scheduling</h3>
              <p className="text-teal-100">Drag-and-drop weekly schedules. Conflict detection. Coverage tracking. Works for coaches, front desk, and managers across multiple locations.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Retention Dashboard</h3>
              <p className="text-teal-100">See at-risk members before they cancel. Run win-back campaigns. Track churn rates and save members with targeted outreach based on visit patterns.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Member Gamification</h3>
              <p className="text-teal-100">XP points, tier levels (Bronze to Diamond), visit streaks, leaderboards, and milestone rewards. Keep members engaged and coming back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              AI-Powered Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              An AI agent that actually knows your business.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not a chatbot. A business intelligence engine built into every page of your CRM. Ask it anything and get real answers based on your actual data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-400">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue Intelligence</h3>
                <p className="text-gray-600">&ldquo;How&apos;s revenue this month?&rdquo; &mdash; Get real-time revenue tracking, goal progress, breakdown by membership type, and data-driven strategies to close the gap.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Member Reports</h3>
                <p className="text-gray-600">&ldquo;Show me member stats&rdquo; &mdash; Active vs. frozen vs. cancelled counts, membership breakdown, at-risk members, and retention analysis with actionable recommendations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-400">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Insights</h3>
                <p className="text-gray-600">&ldquo;How are my leads doing?&rdquo; &mdash; Pipeline value, conversion rates by stage, source analysis, and suggestions for which leads to follow up with first.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Class Analytics</h3>
                <p className="text-gray-600">&ldquo;Which classes are performing best?&rdquo; &mdash; Revenue per class, attendance rates, fill rates, and instructor performance with optimization suggestions.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">CRM Navigation Help</h3>
                <p className="text-gray-600">&ldquo;How do I add a new member?&rdquo; &mdash; The AI walks you through every feature step by step. Complete training guide built in, so new staff get up to speed instantly.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-400">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proactive Recommendations</h3>
                <p className="text-gray-600">The AI doesn&apos;t just answer questions. It spots opportunities: upsell class pack clients to memberships, save at-risk members, optimize class schedules, and grow revenue.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Training</h3>
                <p className="text-gray-600">&ldquo;Train me on the CRM&rdquo; &mdash; Comprehensive guides for every feature: POS, enrollment, leads, members, scheduling, marketing, and retention. Your AI trains your team for you.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-400">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Goal Tracking</h3>
                <p className="text-gray-600">Set monthly revenue goals and the AI tracks your progress daily. When you&apos;re behind pace, it tells you exactly what to do to catch up with specific dollar amounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Specific Dashboards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A different dashboard for every role.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everyone on your team sees exactly what they need. No clutter, no confusion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all">
              <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Owner</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Owner Dashboard</h3>
              <p className="text-gray-600 text-sm">Revenue tracking, goal progress, at-risk members, top classes, and 6-month trends. The full picture at a glance.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Manager</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manager Dashboard</h3>
              <p className="text-gray-600 text-sm">Daily operations checklist, today&apos;s classes, staff status, alerts, and coverage tracking. Run the floor with confidence.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all">
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Trainer</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trainer Dashboard</h3>
              <p className="text-gray-600 text-sm">Today&apos;s sessions, client progress, weekly schedule, and personal stats. Trainers focus on coaching, not admin.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all">
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Front Desk</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Front Desk Dashboard</h3>
              <p className="text-gray-600 text-sm">Recent check-ins, upcoming classes, POS quick access, and member lookup. Handle walk-ins and questions instantly.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">Member</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Member Portal</h3>
              <p className="text-gray-600 text-sm">XP progress, tier level, upcoming classes, visit history, rewards, and leaderboard. Members stay engaged and motivated.</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-br from-teal-50 to-amber-50">
              <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">AI Agent</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Available Everywhere</h3>
              <p className="text-gray-600 text-sm">The AI assistant is accessible from every dashboard, every page. Any role can ask questions and get instant, role-appropriate answers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From lead to paying member in under 5 minutes.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete enrollment flow is built into the CRM. No external tools, no manual data entry.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Lead Captured</h3>
              <p className="text-gray-600 text-xs">Walk-in, referral, or web form</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Select Plan</h3>
              <p className="text-gray-600 text-xs">Membership, class pack, or drop-in</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Sign Agreement</h3>
              <p className="text-gray-600 text-xs">Digital signature or send link to sign remotely</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Process Payment</h3>
              <p className="text-gray-600 text-xs">Card on file with save-to-profile option</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">5</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">Active Member</h3>
              <p className="text-gray-600 text-xs">Auto-converted from lead to member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Feature List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every feature a fitness studio needs.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Lead pipeline (visual stages)',
              'Full lead profiles + notes',
              'Member profiles with visit history',
              'Membership freeze / cancel / reactivate',
              'Active Member vs. Client distinction',
              'At-risk member detection',
              'XP points and tier levels',
              'Visit streaks and leaderboards',
              'Integrated POS with card input',
              'Membership, class pack, drop-in sales',
              'Digital agreement signing',
              'Remote sign via link',
              'Staff scheduling (drag-and-drop)',
              'Shift conflict detection',
              'Role-based dashboards (5 roles)',
              'Class management + categories',
              'Retention dashboard + win-back',
              'Marketing campaigns + automation',
              'Revenue tracking + goal setting',
              'AI business intelligence agent',
              'AI training guides for staff',
              'Inventory tracking',
              'Payroll overview',
              'Multi-location support',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-2 py-2">
                <svg className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Its For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for boutique fitness operators.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boutique Studios and Gyms</h3>
              <p className="text-gray-600">CrossFit boxes, yoga studios, Pilates studios, martial arts schools, cycling studios, and boutique gyms of any size.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dance Studios</h3>
              <p className="text-gray-600">Hip hop, ballet, contemporary, pole fitness, and all dance disciplines. Manage classes, packs, and memberships in one place.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Owners and GMs</h3>
              <p className="text-gray-600">Who split time between the floor and front desk. Who need to see the big picture without digging through spreadsheets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple pricing. No surprises.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              One price. Everything included. No per-user fees, no feature gates, no hidden costs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-4 border-amber-500 rounded-xl p-8 bg-white shadow-lg relative">
              <div className="absolute -top-4 left-6 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
              <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                Founding Partner
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-1">$249<span className="text-xl text-gray-600">/mo</span></div>
                <div className="text-gray-600">per location</div>
                <div className="text-sm text-amber-700 font-semibold mt-2">Save $1,800/year vs. standard pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in the platform',
                  'Unlimited users and roles',
                  'AI business intelligence agent',
                  'Priority support',
                  'Locked-in rate for 12 months',
                  'Direct input on our roadmap',
                  'Free onboarding and setup',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo?vertical=fitness"
                className="block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-center transition-colors text-lg"
              >
                Claim Founding Partner Spot
              </Link>
              <p className="text-xs text-gray-500 text-center mt-3">Limited spots available</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-white">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                Standard
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-1">$399<span className="text-xl text-gray-600">/mo</span></div>
                <div className="text-gray-600">per location</div>
                <div className="text-sm text-gray-500 mt-2">Month-to-month, cancel anytime</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in the platform',
                  'Unlimited users and roles',
                  'AI business intelligence agent',
                  'Standard support',
                  'No long-term commitment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo?vertical=fitness"
                className="block border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-lg hover:bg-teal-50 font-semibold text-center transition-colors text-lg"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently asked questions.
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is Auvora Fitness available now?</h3>
              <p className="text-gray-600">Yes. Auvora Fitness is live and accepting new studios. You can try the full demo instantly or book a walkthrough with our team.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to replace my existing tools?</h3>
              <p className="text-gray-600">That&apos;s the idea. Auvora replaces your CRM, POS, scheduling tool, and reporting software with one integrated platform. No more paying for 4 different tools that don&apos;t talk to each other.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How many staff members can use it?</h3>
              <p className="text-gray-600">Unlimited. Every plan includes unlimited users. Owners, managers, trainers, and front desk staff each get their own role-specific dashboard.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What&apos;s included in the Founding Partner offer?</h3>
              <p className="text-gray-600">Everything in the platform at $249/month (locked in for 12 months). Plus priority support, free onboarding, and direct input on our roadmap. It&apos;s the best deal we&apos;ll ever offer.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-600">Founding Partners commit to 12 months at the discounted rate. Standard pricing is month-to-month with no long-term contract.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How does the AI agent work?</h3>
              <p className="text-gray-600">The AI is built into every page of the CRM. Click the &ldquo;Ask Auvora&rdquo; button and ask anything: revenue reports, member stats, lead insights, or how to use any feature. It responds with real data from your studio, not generic answers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop losing leads. Start growing your studio.
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Book a demo and we&apos;ll walk you through Auvora with your studio&apos;s data. Or try the live demo right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo?vertical=fitness"
              className="bg-white text-teal-700 px-10 py-5 rounded-xl hover:bg-gray-100 font-bold text-lg transition-colors shadow-lg"
            >
              Book a Demo
            </Link>
            <a
              href="https://auvora-app-a9x7z6ay.devinapps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:bg-opacity-10 font-bold text-lg transition-colors"
            >
              Try the Live Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
