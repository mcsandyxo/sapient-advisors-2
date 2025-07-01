import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">🧠 Sapient Advisors</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Transforming businesses through strategic consulting and innovative solutions.
            </p>
            <div className="flex space-x-3">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/news" className="text-slate-300 hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Strategic Planning</li>
              <li className="text-slate-300">Digital Transformation</li>
              <li className="text-slate-300">Fractional Advisory</li>
              <li className="text-slate-300">Operational Excellence</li>
              <li className="text-slate-300">Market Research</li>
              <li className="text-slate-300">Design Sprints</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>📍 Miami / NYC Metro / Houston</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>📞 T: (646) 234-4768</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>📧 info@sapientadvisors.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Sapient Advisors. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-slate-400 hover:text-white text-sm">Cookie Policy</Link>
            <Link to="/sitemap" className="text-slate-400 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;