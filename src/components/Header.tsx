import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Expertise & Services',
    href: '/services'
  }, {
    name: 'Case Studies',
    href: '/case-studies'
  }, {
    name: 'News & Insights',
    href: '/news'
  }, {
    name: 'Contact Us',
    href: '/contact'
  }];
  return <header className={`shadow-sm border-b ${location.pathname === '/about' ? 'bg-[#1E3A8A]' : 'bg-white'}`}>
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center mr-2 relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <rect x="2" y="10" width="2" height="4" fill="currentColor"/>
                  <rect x="5" y="7" width="2" height="7" fill="currentColor"/>
                  <rect x="8" y="5" width="2" height="9" fill="currentColor"/>
                  <rect x="11" y="3" width="2" height="11" fill="currentColor"/>
                </svg>
              </div>
              <span className={`font-semibold text-lg ${location.pathname === '/about' ? 'text-white' : 'text-slate-900'}`}>
                Sapient Advisors
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-white font-semibold' : location.pathname === '/about' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>
                  {item.name}
                </Link>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${location.pathname === '/about' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${location.pathname === '/about' ? 'bg-[#1E3A8A]' : 'bg-white'}`}>
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.href ? 'text-white font-semibold' : location.pathname === '/about' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;