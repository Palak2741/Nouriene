import React from 'react';
import { ArrowRight, Briefcase, Book, GraduationCap, CheckCircle, Users, Award, TrendingUp, Star, Crown, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  const services = [
    {
      name: 'Placement Services',
      description: 'As pioneers in Gurgaon, we\'ve placed over 5,000+ teachers in a network of 100+ schools. We assist with all school roles including TGT, PGT, PRT, Principal, Vice Principal, Admin, HR, Lab Assistant, and more. Your gateway to educational excellence.',
      icon: Briefcase,
      ctaText: 'Register Now',
      ctaLink: '/placement-services',
      featured: true,
      tagline: 'Your Career, Our Priority'
    },
    {
      name: 'Institute Services',
      description: 'Expert tuition in Maths, Science, Accounts, Business Studies, and Economics for classes 6 to 12. Choose from Home Tuition, Coaching Classes, or Online Tuition. Backed by 20 years of experience and meteoric results with 95%+ success rate.',
      icon: Book,
      ctaText: 'Start Learning',
      ctaLink: '/institute-services',
      tagline: 'Excellence in Every Lesson'
    },
    {
      name: 'Admission Assistance',
      description: 'Guiding aspiring educators to secure admissions in B.Ed. and M.Ed. programs. We provide end-to-end support with flexible classes, complete study materials, and exam preparation. Complete your graduation without disrupting your career.',
      icon: GraduationCap,
      ctaText: 'Apply Today',
      ctaLink: '/admission-assistance',
      tagline: 'Your Future Starts Here'
    }
  ];

  const testimonials = [
    {
      content: 'Thanks to their placement services, I landed my dream job as a PGT teacher in a top Gurgaon school! The support and guidance was exceptional.',
      author: 'Priya Sharma',
      role: 'PGT Mathematics Teacher'
    },
    {
      content: 'The online tuition helped my child score 98% in boards. The faculty is amazing and truly cares about student success. Highly recommended!',
      author: 'Rajesh Kumar',
      role: 'Parent of Class 12 Student'
    },
    {
      content: 'Seamless B.Ed. admission and flexible classes made it easy to balance work and studies. I completed my degree without any career disruption.',
      author: 'Anjali Verma',
      role: 'B.Ed. Graduate'
    }
  ];

  const stats = [
    { icon: Crown, number: '5,000+', label: 'Teachers Placed', color: 'text-yellow-600' },
    { icon: Award, number: '100+', label: 'Partner Schools', color: 'text-indigo-600' },
    { icon: TrendingUp, number: '95%+', label: 'Success Rate', color: 'text-green-600' },
    { icon: Zap, number: '20+', label: 'Years Experience', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-semibold">Where Excellence Meets Opportunity</span>
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming Educational 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Journeys</span>
              </h1>
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-2">
                  Gurgaon's #1 Educational Services Provider
                </h2>
                <p className="text-lg md:text-xl text-indigo-200 mb-4">
                  🏆 5000+ Teacher Placements | 📚 95%+ Academic Results | 🎓 B.Ed./M.Ed. Admission Experts
                </p>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 leading-relaxed">
                Premier Home Tuition, School Job Placements & Higher Education Admission Assistance in Gurgaon. 
                20+ Years of Proven Excellence in Educational Services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/placement-services"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Crown className="h-5 w-5" />
                  <span>Find Your Dream Job</span>
                </a>
                <a
                  href="/institute-services"
                  className="inline-flex items-center justify-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Educational excellence and career placement services"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                <span className="text-sm">20+ Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Placement Banner */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Star className="h-6 w-6 animate-pulse" />
            <p className="text-lg font-bold text-center">
              🎯 FEATURED: Teacher Placement Services - 5,000+ Success Stories!
            </p>
            <Star className="h-6 w-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record of Excellence
            </h2>
            <p className="text-xl text-gray-600">Numbers that speak for our commitment</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <Icon className={`h-10 w-10 ${stat.color}`} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary CTA for Placement */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Crown className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-semibold">MOST POPULAR SERVICE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Land Your Dream Teaching Job?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed">
              Join 5,000+ educators who found their perfect school placement through our pioneering network. 
              From TGT to Principal positions - we've got you covered!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Briefcase className="h-6 w-6" />
                <span>Get Expert Guidance</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30"
              >
                <span>Talk to Our Experts</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Educational Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From career placements to academic excellence - we're your complete educational partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-gray-600">Real experiences from our satisfied students, parents, and educators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Educational Journey Starts Here
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Join thousands who've transformed their careers and academic futures with NourineInstitute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/placement-services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Crown className="h-5 w-5" />
              <span>Start Your Career Journey</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-30"
            >
              <span>Get Expert Guidance</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;