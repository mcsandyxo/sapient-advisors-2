import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sapient Advisors</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Transforming visions into strategic solutions. We deliver innovative business 
              strategies and cutting-edge technology solutions that drive growth and success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Business District, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@sapientadvisors.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/news" className="text-slate-300 hover:text-white transition-colors">News & Insights</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Business Strategy</li>
              <li className="text-slate-300">Digital Transformation</li>
              <li className="text-slate-300">Technology Solutions</li>
              <li className="text-slate-300">Data Analytics</li>
              <li className="text-slate-300">Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Sapient Advisors. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
