import React, { useState } from 'react';
import { Send, CheckCircle, GraduationCap } from 'lucide-react';

const AdmissionForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    currentStatus: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData = {
      ...formData,
      service: 'Admission Assistance',
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/send-admission-inquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            program: '',
            currentStatus: '',
            message: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-xl border border-purple-200">
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h3>
          <p className="text-gray-600 text-lg mb-4">
            Thank you for your interest in our admission assistance program. Our education counselor will contact you within 24 hours to guide you through the admission process.
          </p>
          <p className="text-sm text-gray-500">
            We'll help you secure admission without disrupting your career.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Admission Assistance Inquiry</h3>
        <p className="text-gray-600">Get expert guidance for your B.Ed./M.Ed. journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Program of Interest *
            </label>
            <select
              value={formData.program}
              onChange={(e) => handleInputChange('program', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Program</option>
              <option value="B.Ed.">B.Ed. (Bachelor of Education)</option>
              <option value="M.Ed.">M.Ed. (Master of Education)</option>
              <option value="Both">Both B.Ed. and M.Ed.</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Status *
            </label>
            <select
              value={formData.currentStatus}
              onChange={(e) => handleInputChange('currentStatus', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Status</option>
              <option value="Working Professional">Working Professional</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Homemaker">Homemaker</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message / Additional Information
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            placeholder="Tell us about your requirements, preferred schedule, or any questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;