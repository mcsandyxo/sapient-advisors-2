import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-2">
                <img 
                  src="/sapient-logo.png" 
                  alt="Sapient Advisors Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">Sapient Advisors</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm leading-relaxed">
              Transforming businesses through strategic consulting and innovative solutions.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/sapient-advisors-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-4 w-4 text-gray-300 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/sapient_advisors?igsh=MTlvc3JqNXRoZXp0NQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-4 w-4 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" 
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-gray-300 hover:text-white transition-all duration-300 
                                         transform hover:translate-x-2 hover:scale-105
                                         relative group">
                Home
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white 
                                 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/about" 
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-gray-300 hover:text-white transition-all duration-300 
                                             transform hover:translate-x-2 hover:scale-105
                                             relative group">
                About Us
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white 
                                 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/services" 
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-gray-300 hover:text-white transition-all duration-300 
                                               transform hover:translate-x-2 hover:scale-105
                                               relative group">
                Services
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white 
                                 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/case-studies" 
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-gray-300 hover:text-white transition-all duration-300 
                                                     transform hover:translate-x-2 hover:scale-105
                                                     relative group">
                Case Studies
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white 
                                 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/news" 
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-gray-300 hover:text-white transition-all duration-300 
                                            transform hover:translate-x-2 hover:scale-105
                                            relative group">
                Insights
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white 
                                 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">AI Blueprint Sprint</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Data Lifecycle Strategy</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Fractional Advisory</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Operational Excellence</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">ML Ops & AI Readiness</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Design Sprints</li>
              <li className="text-gray-300 hover:text-white cursor-pointer transition-colors">Engineering & Architecture</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start text-gray-300 hover:text-white transition-all duration-300
                              transform hover:translate-x-1 group cursor-pointer">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-1 text-gray-300 
                                  transition-all duration-300 group-hover:text-white 
                                  group-hover:scale-110 group-hover:rotate-12" />
                <span>999 Brickell Ave Suite 410 Miami, FL 33131</span>
              </div>
              <div className="flex items-start text-gray-300 hover:text-white transition-all duration-300
                              transform hover:translate-x-1 group cursor-pointer">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 mt-1 text-gray-300 
                                 transition-all duration-300 group-hover:text-white 
                                 group-hover:scale-110 group-hover:rotate-12" />
                <span>+1 (646) 234-4268</span>
              </div>
              <a href="mailto:info@sapientadvisors.com" 
                 className="flex items-start text-gray-300 hover:text-white transition-all duration-300
                            transform hover:translate-x-1 group cursor-pointer">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 mt-1 text-gray-300 
                                transition-all duration-300 group-hover:text-white 
                                group-hover:scale-110 group-hover:rotate-12" />
                <span>info@sapientadvisors.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sapient Advisors. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            {/* <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link> */}
            <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            {/* <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;