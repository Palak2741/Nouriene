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
                NourineInstitute
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              "Where Excellence Meets Opportunity" - Transforming educational journeys with 20+ years of expertise in placements, tuition, and admissions across Gurgaon.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Gurgaon, India</span>
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
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/placement-services" className="hover:text-indigo-400 transition-colors font-semibold">🌟 School Placements (Featured)</a></li>
              <li><a href="/institute-services" className="hover:text-indigo-400 transition-colors">Home Tuition</a></li>
              <li><a href="/institute-services" className="hover:text-indigo-400 transition-colors">Coaching Classes</a></li>
              <li><a href="/institute-services" className="hover:text-indigo-400 transition-colors">Online Tuition</a></li>
              <li><a href="/admission-assistance" className="hover:text-indigo-400 transition-colors">B.Ed./M.Ed. Admissions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Keywords</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home Tuition Gurgaon</li>
              <li>School Job Placements</li>
              <li>B.Ed. Admission Assistance</li>
              <li>M.Ed. Programs</li>
              <li>Teacher Placement Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 NourineInstitute. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;