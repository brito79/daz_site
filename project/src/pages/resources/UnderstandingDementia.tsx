import React from 'react';
import { ArrowLeft, Brain, AlertTriangle, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnderstandingDementia = () => {
  const sections = [
    {
      title: "Types of Dementia",
      icon: Brain,
      content: [
        {
          subtitle: "Alzheimer's Disease",
          description: "The most common form of dementia, accounting for 60-80% of cases. Characterized by memory loss and cognitive decline."
        },
        {
          subtitle: "Vascular Dementia",
          description: "Caused by reduced blood flow to the brain, often following a stroke or series of small strokes."
        },
        {
          subtitle: "Lewy Body Dementia",
          description: "Characterized by abnormal protein deposits affecting brain chemistry and leading to cognitive problems."
        },
        {
          subtitle: "Frontotemporal Dementia",
          description: "Affects the front and sides of the brain, impacting behavior and language."
        }
      ]
    },
    {
      title: "Common Symptoms",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Cognitive Changes",
          description: "Memory loss, confusion, difficulty communicating, problems with reasoning and judgment."
        },
        {
          subtitle: "Psychological Changes",
          description: "Depression, anxiety, paranoia, agitation, and inappropriate behavior."
        },
        {
          subtitle: "Physical Changes",
          description: "Problems with balance, tremors, trouble eating and swallowing, and loss of bladder control."
        }
      ]
    },
    {
      title: "Risk Factors",
      icon: Heart,
      content: [
        {
          subtitle: "Age",
          description: "Risk increases significantly with age, especially after 65."
        },
        {
          subtitle: "Family History",
          description: "Having a family member with dementia may increase your risk."
        },
        {
          subtitle: "Lifestyle Factors",
          description: "Smoking, excessive alcohol use, poor diet, and lack of exercise can increase risk."
        }
      ]
    },
    {
      title: "Prevention Strategies",
      icon: Clock,
      content: [
        {
          subtitle: "Mental Stimulation",
          description: "Engage in puzzles, reading, and learning new skills to keep your mind active."
        },
        {
          subtitle: "Physical Activity",
          description: "Regular exercise improves blood flow to the brain and may reduce risk."
        },
        {
          subtitle: "Social Engagement",
          description: "Maintaining social connections helps keep cognitive function sharp."
        }
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Understanding Dementia</h1>

        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center mb-6">
              <section.icon className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {section.content.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{item.subtitle}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Need Professional Advice?</h3>
          <p className="text-gray-600 mb-4">
            If you're concerned about dementia symptoms in yourself or a loved one, 
            don't hesitate to reach out to healthcare professionals.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingDementia;