import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, BookOpen } from 'lucide-react';

interface TuitionFormData {
  name: string;
  email: string;
  phone: string;
  studentClass: string;
  subjects: string[];
  mode: string;
  address: string;
  preferredTime: string;
}

const TuitionForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TuitionFormData>();

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 
    'Hindi', 'Accounts', 'Business Studies', 'Economics', 'Computer Science'
  ];

  const modes = ['Home Tuition', 'Coaching Classes', 'Online Tuition'];

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    const formData = {
      ...data,
      subjects: selectedSubjects,
      service: 'Institute Services - Tuition',
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/send-tuition-inquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
          setSelectedSubjects([]);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl border border-blue-200">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Inquiry Submitted!</h3>
          <p className="text-gray-600 text-lg mb-4">
            Thank you for your interest in our tuition services. Our academic counselor will contact you within 24 hours to discuss your requirements.
          </p>
          <p className="text-sm text-gray-500">
            We'll help you achieve academic excellence with our proven teaching methods.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Tuition Inquiry Form</h3>
        <p className="text-gray-600">Start your journey to academic excellence</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Student/Parent Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter name"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter email"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Student Class *
            </label>
            <select
              {...register('studentClass', { required: 'Class is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Class</option>
              {[6, 7, 8, 9, 10, 11, 12].map(cls => (
                <option key={cls} value={cls}>Class {cls}</option>
              ))}
            </select>
            {errors.studentClass && <p className="text-red-500 text-sm mt-1">{errors.studentClass.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Subjects Required * (Select multiple)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {subjects.map(subject => (
              <label key={subject} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => toggleSubject(subject)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">{subject}</span>
              </label>
            ))}
          </div>
          {selectedSubjects.length === 0 && (
            <p className="text-red-500 text-sm mt-1">Please select at least one subject</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Mode *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modes.map(mode => (
              <label key={mode} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                <input
                  {...register('mode', { required: 'Mode is required' })}
                  type="radio"
                  value={mode}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm font-medium text-gray-700">{mode}</span>
              </label>
            ))}
          </div>
          {errors.mode && <p className="text-red-500 text-sm mt-1">{errors.mode.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address (For Home Tuition)
          </label>
          <textarea
            {...register('address')}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter complete address"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Time
          </label>
          <input
            {...register('preferredTime')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., Evening 6-8 PM, Morning 9-11 AM"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || selectedSubjects.length === 0}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting Inquiry...</span>
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

export default TuitionForm;