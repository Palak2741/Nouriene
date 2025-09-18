import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Award } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Placement Services', path: '/placement-services' },
    { name: 'Academic Excellence', path: '/institute-services' },
    { name: 'Admission Assistance', path: '/admission-assistance' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-2xl sticky top-0 z-50 border-b border-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="h-3 w-3 text-slate-900" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                Nourine Institute
              </span>
              <span className="text-xs text-yellow-400 font-semibold tracking-wide">
                & Placement Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  location.pathname === item.path
                    ? 'text-yellow-400 bg-white bg-opacity-10 backdrop-blur-sm'
                    : 'text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-slate-900 bg-opacity-95 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-lg ${
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