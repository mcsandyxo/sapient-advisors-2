
import Header from '../components/Header';
import Footer from '../components/Footer';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-blue-900 mb-4">
              News & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights, expert analysis, and thought leadership from 
              Sapient Advisors.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Webinar */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-blue-100 px-6 py-3">
                  <span className="text-blue-800 font-semibold text-sm">Upcoming Webinar</span>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">🏢</div>
                        <p className="text-sm">Conference Room</p>
                        <p className="text-xs">Office Presentation Setup</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h2 className="text-2xl font-black text-blue-900 mb-3">
                        Office Hours with Avatar Buddy - July 15, 2025
                      </h2>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Join us for an interactive session exploring digital transformation strategies 
                        and the latest trends in AI-powered business solutions.
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <span className="mr-4">📅 July 15, 2025</span>
                        <span>🕒 2:00 - 3:00 EST</span>
                      </div>
                      
                      <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                        Reserve Seat
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours with Richard Vogel */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <h3 className="text-xl font-black text-blue-900 mb-3">
                  Office Hours with Richard Vogel - Aug 15, 2025
                </h3>
                <p className="text-gray-700 mb-4">
                  Strategic planning session focused on operational excellence and process optimization 
                  for modern enterprises.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">📅 Aug 15, 2025</span>
                    <span>🕒 2:00 - 3:00 EST</span>
                  </div>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Reserve Seat
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* AI Things Tech Leadership */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  AI Things Tech Leadership - Product Leadership with Michaela Martorana
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Explore the intersection of AI technology and product leadership strategies 
                  in today's rapidly evolving digital landscape.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-600 font-bold text-xs">MM</span>
                    </div>
                    <div>
                      <p className="font-black text-blue-900 text-sm">AI Things Tech Leadership</p>
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
                    Read Full Post
                  </button>
                </div>
              </div>

              {/* Curiosity Code */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  Curiosity Code
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Unlock the power of curiosity-driven innovation and how it can transform 
                  your approach to problem-solving and strategic thinking.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-600 font-bold text-xs">CC</span>
                    </div>
                    <div>
                      <p className="font-black text-blue-900 text-sm">Diana Moreno</p>
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
                    Read Full Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Articles Section */}
          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Technology Article */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <div className="mb-4">
                  <span className="text-blue-600 font-semibold text-sm">Technology</span>
                  <span className="text-gray-400 text-sm ml-4">June 2024</span>
                </div>
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  The Art of Strategic War: Navigating Uncertainty with Sun Tzu
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Ancient wisdom meets modern business strategy. Discover how Sun Tzu's principles can guide strategic decision-making in uncertain times.
                </p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                  Read More
                </button>
              </div>

              {/* Machine Trends Article */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <div className="mb-4">
                  <span className="text-blue-600 font-semibold text-sm">Machine Trends</span>
                  <span className="text-gray-400 text-sm ml-4">May 2024</span>
                </div>
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  The Rise of Decentralized Autonomous Organizations
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Exploring the future of organizational structures through blockchain technology and governance innovation.
                </p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                  Read More
                </button>
              </div>

              {/* Strategy Article */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <div className="mb-4">
                  <span className="text-blue-600 font-semibold text-sm">Strategy</span>
                  <span className="text-gray-400 text-sm ml-4">April 2024</span>
                </div>
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  Biophilic Design in Corporate Environments
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  How incorporating natural elements into workplace design enhances employee wellbeing, creativity, and engagement.
                </p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Future Sights Section */}
          <div className="mt-16 bg-blue-100 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-600 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🔮</div>
                  <p className="text-sm font-semibold">Future Vision</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-blue-900 mb-4">
                  Future Sights
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Predictions from thought leaders and innovators who are shaping tomorrow's 
                  business landscape. Discover emerging trends and strategic insights that will 
                  define the future of enterprise innovation.
                </p>
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Explore Future Sights
                </button>
              </div>
            </div>
          </div>

          {/* Sponsor Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-black text-blue-900 mb-2">
                  Want to sponsor our monthly LinkedIn Live series, Office Hours?
                </h3>
                <p className="text-gray-700">
                  Connect with industry leaders and build meaningful connections while reaching our engaged audience and the future of strategic innovation.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Request A Sponsor
                </button>
                <div className="text-right mt-2">
                  <p className="text-blue-600 text-sm font-semibold">We can't</p>
                  <p className="text-blue-600 text-sm font-semibold">do this</p>
                  <p className="text-blue-600 text-sm font-semibold">without</p>
                  <p className="text-blue-600 text-sm font-semibold">you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Expertise Section */}
          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-black text-blue-900 mb-4">
                Looking for specialized expertise?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Connect with our team of experienced professionals who can address your project's unique consulting needs.
                We offer research as a service, connect on our custom reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  View Case Studies
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📊</span>
                </div>
                <h3 className="text-xl font-bold">Sapient Advisors</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Transforming businesses through strategic consulting and innovative solutions since 2005.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">📱</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">🐦</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">📘</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-xs">📷</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/insights" className="text-gray-300 hover:text-white transition-colors">Insights</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Strategic Planning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Advisory</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Operational Excellence</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Research</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Risk Management</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-2">📍</span>
                  <div>
                    <p className="text-gray-300">123 Business Avenue, Suite 500</p>
                    <p className="text-gray-300">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">📞</span>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">✉️</span>
                  <span className="text-gray-300">info@sapientadvisors.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 Sapient Advisors. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
