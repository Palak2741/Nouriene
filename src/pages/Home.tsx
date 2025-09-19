import React from 'react';
import { ArrowRight, Briefcase, Book, Users, Award, TrendingUp, Star, Crown, Target, CheckCircle, Building, GraduationCap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Full-Screen Hero with Audience Split */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden flex items-center pt-14 sm:pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-5 sm:top-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 left-1/2 sm:bottom-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 sm:px-8 py-2 sm:py-4 rounded-full font-bold mb-6 sm:mb-8 shadow-xl">
              <Star className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-lg">Gurgaon's Premier Educational Services</span>
              <Star className="h-4 w-4 sm:h-6 sm:w-6" />
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                Bridging Dreams with
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>

            <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-indigo-200 mb-3 sm:mb-4 px-2">
              Connecting Educators with Schools • 10+ Years • 5,000+ Placements
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 px-2">
              Your Gateway to Educational Excellence
            </h2>
            
            <p className="text-base sm:text-xl text-indigo-100 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              Whether you're a school seeking qualified educators or a teacher looking for the perfect position, 
              we connect talent with opportunity across Gurgaon's premier educational institutions.
            </p>
          </div>

          {/* Single CTA Section */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto px-3">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-white border-opacity-20 shadow-2xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Make the Perfect Match?
                </h3>
                <p className="text-base sm:text-lg text-indigo-100 mb-6 sm:mb-8">
                  Join our network of successful educators and premier schools
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/placement-services"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span>Find Teaching Opportunities</span>
                  </a>
                  <a
                    href="/institute-services"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <Book className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span>Explore Academic Services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Audience Split Cards */}
          {/* Trust Indicators */}
          <div className="text-center mt-12 sm:mt-20">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 bg-white bg-opacity-10 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white border-opacity-20">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400" />
                <span className="text-white font-semibold text-sm sm:text-base">Trusted by 100+ Schools</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 sm:h-6 sm:w-6 text-green-400" />
                <span className="text-white font-semibold text-sm sm:text-base">5,000+ Placements</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
                <span className="text-white font-semibold text-sm sm:text-base">10+ Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connecting Excellence Across Gurgaon
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The bridge between talented educators and premier schools, creating perfect matches for educational success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Crown, number: '5,000+', label: 'Educators Placed', color: 'text-yellow-600', bg: 'bg-yellow-100' },
              { icon: Building, number: '100+', label: 'Partner Schools', color: 'text-indigo-600', bg: 'bg-indigo-100' },
              { icon: Users, number: '95%+', label: 'Match Success Rate', color: 'text-green-600', bg: 'bg-green-100' },
              { icon: Award, number: '10+', label: 'Years Connecting', color: 'text-purple-600', bg: 'bg-purple-100' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 ${stat.bg} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <Icon className={`h-8 w-8 sm:h-12 sm:w-12 ${stat.color}`} />
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-sm sm:text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Bridge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Bridge the Gap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting the right talent with the right opportunities in Gurgaon's educational landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* For Educators */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Teacher Placement Services</h3>
                <p className="text-gray-600">For Schools & Educational Institutions</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Positions We Fill:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>• PGT</div>
                    <div>• TGT</div>
                    <div>• Pre-Primary</div>
                    <div>• Coordinators</div>
                    <div>• Principals</div>
                    <div>• Vice Principals</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Our Network:</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• DPS Gurgaon</div>
                    <div>• Shalom Hills International</div>
                    <div>• Euro International School</div>
                    <div>• 100+ Premium Schools</div>
                  </div>
                </div>
              </div>

              <a
                href="/placement-services"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Join Our Network</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* For Schools */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Schools</h3>
                <p className="text-gray-600">Educational Institutions & Management</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Access to qualified educators',
                  'Pre-screened candidates',
                  'Quick hiring process',
                  'Replacement guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Hire Quality Staff</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* For Students */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border-2 border-emerald-200 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">For Students</h3>
                <p className="text-gray-600">Academic Excellence & Growth</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Expert coaching classes',
                  'Home & online tuition on request',
                  'Proven teaching methods',
                  'Flexible scheduling',
                  '95%+ success rate'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/institute-services"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make the Perfect Connection?
          </h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-3xl mx-auto">
            Whether you're seeking talent or opportunity, we're here to create the perfect educational match
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Star className="h-6 w-6" />
              <span>Connect With Us</span>
            </a>
            <a
              href="/placement-services"
              className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;