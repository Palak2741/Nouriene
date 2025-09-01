import React from 'react';
import { ArrowRight, Briefcase, Book, Users, Award, TrendingUp, Star, Crown, Target, CheckCircle, Building, GraduationCap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Full-Screen Hero with Audience Split */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold mb-8 shadow-xl">
              <Star className="h-6 w-6" />
              <span className="text-lg">Gurgaon's Premier Educational Services</span>
              <Star className="h-6 w-6" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
                Transforming Educational
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Journeys
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-indigo-200 mb-4">
              20+ Years of Excellence • 5,000+ Success Stories
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              What Brings You Here Today?
            </h2>
          </div>

          {/* Audience Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Schools & Institutions Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-yellow-400 transform group-hover:scale-105 transition-all duration-300 min-h-[500px] flex flex-col">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl mb-6 shadow-xl">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    <Crown className="h-5 w-5" />
                    <span>PREMIER SERVICE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Are You a School or Institution?
                  </h3>
                  <p className="text-xl text-gray-700 font-semibold">
                    Need Qualified Teachers & Staff?
                  </p>
                </div>

                <div className="flex-1 space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Placement Expertise</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-yellow-600">5,000+</div>
                        <div className="text-sm text-gray-600">Teachers Placed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600">100+</div>
                        <div className="text-sm text-gray-600">Partner Schools</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'All Teaching Positions (TGT, PGT, PRT)',
                      'Administrative Roles (Principal, VP, HR)',
                      'Support Staff (Lab Assistant, Admin)',
                      'Gurgaon\'s Largest School Network'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/placement-services"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-6 rounded-2xl font-bold text-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
                >
                  <Briefcase className="h-6 w-6" />
                  <span>Explore Teacher Placement</span>
                  <ArrowRight className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Students & Parents Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-emerald-400 transform group-hover:scale-105 transition-all duration-300 min-h-[500px] flex flex-col">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-xl">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold mb-4">
                    <Book className="h-5 w-5" />
                    <span>ACADEMIC EXCELLENCE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Are You a Student or Parent?
                  </h3>
                  <p className="text-xl text-gray-700 font-semibold">
                    Want Academic Excellence?
                  </p>
                </div>

                <div className="flex-1 space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Academic Success</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-emerald-600">95%+</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-teal-600">20+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Home Tuition for Classes 1-12',
                      'Expert Faculty & Proven Methods',
                      'Maths, Science, Accounts, Business',
                      'Flexible Timing & Online Options'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/institute-services"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-6 rounded-2xl font-bold text-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
                >
                  <Book className="h-6 w-6" />
                  <span>Explore Academic Services</span>
                  <ArrowRight className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 bg-white bg-opacity-10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white border-opacity-20">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="text-white font-semibold">Gurgaon's #1 Choice</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-green-400" />
                <span className="text-white font-semibold">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-400" />
                <span className="text-white font-semibold">Trusted by Thousands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Gurgaon Trusts Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of excellence in educational services with measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Crown, number: '5,000+', label: 'Teachers Placed', color: 'text-yellow-600', bg: 'bg-yellow-100' },
              { icon: Building, number: '100+', label: 'Partner Schools', color: 'text-indigo-600', bg: 'bg-indigo-100' },
              { icon: TrendingUp, number: '95%+', label: 'Success Rate', color: 'text-green-600', bg: 'bg-green-100' },
              { icon: Award, number: '20+', label: 'Years Excellence', color: 'text-purple-600', bg: 'bg-purple-100' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`relative inline-flex items-center justify-center w-24 h-24 ${stat.bg} rounded-2xl mb-6 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <Icon className={`h-12 w-12 ${stat.color}`} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated expertise for each audience with proven methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Placement Services Detail */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-yellow-200 shadow-xl">
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
                    <div>• TGT Teachers</div>
                    <div>• PGT Teachers</div>
                    <div>• PRT Teachers</div>
                    <div>• Principals</div>
                    <div>• Vice Principals</div>
                    <div>• Admin Staff</div>
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
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Crown className="h-6 w-6" />
                <span>Find Quality Educators</span>
              </a>
            </div>

            {/* Academic Services Detail */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border-2 border-emerald-200 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mb-4">
                  <Book className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-600">For Students & Parents</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Learning Options:</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>• Home Tuition (Classes 1-12)</div>
                    <div>• Coaching Classes</div>
                    <div>• Online Tuition</div>
                    <div>• Flexible Scheduling</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <h4 className="font-bold text-gray-900 mb-2">Subjects Covered:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>• Mathematics</div>
                    <div>• Science</div>
                    <div>• Accounts</div>
                    <div>• Business Studies</div>
                    <div>• Economics</div>
                    <div>• All Subjects</div>
                  </div>
                </div>
              </div>

              <a
                href="/institute-services"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Book className="h-6 w-6" />
                <span>Start Learning Journey</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-3xl mx-auto">
            Join thousands who've achieved their goals with Noriene Institute's expert guidance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Star className="h-6 w-6" />
              <span>Get Expert Guidance</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;