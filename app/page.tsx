import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Auvora: AI CRM built for real-world operators.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Auvora helps fitness studios, micro schools, daycares, wellness practices, and local service businesses stop losing leads and start growing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-center transition-colors text-lg"
                >
                  Book a Demo
                </Link>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/fitness"
                    className="border-2 border-teal-700 text-teal-700 px-6 py-4 rounded-lg hover:bg-teal-50 font-semibold text-center transition-colors"
                  >
                    Auvora for Fitness
                  </Link>
                  <Link
                    href="/education"
                    className="border-2 border-teal-700 text-teal-700 px-6 py-4 rounded-lg hover:bg-teal-50 font-semibold text-center transition-colors"
                  >
                    Auvora for Education
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-teal-100 to-amber-50 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="h-4 bg-teal-200 rounded w-2/3 mb-3"></div>
                  <div className="h-4 bg-teal-200 rounded w-1/3"></div>
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
              Built for your industry, not generic CRMs.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auvora offers tailored CRM products for different verticals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness</h3>
              <p className="text-gray-600">Boutique studios and gyms</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Micro schools and daycares</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wellness</h3>
              <p className="text-gray-600">Chiropractic, physical therapy, massage, and more</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beauty</h3>
              <p className="text-gray-600">Salons, barbershops, and med spas</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Auxiliary</h3>
              <p className="text-gray-600">Local services like lawn care, pet care, and home services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One platform to capture, follow up, and convert.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Never miss a lead</h3>
              <p className="text-gray-600">Centralize leads from calls, forms, and social.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow up automatically</h3>
              <p className="text-gray-600">Reminders and automation for calls, texts, and emails.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">See your pipeline at a glance</h3>
              <p className="text-gray-600">Simple dashboards for owners and managers.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for your workflows</h3>
              <p className="text-gray-600">Each vertical has its own tailored product.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose your Auvora product.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Fitness</h3>
              <p className="text-gray-600 mb-6">CRM for boutique fitness studios and gyms.</p>
              <Link
                href="/fitness"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-semibold transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Education</h3>
              <p className="text-gray-600 mb-6">CRM for micro schools and daycares.</p>
              <Link
                href="/education"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-semibold transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Wellness</h3>
              <p className="text-gray-600 mb-6">CRM for wellness practices and clinics.</p>
              <Link
                href="/wellness"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 font-semibold transition-colors"
              >
                Learn more
              </Link>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Auvora Beauty</h3>
              <p className="text-gray-600 mb-6">Coming soon for salons, barbers, and med spas.</p>
              <button
                disabled
                className="inline-block bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-gray-50">
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to see Auvora in action?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Book a quick demo and we'll walk you through a version tailored to your business.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
