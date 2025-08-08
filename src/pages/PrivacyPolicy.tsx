import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

const PrivacyPolicy = () => {
  // Apply SEO for Privacy Policy page
  useSEO({
    title: 'Privacy Policy | Sapient Advisors - Data Protection & Privacy Rights',
    description: 'Learn how Sapient Advisors protects your privacy, collects and uses data, and your rights regarding personal information. Effective July 2025.',
    keywords: 'privacy policy, data protection, personal information, GDPR, privacy rights, data collection, Sapient Advisors',
    canonicalUrl: 'https://www.sapientadvisors.com/privacy-policy',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Sapient Advisors",
      "description": "Privacy policy and data protection information for Sapient Advisors",
      "url": "https://www.sapientadvisors.com/privacy-policy",
      "dateModified": "2025-07-09"
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Sapient Advisors - Privacy Policy
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            <strong>Effective Date:</strong> July 09, 2025
          </p>
          
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <p className="text-lg">
              Sapient Advisors is committed to protecting your privacy. This policy outlines what data we collect, how we use it, and your rights.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Information We Collect</h2>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Name, email, company, and other details submitted via forms (e.g., contact, newsletter, event registration) are collected in our CRM.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Analytics data such as IP address, browser type, pages visited, and time spent on the site (via cookies and tracking tools).</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2. How We Use Your Data</h2>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>To respond to inquiries or contact form submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>To schedule meetings (via o365 Bookings app)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>To analyze site traffic and improve performance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>To send updates and insights if you opt into communications</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Third-Party Tools We Use</h2>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Google Analytics</strong> – for traffic and performance insights</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>o365 Bookings</strong> – to facilitate scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>HubSpot</strong> – for CRM</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Your Rights</h2>
              <p className="mb-4">You may:</p>
              <ul className="space-y-3 ml-6 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Request a copy of your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Request that we update or delete your data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Opt out of marketing communications</span>
                </li>
              </ul>
              <p>
                To exercise these rights, contact us at: 
                <a href="mailto:info@sapient-advisors.com" className="text-blue-600 hover:text-blue-800 font-medium ml-1">
                  info@sapient-advisors.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Data Protection</h2>
              <p>
                We use appropriate technical and organizational measures to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Updates</h2>
              <p>
                We may revise this policy from time to time. Revisions will be posted on this page with an updated effective date.
              </p>
            </section>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions or Concerns?</h3>
              <p className="text-blue-800">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us at{' '}
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

export default PrivacyPolicy;