import Link from 'next/link';

export default function Auxiliary() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Auvora Auxiliary is coming soon.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              CRM for local service businesses like lawn care, pet care, cleaning, and more.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Auvora Auxiliary will help local service businesses track leads, follow up, and grow recurring customers. Join the waitlist to hear when we launch.
            </p>
            <Link
              href="/demo?vertical=auxiliary"
              className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-lg transition-colors"
            >
              Join Auxiliary Waitlist
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we're building for local service businesses.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lawn care</h3>
              <p className="text-gray-600">Track leads and manage recurring service schedules.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pet care</h3>
              <p className="text-gray-600">Manage client relationships and service bookings.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home services</h3>
              <p className="text-gray-600">Follow up with leads and grow your customer base.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to help shape Auvora Auxiliary?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're talking to local service business owners to understand their needs. Join our waitlist and we'll reach out to learn about your business.
          </p>
          <Link
            href="/demo?vertical=auxiliary"
            className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-lg transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}
