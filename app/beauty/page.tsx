import Link from 'next/link';

export default function Beauty() {
  return (
    <main className="min-h-screen">
      <section className="aurora-bg py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-amber-400 bg-opacity-20 backdrop-blur-sm text-amber-900 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-400">
                💇 Coming Soon
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Auvora <span className="gradient-text">Beauty</span> is coming soon.
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
                The all-in-one platform for salons, barbershops, med spas, and beauty businesses.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                We're building Auvora Beauty with <strong>complete CRM, integrated POS, staff scheduling,</strong> and <strong>AI-powered client intelligence</strong> to help beauty businesses capture more clients and keep their books full. Join the waitlist to be the first to know when we launch.
              </p>
              <Link
                href="/demo?vertical=beauty"
                className="bg-teal-700 text-white px-10 py-5 rounded-xl hover:bg-teal-800 font-bold text-center transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Join Beauty Waitlist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we're building for beauty businesses.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Salons</h3>
              <p className="text-gray-600">Track new client inquiries and keep regulars coming back.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Barbershops</h3>
              <p className="text-gray-600">Manage your client relationships and grow your business.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Med spas</h3>
              <p className="text-gray-600">Follow up with leads and track treatment packages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to help shape Auvora Beauty?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're talking to beauty business owners to understand their needs. Join our waitlist and we'll reach out to learn about your business.
          </p>
          <Link
            href="/demo?vertical=beauty"
            className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-lg transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}
