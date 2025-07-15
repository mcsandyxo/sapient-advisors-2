import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <rect x="2" y="10" width="2" height="4" fill="currentColor"/>
                  <rect x="5" y="7" width="2" height="7" fill="currentColor"/>
                  <rect x="8" y="5" width="2" height="9" fill="currentColor"/>
                  <rect x="11" y="3" width="2" height="11" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Sapient Advisors</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm leading-relaxed">
              Transforming businesses through strategic consulting and innovative solutions since 2005.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <Linkedin className="h-4 w-4 text-gray-300 hover:text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <Twitter className="h-4 w-4 text-gray-300 hover:text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <Instagram className="h-4 w-4 text-gray-300 hover:text-white" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Strategic Planning</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Digital Transformation</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Functional Advisory</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Operational Excellence</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Market Research</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Design Sprints</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-1 text-blue-400" />
                <span>Miami / NYC Metro / Houston</span>
              </div>
              <div className="flex items-start text-gray-300">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 mt-1 text-blue-400" />
                <span>+1 (646) 234-4268</span>
              </div>
              <div className="flex items-start text-gray-300">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 mt-1 text-blue-400" />
                <span>info@sapientadvisors.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sapient Advisors. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;