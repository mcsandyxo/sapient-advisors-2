import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-blue-900 mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore how we've helped leading organizations transform their businesses 
              through strategic consulting and innovative solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Raven */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                Project Raven
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A single conversation on product discovery inspired our first design 
                sprint and a new product to uncover new revenue streams through 
                cleaning unstructured data.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Design Sprints
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Strategy
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-bold text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Amazon Alexa "Let's Chat" */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                Amazon Alexa "Let's Chat"
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team worked directly with Amazon's Alexa division to optimize voice 
                recognition algorithms, resulting in a 32% improvement in accuracy for 
                non-native English speakers and expanding market reach by 28% in 
                international markets.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  AI Development
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  IoT
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  MLOps
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-bold text-sm">PP</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Phanom Parker</p>
                    <p className="text-sm text-gray-600">Chief MLOps</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* CVX */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                CVX
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explore how we took an acquired startup to a fully operational, scalable 
                product using design sprints and collaborative Agile development.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  AI Development
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  UX Research
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Rapid prototyping
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-bold text-sm">SM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">COO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Knowledge Graphs for Risk Management */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                Knowledge Graphs for Risk Management
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unique approach enables investors and underwriters to quickly identify, 
                assess, and mitigate geospatial risks in a dynamic environment, helping 
                them make informed decisions.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Strategy
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Visualization
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Knowledge graphs
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-600 font-bold text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Book@Random Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-black text-blue-900 mb-6">
              Book@Random
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Quote and Contact */}
              <div>
                <div className="text-4xl text-blue-900 mb-4">"</div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  Put a quote here about the original data cleanup proj
                </p>
                
                {/* Contact Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm">SM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">Member of Random House web team Book@Random</p>
                  </div>
                </div>
              </div>

              {/* Right side - Bookstore Image */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="text-sm font-medium">Bookstore with Digital Display</p>
                  <p className="text-xs mt-1 text-gray-400">Library/Bookstore Interior</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Transform Your Business Section */}
          <div className="mt-20 text-center bg-white py-16">
            <h2 className="text-3xl font-black text-blue-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our strategic consulting services can help you achieve your 
              business goals and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                Explore Our Services
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Latest Insights
              </button>
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

export default CaseStudies;
