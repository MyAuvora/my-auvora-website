import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Auvora</h3>
            <p className="text-sm">
              AI-powered CRM built for real-world operators. One platform for CRM, POS, scheduling, and business intelligence.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fitness" className="hover:text-white transition-colors">
                  Fitness CRM
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-white transition-colors">
                  Education CRM
                </Link>
              </li>
              <li>
                <Link href="/wellness" className="text-gray-500">
                  Wellness <span className="text-xs">(Coming Soon)</span>
                </Link>
              </li>
              <li>
                <Link href="/beauty" className="text-gray-500">
                  Beauty <span className="text-xs">(Coming Soon)</span>
                </Link>
              </li>
              <li>
                <Link href="/auxiliary" className="text-gray-500">
                  Auxiliary <span className="text-xs">(Coming Soon)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/demo?vertical=fitness" className="hover:text-white transition-colors">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-white transition-colors">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-sm mb-4">
              See how Auvora can help your business grow.
            </p>
            <Link
              href="/demo?vertical=fitness"
              className="inline-block bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 font-medium transition-colors text-sm"
            >
              Book a Demo
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Auvora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
