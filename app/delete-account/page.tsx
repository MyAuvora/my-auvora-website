'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    reason: '',
    confirmDelete: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Patrick_Metzger@myauvora.com?subject=Account%20Deletion%20Request&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AReason:%20${encodeURIComponent(formData.reason)}%0A%0APlease delete my account and all associated data.`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-teal-700">
            Auvora
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Account Deletion Request
          </h1>
          <p className="text-gray-600 mb-8">
            We're sorry to see you go. If you'd like to delete your account and all associated data from our systems, please fill out the form below. Your request will be processed within 30 days.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-800 mb-2">Request Submitted</h2>
              <p className="text-green-700">
                Your email client should have opened with your deletion request. If it didn't, please email us directly at{' '}
                <a href="mailto:Patrick_Metzger@myauvora.com" className="underline">
                  Patrick_Metzger@myauvora.com
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter the email associated with your account"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Help us improve by sharing why you're leaving"
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-semibold text-amber-800 mb-2">What happens when you delete your account:</h3>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>Your personal information will be permanently deleted</li>
                  <li>Your account access will be revoked</li>
                  <li>Any data associated with your account will be removed</li>
                  <li>This action cannot be undone</li>
                </ul>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmDelete"
                  required
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  checked={formData.confirmDelete}
                  onChange={(e) => setFormData({ ...formData, confirmDelete: e.target.checked })}
                />
                <label htmlFor="confirmDelete" className="ml-3 text-sm text-gray-700">
                  I understand that this action is permanent and all my data will be deleted.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Submit Deletion Request
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              Have questions? Contact us at{' '}
              <a href="mailto:Patrick_Metzger@myauvora.com" className="text-teal-600 hover:underline">
                Patrick_Metzger@myauvora.com
              </a>
            </p>
            <Link href="/" className="text-teal-600 hover:underline text-sm mt-2 inline-block">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
