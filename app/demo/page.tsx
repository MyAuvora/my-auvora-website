'use client';

import { useState } from 'react';

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    website: '',
    industry: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit demo request. Please try again or email us directly at myauvora@gmail.com');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you for your interest!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your demo request and will be in touch soon to schedule a time that works for you.
            </p>
            <a
              href="/"
              className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a Demo of Auvora
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your business and we'll show you a version of Auvora tailored to your industry.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
                Business name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                Website (optional)
              </label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="example.com"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-gray-900 mb-2">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
              >
                <option value="">Select an industry</option>
                <option value="fitness">Fitness</option>
                <option value="education">Education</option>
                <option value="wellness">Wellness</option>
                <option value="beauty">Beauty</option>
                <option value="auxiliary">Auxiliary</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                What are you looking to improve? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
