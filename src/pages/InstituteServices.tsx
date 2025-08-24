import React from 'react';
import { Home, Users, Monitor, CheckCircle, Award, Clock, User } from 'lucide-react';
import TuitionForm from '../components/TuitionForm';

const InstituteServices: React.FC = () => {
  const subServices = [
    {
      name: 'Home Tuition',
      description: 'Personalized one-on-one sessions at your home for focused learning in Maths, Science, Accounts, Business Studies, and Economics (Classes 6-12).',
      icon: Home,
      features: ['Personalized attention', 'Flexible scheduling', 'Comfortable learning environment', 'Parent supervision possible']
    },
    {
      name: 'Coaching Classes',
      description: 'Group classes at our institute with experienced faculty, proven to deliver results above 95% overall.',
      icon: Users,
      features: ['Experienced faculty', 'Group learning benefits', 'Structured curriculum', 'Peer interaction']
    },
    {
      name: 'Online Tuition',
      description: 'Flexible virtual classes for convenient learning from anywhere, maintaining our high standards of excellence.',
      icon: Monitor,
      features: ['Learn from anywhere', 'Recorded sessions', 'Interactive whiteboards', 'Digital resources']
    }
  ];

  const highlights = [
    { icon: Clock, text: '20 years of experience' },
    { icon: Award, text: 'Experienced faculty' },
    { icon: CheckCircle, text: '100% board exam scores for top students' }
  ];

  const faculty = [
    {
      name: 'Mr. Nourin Kakkar',
      qualification: 'M.Sc, B.Ed',
      experience: '18 years',
      subject: 'Mathematics',
      specialization: 'Advanced Mathematics & Problem Solving'
    },
    {
      name: 'Mr. Chanky Tatya',
      qualification: 'M.Com, M.Ed, B.Ed',
      experience: '18 years',
      subject: 'Mathematics & Economics',
      specialization: 'Mathematical Economics & Business Studies'
    },
    {
      name: 'Mr. Atit Power',
      qualification: 'M.Com, B.Ed',
      experience: '17 years',
      subject: 'Accounts',
      specialization: 'Financial Accounting & Business Finance'
    },
    {
      name: 'Mr. Sandeep Yadav',
      qualification: 'M.Tech, B.Ed',
      experience: '13 years',
      subject: 'Science',
      specialization: 'Physics, Chemistry & Applied Sciences'
    },
    {
      name: 'Ms. Priyanka Makkar',
      qualification: 'M.A, B.Ed',
      experience: '5 years',
      subject: 'English',
      specialization: 'English Literature & Communication Skills'
    }
  ];

  const subjects = ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Accounts', 'Business Studies', 'Economics'];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Academic Excellence
              <span className="block text-2xl md:text-3xl text-blue-400 mt-2 font-semibold">
                "Gurgaon's Most Trusted Home Tuition & Coaching Classes"
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{highlight.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Style</h2>
            <p className="text-xl text-gray-600">Flexible options designed to match your preferences and schedule.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subjects We Cover</h2>
            <p className="text-xl text-gray-600">Expert instruction across core academic subjects for Classes 6-12.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Faculty</h2>
            <p className="text-xl text-gray-600">Experienced educators dedicated to your academic success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                  <p className="text-indigo-600 font-semibold">{teacher.qualification}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold text-gray-900">{teacher.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subject:</span>
                    <span className="font-semibold text-gray-900">{teacher.subject}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600 text-center">{teacher.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TuitionForm />
        </div>
      </section>
    </div>
  );
};

export default InstituteServices;