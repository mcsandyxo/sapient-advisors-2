import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

const CookiePolicy = () => {
  // Apply SEO for Cookie Policy page
  useSEO({
    title: 'Cookie Policy | Sapient Advisors - Cookie Usage & Management',
    description: 'Learn how Sapient Advisors uses cookies to enhance your browsing experience, analyze site usage, and improve functionality. Manage your cookie preferences.',
    keywords: 'cookie policy, cookies, web tracking, analytics, browser settings, privacy, data collection, Sapient Advisors',
    canonicalUrl: 'https://www.sapientadvisors.com/cookie-policy',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cookie Policy - Sapient Advisors",
      "description": "Cookie policy and usage information for Sapient Advisors website",
      "url": "https://www.sapientadvisors.com/cookie-policy",
      "dateModified": "2025-07-09"
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Cookie Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Cookie Policy
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            <strong>Effective Date:</strong> July 09, 2025
          </p>
          
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p className="text-lg">
              Sapient Advisors uses cookies and similar technologies to enhance your browsing experience and understand how users interact with our site.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small files stored on your device that help us:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Remember site preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Analyze site usage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Improve functionality and content delivery</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Essential Cookies</h3>
                  <p className="text-slate-600">Required for core functionality</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Analytics Cookies</h3>
                  <p className="text-slate-600">Help us understand visitor behavior</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Performance Cookies</h3>
                  <p className="text-slate-600">Improve load times and UI experience</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">How to Manage Cookies</h2>
              <p>
                You can disable or manage cookies through your browser settings. However, doing so may limit functionality.
              </p>
              
              <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Important Note
                </h3>
                <p className="text-amber-700">
                  Disabling certain cookies may affect your browsing experience and limit some website functionality. Essential cookies are required for the site to work properly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Popular Browser Cookie Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Chrome</h3>
                  <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Firefox</h3>
                  <p className="text-sm text-gray-600">Settings → Privacy & Security → Cookies and Site Data</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Safari</h3>
                  <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Edge</h3>
                  <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookie Consent Banner Text</h2>
              <div className="bg-white p-4 rounded border border-blue-300">
                <p className="text-slate-700 italic">
                  "We use cookies to improve your experience. By continuing to browse, you agree to our Privacy Policy and Cookie Policy."
                </p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions about Cookies?</h3>
              <p className="text-blue-800">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at{' '}
                <a href="mailto:info@sapient-advisors.com" className="font-medium hover:underline">
                  info@sapient-advisors.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;