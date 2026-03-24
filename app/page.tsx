import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="aurora-bg py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-amber-400 bg-opacity-20 backdrop-blur-sm text-amber-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-400">
                Now Live — Fitness &amp; Education CRMs
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                The <span className="gradient-text">All-in-One</span> Platform with AI That Learns Your Business
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
                Stop juggling multiple software tools. Auvora combines <strong>CRM, POS, Staff Scheduling,</strong> and <strong>AI-powered business intelligence</strong> in one platform. No integrations needed—everything your business needs to thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/fitness"
                  className="bg-teal-700 text-white px-10 py-5 rounded-xl hover:bg-teal-800 font-bold text-center transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Explore Fitness CRM
                </Link>
                <Link
                  href="/education"
                  className="border-2 border-teal-700 bg-white text-teal-700 px-10 py-5 rounded-xl hover:bg-teal-50 font-bold text-center transition-all shadow-md hover:shadow-lg"
                >
                  Explore Education CRM
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
              ✨ AI-Powered Intelligence
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your AI Business Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Every Auvora platform includes an AI agent that learns your business as it grows—acting like a personal business assistant that's always available. Combined with integrated POS and complete business management tools, you'll never need another software solution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Suggestions</h3>
              <p className="text-gray-600 text-sm">Get AI-powered recommendations for sales tactics, follow-up timing, and conversion strategies tailored to your business.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Optimize Operations</h3>
              <p className="text-gray-600 text-sm">For fitness centers, discover optimal class times. For schools, identify peak enrollment periods. Your AI learns what works best.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ask Anything</h3>
              <p className="text-gray-600 text-sm">No more digging through reports. Just ask: "How many leads converted last month?" or "Which class has the best retention?"</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learns & Adapts</h3>
              <p className="text-gray-600 text-sm">The more you use Auvora, the smarter it gets. Your AI agent learns your business patterns, preferences, and what drives results.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 font-semibold">
              It's like having a business analyst, sales coach, and data scientist—all in one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for your industry, not generic CRMs.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auvora offers tailored CRM products for different verticals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-teal-500 rounded-xl p-6 bg-teal-50 shadow-lg relative">
              <div className="absolute -top-3 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">Flagship</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness</h3>
              <p className="text-gray-600">Boutique studios, gyms, and dance studios</p>
            </div>
            <div className="border-2 border-teal-400 rounded-xl p-6 bg-teal-50 relative">
              <div className="absolute -top-3 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">Active</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Micro schools and daycares</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50 relative">
              <div className="absolute -top-3 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">Coming Soon</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wellness</h3>
              <p className="text-gray-600">Chiropractic, physical therapy, massage, and more</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50 relative">
              <div className="absolute -top-3 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">Coming Soon</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beauty</h3>
              <p className="text-gray-600">Salons, barbershops, and med spas</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50 relative">
              <div className="absolute -top-3 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">Coming Soon</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Auxiliary</h3>
              <p className="text-gray-600">Local services like lawn care, pet care, and home services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need in one platform. <span className="text-amber-400">No integrations required.</span>
            </h2>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Stop paying for multiple tools that don't talk to each other. Auvora is the complete solution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Complete CRM</h3>
              <p className="text-teal-100">Capture leads, manage pipelines, and automate follow-ups.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrated POS</h3>
              <p className="text-teal-100">Process payments, manage packages, and track revenue.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Staff Scheduling</h3>
              <p className="text-teal-100">Plan shifts, manage availability, and ensure coverage.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Intelligence</h3>
              <p className="text-teal-100">Smart recommendations and instant answers about your data.</p>
            </div>
            <div className="glass-panel-dark rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-14 h-14 bg-amber-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industry Tools</h3>
              <p className="text-teal-100">Tailored features for your specific business type.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose your Auvora product.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-teal-500 rounded-xl p-8 hover:shadow-lg transition-all bg-teal-50 relative">
              <div className="absolute -top-3 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">Flagship</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Fitness</h3>
              <p className="text-gray-600 mb-6">The complete CRM for boutique fitness studios, gyms, and dance studios. Live now.</p>
              <Link
                href="/fitness"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-semibold transition-colors"
              >
                Explore Fitness CRM
              </Link>
            </div>
            <div className="border-2 border-teal-400 rounded-xl p-8 hover:shadow-lg transition-all bg-teal-50 relative">
              <div className="absolute -top-3 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">Active</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Education</h3>
              <p className="text-gray-600 mb-6">Enrollment management for private schools, micro schools, and daycares. Live now.</p>
              <Link
                href="/education"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-semibold transition-colors"
              >
                Explore Education CRM
              </Link>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-gray-50 relative">
              <div className="absolute -top-3 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">Coming Soon</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Wellness</h3>
              <p className="text-gray-600 mb-6">CRM for chiropractic, physical therapy, massage, and wellness clinics.</p>
              <Link
                href="/wellness"
                className="inline-block border-2 border-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-gray-50 relative">
              <div className="absolute -top-3 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">Coming Soon</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Beauty</h3>
              <p className="text-gray-600 mb-6">Coming soon for salons, barbers, and med spas.</p>
              <button
                disabled
                className="inline-block bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-gray-50 relative">
              <div className="absolute -top-3 right-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">Coming Soon</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Auxiliary</h3>
              <p className="text-gray-600 mb-6">Coming soon for local service businesses.</p>
              <button
                disabled
                className="inline-block bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-amber-50 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Auvora fits into your day.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capture every lead</h3>
              <p className="text-gray-600">All your leads flow into one place, automatically organized and ready to work.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow up consistently</h3>
              <p className="text-gray-600">Never forget to reach out. Auvora reminds you and automates the routine stuff.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convert and retain</h3>
              <p className="text-gray-600">Turn prospects into customers and keep them coming back with smart follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to see Auvora in action?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-800">
            Book a quick demo and we'll walk you through a version tailored to your business.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-teal-700 text-white px-12 py-6 rounded-xl hover:bg-teal-800 font-bold text-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            Book Your Demo Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
