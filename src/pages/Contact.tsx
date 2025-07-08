
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#1E3A8A] mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Our consultants are here to help you achieve your strategic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john.smith@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company, Inc."
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="success-map">Success Map Consulting</option>
                    <option value="ai-adoption">AI Adoption Strategy</option>
                    <option value="fintech-education">Fintech Education & Training</option>
                    <option value="fractional-services">Fractional Services</option>
                    <option value="general-consulting">General Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I consent to processing my data to respond to my inquiry and agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1E3A8A] text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-800 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Why Work With Us */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8">Why Work With Us</h2>
              
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
                <h3 className="text-lg font-bold text-[#1E3A8A] mb-4">Our Locations</h3>
                
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
                
                {/* Map Image */}
                <div className="w-full">
                  <img 
                    src="/lovable-uploads/locations-map.png" 
                    alt="Map with Miami, Houston and NYC locations"
                    className="w-full h-auto rounded-lg"
                    style={{ maxHeight: 'none', width: '100%', objectFit: 'contain' }}
                  />
                </div>
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

