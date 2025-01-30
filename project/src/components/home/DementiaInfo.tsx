import React from 'react';
import { Brain, Users, Clock, Heart } from 'lucide-react';

const DementiaInfo = () => {
  const facts = [
    {
      icon: Brain,
      title: "What is Dementia?",
      description: "Dementia is not a single disease but a term that describes a group of symptoms affecting memory, thinking, and social abilities.",
      details: [
        "Progressive decline in cognitive function",
        "Affects memory, thinking, and behavior",
        "Multiple types including Alzheimer's disease",
        "Can affect daily activities and independence"
      ]
    },
    {
      icon: Users,
      title: "Global Impact",
      description: "Over 55 million people worldwide live with dementia, with nearly 10 million new cases every year.",
      details: [
        "Affects millions globally",
        "Growing concern in Zimbabwe",
        "Impacts families and communities",
        "Economic and social challenges"
      ]
    },
    {
      icon: Clock,
      title: "Early Detection",
      description: "Early diagnosis can help provide the best opportunities for treatment, support and planning for the future.",
      details: [
        "Memory problems",
        "Confusion with time or place",
        "Changes in mood or behavior",
        "Difficulty with familiar tasks"
      ]
    },
    {
      icon: Heart,
      title: "Support Matters",
      description: "Supporting someone with dementia requires understanding, patience, and access to the right resources.",
      details: [
        "Family support networks",
        "Professional care options",
        "Community resources",
        "Educational programs"
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Understanding Dementia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about dementia and how it affects millions of lives worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <fact.icon className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {fact.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {fact.description}
              </p>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                {fact.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DementiaInfo;