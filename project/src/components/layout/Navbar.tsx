import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import SearchBar from '../search/SearchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About DAZ', href: '/about' },
    { name: 'Early Signs', href: '/early-signs' },
    { name: 'Caregiver Support', href: '/caregiver-support' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
        <div className="flex justify-between h-16">
          <div className="flex items-center lg:justify-start">
            <Logo />
            <span className="ml-1 text-3xl font-bold text-daz-blue">DAZ</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-daz-green px-3 py-2 rounded-md text-md font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <SearchBar />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-daz-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-daz-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;