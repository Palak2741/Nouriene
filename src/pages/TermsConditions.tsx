import React from 'react';
import { FileText, AlertTriangle, Scale, Mail, Phone } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-indigo-100">Please read these terms carefully before using our services</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using Nourine Institute's services, you accept and agree to be bound by 
                the terms and provision of this agreement. These terms apply to all services including 
                placement assistance, tuition services, and admission guidance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Teacher placement services in schools across Gurgaon</li>
                <li>Home tuition, coaching classes, and online tuition for classes 6-12</li>
                <li>B.Ed. and M.Ed. admission assistance and guidance</li>
                <li>Educational counseling and career guidance</li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">Important Notice - No Refund Policy</h3>
                    <p className="text-red-800">
                      <strong>NO REFUNDS will be entertained under any circumstances.</strong> All fees paid for 
                      services including placement assistance, tuition fees, and admission guidance are 
                      non-refundable once services have commenced or registration is completed.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Placement Services Terms</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Placement assistance does not guarantee job placement</li>
                <li>We will make best efforts to match candidates with suitable positions</li>
                <li>Candidates must provide accurate information and valid documents</li>
                <li>Final selection depends on school requirements and interview performance</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuition Services Terms</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Regular attendance is mandatory for optimal results</li>
                <li>Monthly fees must be paid in advance</li>
                <li>Study materials provided remain property of NourineInstitute</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Assistance Terms</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>We provide guidance and assistance, not guaranteed admission</li>
                <li>All university fees and charges are separate from our service fees</li>
                <li>Students must meet university eligibility criteria</li>
                <li>Document verification and submission assistance is provided</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Jurisdiction</h3>
                    <p className="text-blue-800">
                      All disputes and legal matters will be subject to the jurisdiction of 
                      <strong> Gurgaon courts only</strong>. Any legal proceedings must be initiated 
                      in Gurgaon, Haryana, India.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                Nourine Institute shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from the use of our services. Our liability is 
                limited to the amount paid for the specific service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services constitutes 
                acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For any questions regarding these terms and conditions:
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

export default TermsConditions;