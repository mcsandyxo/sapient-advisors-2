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
        <div className="flex items-center h-16 relative">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 mr-3 relative">
                <img 
                  src="/sapient-logo.png" 
                  alt="Sapient Advisors Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-lg text-white">
                Sapient Advisors
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
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
          </div>
            
          {/* Get Started Button - Right */}
          <div className="hidden md:flex ml-auto">
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