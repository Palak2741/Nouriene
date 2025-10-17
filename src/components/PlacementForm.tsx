import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Upload, CheckCircle } from 'lucide-react';

interface PlacementFormData {
  name: string;
  city: string;
  gender: string;
  experience: string;
  preferences: Array<{
    level: string;
    subjects: string[];
  }>;
  cv: FileList;
  email: string;
  phone: string;
}

const PlacementForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [preferences, setPreferences] = useState<Array<{ level: string; subjects: string[] }>>([
    { role: '', subjects: [] }
  ]);
  const [otherRoleInputs, setOtherRoleInputs] = useState<{ [key: number]: string }>({});

  const { register, handleSubmit, formState: { errors }, reset } = useForm<PlacementFormData>();

  const teachingLevels = ['PRT', 'TGT', 'PGT', 'Others'];
  const jobRoles = ['PRT', 'PGT', 'TGT', 'Pre-Primary', 'Coordinators', 'Vice Principals', 'Principals', 'Others'];
  
  const subjectsByLevel = {
    PRT: ['Hindi', 'English', 'Maths', 'EVS', 'Computer'],
    TGT: ['English', 'Hindi', 'Maths', 'Science', 'SST', 'Computer', 'Sanskrit', 'Physical Education', 'Spanish', 'French', 'Others'],
    PGT: ['English', 'Hindi', 'Maths', 'Physics', 'Chemistry', 'Biology', 'Accounts', 'Business Studies', 'Economics', 'Computer', 'Physical Education', 'Sanskrit', 'Others']
  };

  const addPreference = () => {
    setPreferences([...preferences, { role: '', subjects: [] }]);
  };

  const removePreference = (index: number) => {
    if (preferences.length > 1) {
      setPreferences(preferences.filter((_, i) => i !== index));
    }
  };

  const updatePreference = (index: number, field: string, value: any) => {
    const updated = [...preferences];
    if (field === 'role') {
      updated[index] = { role: value, subjects: [] };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    setPreferences(updated);
  };

  const updateOtherRoleInput = (index: number, value: string) => {
    setOtherRoleInputs(prev => ({ ...prev, [index]: value }));
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
      }, 1500);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    // Reset file input
    const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const onSubmit = async (data: any) => {
  setIsSubmitting(true);

  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('city', data.city);
  formData.append('gender', data.gender);
  formData.append('experience', data.experience);
  formData.append('timestamp', new Date().toISOString());
  formData.append('preferences', JSON.stringify(preferences.filter(p => p.role)));

  if (data.cv && data.cv.length > 0) {
    formData.append('attachment', data.cv[0]); // 'attachment' must match PHP $_FILES['attachment']
  }

  try {
    const response = await fetch('/api/send-placement-form.php', {
      method: 'POST',
      body: formData // <-- no JSON stringify, let browser set content-type
    });

    if (response.ok) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
        setPreferences([{ role: '', subjects: [] }]);
      }, 5000);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }

  setIsSubmitting(false);
};

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-xl border border-green-200">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
          <p className="text-gray-600 text-lg mb-4">
            Thank you for registering with our Placement Services. Our team will review your profile and contact you within 24-48 hours.
          </p>
          <p className="text-sm text-gray-500">
            You will receive a confirmation email at the provided address.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Join Our Educator Network</h3>
        <p className="text-gray-600 text-sm sm:text-base">Join our network of 5,000+ successfully placed educators</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current City *
            </label>
            <input
              {...register('city', { required: 'City is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your current city"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gender *
            </label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Experience in Your Current Role *
            </label>
            <select
              {...register('experience', { required: 'Experience is required' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Experience</option>
              <option value="0-1">0-1 Years</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5-10">5-10 Years</option>
              <option value="10+">10+ Years</option>
            </select>
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Secondary Contact Number
            </label>
            <input
              {...register('secondaryPhone')}
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter secondary contact number"
            />
          </div>
        </div>

        {/* Teaching Preferences */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Preferred Job Role *
          </label>
          
          {preferences.map((preference, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-gray-900">Preference {index + 1}</h4>
                {preferences.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePreference(index)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                )}
                {preference.role === 'Others' && (
                  <input
                    type="text"
                    placeholder="Please specify your role"
                    value={otherRoleInputs[index] || ''}
                    onChange={(e) => updateOtherRoleInput(index, e.target.value)}
                    className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Role
                </label>
                <select
                  value={preference.role}
                  onChange={(e) => updatePreference(index, 'role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select Role</option>
                  {jobRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              {(preference.role && ['Pre-Primary', 'TGT', 'PGT', 'PRT'].includes(preference.role)) && (
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjects (Select multiple)
                  </label>
                  <div className="max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2">
                    {subjectsByLevel[preference.role === 'Pre-Primary' ? 'PRT' : (preference.role === 'PRT' ? 'PRT' : preference.role) as keyof typeof subjectsByLevel]?.map(subject => (
                      <label key={subject} className="flex items-center space-x-2 py-1">
                        <input
                          type="checkbox"
                          checked={preference.subjects.includes(subject)}
                          onChange={(e) => {
                            const subjects = e.target.checked
                              ? [...preference.subjects, subject]
                              : preference.subjects.filter(s => s !== subject);
                            updatePreference(index, 'subjects', subjects);
                          }}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-700">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addPreference}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            + Add Another Preference
          </button>
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload CV/Resume *
          </label>
          
          {!uploadedFile ? (
            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
              isUploading 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-indigo-400'
            }`}>
              {isUploading ? (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-2" />
                  <span className="text-blue-600 font-medium">Uploading...</span>
                </div>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <input
                    {...register('cv', { required: 'CV is required' })}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <span className="text-indigo-600 font-medium">Click to upload</span>
                    <span className="text-gray-500"> or drag and drop</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                </>
              )}
            </div>
          ) : (
            <div className="border-2 border-green-300 bg-green-50 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-green-800 font-medium">File Uploaded Successfully!</p>
                  <p className="text-sm text-green-600">{uploadedFile.name}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Upload Different File
              </button>
            </div>
          )}
          {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Processing Application...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Apply Now</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PlacementForm;