'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/auvora-logo.png"
              alt="Auvora Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/fitness" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              Fitness
            </Link>
            <Link href="/education" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
              Education
            </Link>
            <Link href="/wellness" className="text-gray-500 hover:text-gray-700 font-medium transition-colors">
              Wellness <span className="text-xs text-gray-400">(Soon)</span>
            </Link>
            <Link
              href="/demo?vertical=fitness"
              className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 font-medium transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/fitness" className="text-gray-700 hover:text-teal-700 font-medium py-2">
                Fitness
              </Link>
              <Link href="/education" className="text-gray-700 hover:text-teal-700 font-medium py-2">
                Education
              </Link>
              <Link href="/wellness" className="text-gray-500 hover:text-gray-700 font-medium py-2">
                Wellness <span className="text-xs text-gray-400">(Soon)</span>
              </Link>
              <Link
                href="/demo?vertical=fitness"
                className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 font-medium text-center"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
