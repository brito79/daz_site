import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: '',
    experience: '',
    interests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later with database integration
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in volunteering! We will contact you soon.');
  };

  return (
    <div className="bg-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/get-involved" className="flex items-center text-daz-blue mb-8 hover:text-daz-green">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Get Involved
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Volunteer Application</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-daz-blue focus:ring-daz-blue"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-daz-blue focus:ring-daz-blue"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-daz-blue focus:ring-daz-blue"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <select
              id="availability"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-daz-blue focus:ring-daz-blue"
              value={formData.availability}
              onChange={(e) => setFormData({...formData, availability: e.target.value})}
            >
              <option value="">Select availability</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Relevant Experience
            </label>
            <textarea
              id="experience"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-daz-blue focus:ring-daz-blue"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-daz-blue text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;