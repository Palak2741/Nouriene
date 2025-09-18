import React from 'react';
import { Award, Star, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Award className="h-8 w-8 text-indigo-400" />
                <Star className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Nourine Institute
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Gurgaon's Premier Educational Services Provider since 2015. Specializing in Teacher Placements (5000+ success stories) and Home Tuition (95%+ results). Your trusted partner for educational excellence.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>H.No - 2427P, Sec 46, Gurgaon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9650304310</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nourineinstitute.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +91 9650304310</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <a href="https://www.google.com/maps?q=28.4342882,77.0618873" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/placement-services" className="hover:text-indigo-400 transition-colors font-semibold">🌟 School Placements (Featured)</a></li>
              <li><a href="/institute-services" className="hover:text-indigo-400 transition-colors">Academic Excellence</a></li>
              <li><a href="/admission-assistance" className="hover:text-indigo-400 transition-colors">Admission Assistance</a></li>
              <li><a href="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-indigo-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Teacher Placement Services</li>
              <li>Home Tuition (Classes 1-12)</li>
              <li>Coaching Classes</li>
              <li>Online Tuition</li>
              <li>B.Ed./M.Ed. Guidance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 Nourine Institute. All rights reserved. | 
            <a href="/privacy-policy" className="hover:text-indigo-400">Privacy Policy</a> | 
           <a href="/terms-conditions" className="hover:text-indigo-400">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;