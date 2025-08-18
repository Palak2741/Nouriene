import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Gurgaon, India', '(Complete address will be provided)']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-XXXXXXXXXX', 'Mon-Sat: 9:00 AM - 7:00 PM']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@eduinstitute.com', 'admissions@eduinstitute.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your educational journey? We're here to help with personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm
                title="Send Us a Message"
                fields={['Name', 'Email', 'Phone', 'Subject', 'Message']}
              />
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us Here</h3>
                  <p className="text-gray-600">Interactive map will be embedded here</p>
                  <p className="text-sm text-gray-500 mt-2">Gurgaon, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our services.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What subjects do you offer tuition for?",
                answer: "We offer expert tuition in Mathematics, Science (Physics, Chemistry, Biology), Accounts, Business Studies, and Economics for classes 6-12."
              },
              {
                question: "How does the placement process work?",
                answer: "Our placement process includes profile assessment, job matching, interview preparation, and ongoing support until successful placement in our network of 100+ schools."
              },
              {
                question: "Can working professionals pursue B.Ed./M.Ed. through your assistance?",
                answer: "Yes! Our flexible program includes evening and weekend classes, allowing working professionals to complete their degree without career disruption."
              },
              {
                question: "What is your success rate for placements?",
                answer: "We maintain a 95%+ placement success rate with over 5,000 educators successfully placed in schools across Gurgaon."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;