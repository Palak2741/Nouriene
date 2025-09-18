import React from 'react';
import { GraduationCap, BookOpen, Clock, Users, CheckCircle, Award } from 'lucide-react';
import AdmissionForm from '../components/AdmissionForm';

const AdmissionAssistance: React.FC = () => {
  const programs = [
    {
      name: 'B.Ed. (Bachelor of Education)',
      description: 'Foundation program for aspiring teachers with comprehensive teaching methodology and practice.',
      duration: '2 Years',
      eligibility: 'Minimum 50% marks in graduation',
      universities: ['Gurugram University', 'Maharishi Dayanand University']
    },
    {
      name: 'M.Ed. (Master of Education)',
      description: 'Advanced program for educational leadership, curriculum development, and educational research.',
      duration: '2 Years',
      eligibility: 'B.Ed. Completion is mandatory with 50% marks',
      universities: ['Gurugram University', 'Maharishi Dayanand University']
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'Admission Guidance',
      description: 'Expert counseling for program selection, eligibility assessment, and application process.'
    },
    {
      icon: Award,
      title: 'Complete Support',
      description: 'End-to-end assistance from application to admission completion.'
    }
  ];

  const benefits = [
    'No disruption to your current job',
    'Weekend and evening class schedules',
    'Comprehensive study materials provided',
    'Expert faculty with industry experience',
    'Exam preparation and guidance',
    'Post-graduation placement assistance',
    'Affordable fee structure with installment options',
    'Complete document assistance and verification',
    'University liaison and admission support'
  ];

  const requiredDocuments = [
    '10th onward Marksheet (All academic records)',
    'Original Migration Certificate',
    'Passport Size Photographs (Recent)',
    'Email ID and Contact Number',
    'Signature specimens',
    'Aadhar Card (Identity proof)',
    'Family ID (Additional verification)',
    'B.Ed. Marksheet (For M.Ed. applicants only)'
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Admission Assistance
              <span className="block text-2xl md:text-3xl text-purple-400 mt-2 font-semibold">
                "B.Ed. & M.Ed. Admission Experts in Gurgaon"
              </span>
            </h1>
            
            {/* Quick Apply Button */}
            <div className="mt-8">
              <button
                onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <span>Apply for Assistance</span>
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programs We Support</h2>
            <p className="text-xl text-gray-600">Comprehensive assistance for premier education programs.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                </div>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-900">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Eligibility</p>
                    <p className="font-semibold text-gray-900">{program.eligibility}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm text-gray-600 mb-2">Partner Universities:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {program.universities.map((university, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {university}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Support Services</h2>
            <p className="text-xl text-gray-600">End-to-end assistance for your educational journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <button
                    onClick={() => document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-sm"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documents Required for Admission</h2>
            <p className="text-xl text-gray-600">Complete checklist for hassle-free admission process</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Required Documents Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{document}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> All documents should be original with photocopies. Our team will assist you with document verification and submission process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="admission-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
};

export default AdmissionAssistance;