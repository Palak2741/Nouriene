import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  title: string;
  fields: string[];
  onSubmit?: (data: Record<string, string>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({});
    }, 3000);
  };

  const renderField = (field: string) => {
    const fieldKey = field.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (field === 'Message') {
      return (
        <div key={field}>
          <label htmlFor={fieldKey} className="block text-sm font-medium text-gray-700 mb-2">
            {field}
          </label>
          <textarea
            id={fieldKey}
            rows={4}
            value={formData[fieldKey] || ''}
            onChange={(e) => handleInputChange(fieldKey, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder={`Enter your ${field.toLowerCase()}`}
            required
          />
        </div>
      );
    }

    if (field.includes('Upload')) {
      return (
        <div key={field}>
          <label htmlFor={fieldKey} className="block text-sm font-medium text-gray-700 mb-2">
            {field}
          </label>
          <input
            id={fieldKey}
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      );
    }

    return (
      <div key={field}>
        <label htmlFor={fieldKey} className="block text-sm font-medium text-gray-700 mb-2">
          {field}
        </label>
        <input
          id={fieldKey}
          type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
          value={formData[fieldKey] || ''}
          onChange={(e) => handleInputChange(fieldKey, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder={`Enter your ${field.toLowerCase()}`}
          required
        />
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">Your inquiry has been submitted successfully. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map(renderField)}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
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

export default ContactForm;