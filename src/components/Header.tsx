import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Services',
      href: '/services'
    },
    {
      name: 'About Us',
      href: '/about'
    },
    {
      name: 'Case Studies',
      href: '/case-studies'
    },
    {
      name: 'Insights',
      href: '/news'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <header className="bg-[#1E3A8A] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center mr-3 relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-blue-600">
                  <rect x="2" y="10" width="2" height="4" fill="currentColor"/>
                  <rect x="5" y="7" width="2" height="7" fill="currentColor"/>
                  <rect x="8" y="5" width="2" height="9" fill="currentColor"/>
                  <rect x="11" y="3" width="2" height="11" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-semibold text-lg text-white">
                Sapient Advisors
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-gray-200 transition-colors font-medium ${
                    location.pathname === item.href ? 'text-white font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Get Started Button */}
            <button className="bg-white text-[#1E3A8A] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-white hover:text-gray-200 transition-colors font-medium ${
                    location.pathname === item.href ? 'text-white font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-white text-[#1E3A8A] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;