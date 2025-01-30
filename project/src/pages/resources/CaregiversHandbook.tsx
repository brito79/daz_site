import React from 'react';
import { ArrowLeft, Heart, Calendar, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaregiversHandbook = () => {
  const guidelines = [
    {
      title: "Daily Care Tips",
      icon: Calendar,
      items: [
        "Establish a daily routine to provide structure",
        "Break tasks into simple steps",
        "Allow extra time for activities",
        "Encourage independence where possible",
        "Be patient and flexible"
      ]
    },
    {
      title: "Communication Strategies",
      icon: Heart,
      items: [
        "Speak clearly and calmly",
        "Use simple, direct language",
        "Ask one question at a time",
        "Listen actively and show patience",
        "Pay attention to non-verbal cues"
      ]
    },
    {
      title: "Managing Behavior Changes",
      icon: Brain,
      items: [
        "Identify triggers for difficult behaviors",
        "Stay calm and reassuring",
        "Redirect attention when needed",
        "Maintain a safe environment",
        "Seek support when overwhelmed"
      ]
    },
    {
      title: "Self-Care for Caregivers",
      icon: Shield,
      items: [
        "Take regular breaks",
        "Join support groups",
        "Maintain your own health",
        "Accept help from others",
        "Stay connected with friends"
      ]
    }
  ];

  return (
    <div className="bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/learn" className="flex items-center text-blue-600 mb-8 hover:text-blue-700">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Resources
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Caregiver's Handbook</h1>

        <div className="space-y-12">
          {guidelines.map((guide, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-6">
                <guide.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">{guide.title}</h2>
              </div>
              <ul className="space-y-3">
                {guide.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Additional Support</h3>
          <p className="text-gray-600 mb-4">
            Being a caregiver can be challenging. Remember that you're not alone, 
            and there are resources and support available.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/caregiver-support"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Find Support Groups
            </Link>
            <Link 
              to="/contact"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiversHandbook;