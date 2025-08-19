import React from 'react';
import { Shield, FileText, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-indigo-100">Your privacy and data protection are our top priorities</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                fill out forms, or contact us for services including placement assistance, tuition inquiries, 
                and admission guidance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>To provide and improve our educational services</li>
                <li>To process placement applications and match candidates with schools</li>
                <li>To communicate about tuition schedules and academic progress</li>
                <li>To assist with admission processes for B.Ed. and M.Ed. programs</li>
                <li>To send important updates about our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
                and accessed only by authorized personnel.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information with partner schools only for placement purposes and with your explicit consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-700">info@nourineinstitute.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-700">+91 9650304310</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;