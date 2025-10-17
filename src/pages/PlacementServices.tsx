import React from 'react';
import { Briefcase, Users, Award, TrendingUp, CheckCircle, Building, Crown, Star, Target, ArrowRight } from 'lucide-react';
import PlacementForm from '../components/PlacementForm';

const PlacementServices: React.FC = () => {
  const roles = [
    'Teachers (PRT, TGT, PGT, Pre-Primary)',
    'Coordinators',
    'Principal',
    'Vice Principal',
  ];

  const partnerSchools = [
    'Mayo College, Ajmer, Rajasthan',
    'Delhi Public School (DPS), Gurgaon',
    'Shalom Hills International School, Gurugram',
    'Shalom Presidency School, Gurugram',
    'Satya School, Gurugram',
    'Euro International School (Euro Group), Gurugram',
    'Narayana e-Techno School (Narayana Group), Gurugram',
    'Sri Chaitanya Techno School (Sri Chaitanya Group), Gurugram'
  ];

  const highlights = [
    { icon: Users, number: '5,000+', label: 'Teachers Successfully Placed' },
    { icon: Building, number: '100+', label: 'Partner Schools in Gurgaon' },
    { icon: Award, number: '10+', label: 'Years as Placement Pioneers' },
    { icon: TrendingUp, number: '95%+', label: 'Placement Success Rate' }
  ];

  const benefits = [
    'Extensive network of top schools in Gurgaon',
    'Personalized career guidance and interview preparation',
    'Regular updates on new openings and opportunities',
    'Transparent process with no hidden charges',
    'Quick turnaround time for qualified candidates'
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold mb-6">
              <Crown className="h-5 w-5" />
              <span>PREMIER SERVICE</span>
              <Star className="h-5 w-5" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Placement Services
              <span className="block text-2xl md:text-3xl text-yellow-400 mt-2 font-semibold">
                "Gurgaon's Pioneer in School Job Placements Since 2015"
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Registration Form Section - Moved to Top */}
      <section id="placement-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlacementForm />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We're Gurgaon's #1 Choice
            </h2>
            <p className="text-xl text-gray-600">Unmatched expertise in educational career placements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl mb-6">
                    <Icon className="h-10 w-10" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-3">{highlight.number}</div>
                  <div className="text-gray-600 font-semibold">{highlight.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gurgaon's First & Most Trusted Placement Service
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Since 2015, we've revolutionized educational career placements in Gurgaon. 
                Our extensive network of 100+ premium schools and proven track record of 5,000+ successful 
                placements make us the definitive choice for educators seeking their dream positions.
              </p>
              
              {/* Apply Button in Content */}
              <div className="mb-8">
                <button
                  onClick={() => document.getElementById('placement-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Fill the Form Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border border-indigo-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-bold text-gray-900">Our Placement Promise</h3>
                </div>
                <p className="text-gray-700">
                  We don't just find you a job - we match you with the perfect school environment 
                  where your skills shine and your career flourishes.
                </p>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional educational environment"
                className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                <span>95%+ Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every Educational Role Covered
            </h2>
            <p className="text-xl text-gray-600">From classroom teachers to administrative leaders - we place them all</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{role}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Schools Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partner Schools Network
            </h2>
            <p className="text-xl text-gray-600">Premium educational institutions where we place our educators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerSchools.map((school, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{school}</h3>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">And Many More...</h3>
              <p className="text-sm text-gray-800">100+ Schools in our network</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementServices;