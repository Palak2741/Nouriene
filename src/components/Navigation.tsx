import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Award } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Placement Services', path: '/placement-services' },
    { name: 'Academic Excellence', path: '/institute-services', shortName: 'Academic' },
    { name: 'Admission Assistance', path: '/admission-assistance', shortName: 'Admission' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-2xl sticky top-0 z-50 border-b border-indigo-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative group">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <GraduationCap className="h-4 w-4 sm:h-7 sm:w-7 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="h-2 w-2 sm:h-3 sm:w-3 text-slate-900" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent truncate">
                Nourine Institute
              </span>
              <span className="text-xs sm:text-xs text-yellow-400 font-semibold tracking-wide truncate">
                & Placement Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-lg whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-yellow-400 bg-white bg-opacity-10 backdrop-blur-sm'
                    : 'text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 py-2 text-xs font-semibold transition-all duration-300 rounded-lg whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-yellow-400 bg-white bg-opacity-10 backdrop-blur-sm'
                    : 'text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.shortName || item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none transition-colors duration-200 p-1"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 bg-slate-900 bg-opacity-95 backdrop-blur-sm border-t border-indigo-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg mx-2 ${
                  location.pathname === item.path
                    ? 'text-yellow-400 bg-white bg-opacity-10'
                    : 'text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;