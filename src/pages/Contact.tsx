
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, MapPin } from 'lucide-react';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

const Contact = () => {
  // Apply SEO for Contact page
  useSEO(SEO_DATA.contact);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">Get in Touch</h1>
            <p className="text-hero-subtitle mx-auto leading-relaxed">
              Ready to transform your business? Our consultants are here to help you achieve your strategic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="contact-form" className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm
                           transform transition-all duration-300 ease-out
                           hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]">
              <h2 className="heading-secondary mb-8">Contact Form</h2>
              
              {/* HubSpot Form */}
              <div className="hs-form-frame" data-region="na2" data-form-id="c18f283e-835c-48f7-a809-01b4a64b2802" data-portal-id="242128623"></div>
            </div>

            {/* Why Work With Us */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm
                           transform transition-all duration-300 ease-out
                           hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                           cursor-pointer">
              <h2 className="heading-secondary mb-8">Why Work With Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Consultants</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team brings deep, cross-industry experience to solve your most complex challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Expertise for Complex Organizations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help business and operations teams validate AI use cases fast before committing to tools, builds, or organizational change.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Outside Perspective, Inside Focus</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We offer a clear, neutral lens that helps teams challenge assumptions, prioritize needs, and move confidently toward the right solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Approach to Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our use of agile and design thinking methods are proven to deliver user-tested prototypes, adoption signals, and a decision-making roadmap in days, not months.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Our Locations */}
              <div className="mt-8">
                <h3 className="heading-tertiary mb-4">Our Locations</h3>
                
                {/* Location Icons */}
                <div className="flex justify-center items-center space-x-16 mb-4">
                  <div className="text-center">
                    <div className="text-blue-600 mb-1">
                      ✈️
                    </div>
                    <p className="text-gray-900 font-medium text-sm">Miami</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-blue-600 mb-1">
                      ✈️
                    </div>
                    <p className="text-gray-900 font-medium text-sm">Houston</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-blue-600 mb-1">
                      ✈️
                    </div>
                    <p className="text-gray-900 font-medium text-sm">NYC Metro</p>
                  </div>
                </div>
                
                {/* Map Image - Temporarily Removed
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/locations-map.png" 
                    alt="Map with Miami, Houston and NYC locations"
                    className="w-full h-auto rounded-lg"
                    style={{ maxHeight: 'none', width: '100%', objectFit: 'contain' }}
                  />
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Contact;

