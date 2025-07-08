import React from 'react';

const ApplyPage = () => {
  return (
     
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-purple-800 mb-6">
          One Last Step to Apply!
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-8">
          Thank you for your interest in this position! To ensure you're a great fit, we need you to complete a quick verification step. Click the button below to proceed.
        </p>

        {/* Final Apply Now Button */}
        <a
          href="https://smrturl.co/8c1c308" // Replace with your CPA offer link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 text-lg font-semibold"
        >
          Final Apply Now
        </a>

        {/* Additional Information */}
        <p className="text-sm text-gray-500 mt-6">
          By clicking "Final Apply Now," you agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default ApplyPage;