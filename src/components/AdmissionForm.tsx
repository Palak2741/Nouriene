import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, GraduationCap } from 'lucide-react';

interface AdmissionFormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  currentStatus: string;
  qualification: string;
  workingStatus: string;
  preferredSchedule: string;
  experience: string;
}

const AdmissionForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<AdmissionFormData>();

  const selectedProgram = watch('program');

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    const formData = {
      ...data,
      service: 'Admission Assistance',
      timestamp: new Date().toISOString()
    };

    console.log('Admission Form Data:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
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
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Admission Assistance Form</h3>
        <p className="text-gray-600">Take the next step in your educational journey</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Program of Interest *
            </label>
            <select
              {...register('program', { required: 'Program is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Program</option>
              <option value="B.Ed.">B.Ed. (Bachelor of Education)</option>
              <option value="M.Ed.">M.Ed. (Master of Education)</option>
              <option value="Both">Both B.Ed. and M.Ed.</option>
            </select>
            {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Educational Qualification *
            </label>
            <select
              {...register('qualification', { required: 'Qualification is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Qualification</option>
              <option value="Graduate">Graduate (Any Stream)</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="B.Ed.">B.Ed. (for M.Ed. applicants)</option>
              <option value="Other">Other</option>
            </select>
            {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Status *
            </label>
            <select
              {...register('currentStatus', { required: 'Current status is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Status</option>
              <option value="Working Professional">Working Professional</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Homemaker">Homemaker</option>
            </select>
            {errors.currentStatus && <p className="text-red-500 text-sm mt-1">{errors.currentStatus.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Teaching Experience (if any)
          </label>
          <select
            {...register('experience')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select Experience</option>
            <option value="No Experience">No Experience</option>
            <option value="0-1 Years">0-1 Years</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Class Schedule *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Weekend Classes (Saturday & Sunday)',
              'Evening Classes (After 6 PM)',
              'Morning Classes (Before 10 AM)',
              'Flexible Schedule'
            ].map(schedule => (
              <label key={schedule} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                <input
                  {...register('preferredSchedule', { required: 'Schedule preference is required' })}
                  type="radio"
                  value={schedule}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm font-medium text-gray-700">{schedule}</span>
              </label>
            ))}
          </div>
          {errors.preferredSchedule && <p className="text-red-500 text-sm mt-1">{errors.preferredSchedule.message}</p>}
        </div>

        {selectedProgram && (
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              {selectedProgram === 'B.Ed.' ? 'B.Ed. Program Benefits:' : 
               selectedProgram === 'M.Ed.' ? 'M.Ed. Program Benefits:' : 
               'Program Benefits:'}
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Flexible class timings for working professionals</li>
              <li>• Complete study materials and notes provided</li>
              <li>• Expert faculty with industry experience</li>
              <li>• Exam preparation and guidance</li>
              <li>• Post-graduation placement assistance</li>
            </ul>
          </div>
        )}

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
              <span>Submit Application</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;