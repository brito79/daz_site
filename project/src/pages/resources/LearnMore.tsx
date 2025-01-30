import React from 'react';
import { Book, Video, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const resources = [
    {
      title: "Understanding Dementia",
      type: "Guide",
      icon: Book,
      description: "Comprehensive guide about dementia types, symptoms, and progression",
      link: "/resources/understanding-dementia"
    },
    {
      title: "Caregiver's Handbook",
      type: "PDF",
      icon: FileText,
      description: "Essential information for family members and caregivers",
      link: "/resources/caregivers-handbook"
    },
    {
      title: "Educational Videos",
      type: "Video Series",
      icon: Video,
      description: "Watch our educational video series about dementia care",
      link: "/resources/videos"
    },
    {
      title: "Research Updates",
      type: "Articles",
      icon: Download,
      description: "Latest research and developments in dementia care",
      link: "/resources/research"
    }
  ];

  return (
    <div className="bg-white pt-16">
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Learning Resources</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of resources to better understand 
            dementia and learn about effective care strategies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <resource.icon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <span className="text-sm text-gray-500">{resource.type}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link 
                to={resource.link}
                className="inline-block text-blue-600 hover:text-blue-700 font-medium"
              >
                Access Resource →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the resources you need. 
            Contact us for personalized assistance.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;