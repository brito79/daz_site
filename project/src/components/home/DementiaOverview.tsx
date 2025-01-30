import { Brain, Activity, HeartPulse, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DementiaOverview = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Understanding Dementia & Alzheimer's
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the key differences and how they affect daily life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Brain className="h-6 w-6 text-purple-600 mr-2" />
              What is Dementia?
            </h3>
            <p className="text-gray-700 mb-4">
              Dementia is an umbrella term describing a decline in cognitive function 
              severe enough to interfere with daily life. It affects memory, thinking, 
              behavior, and the ability to perform everyday activities.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2"></span>
                Multiple types and causes
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2"></span>
                Affects various brain functions
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2"></span>
                Can be caused by different conditions
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Activity className="h-6 w-6 text-blue-600 mr-2" />
              What is Alzheimer's?
            </h3>
            <p className="text-gray-700 mb-4">
              Alzheimer's disease is the most common cause of dementia, accounting for 
              60-80% of cases. It's characterized by specific changes in the brain 
              affecting memory and cognitive function.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Progressive brain disorder
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Specific protein build-up in brain
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                Most common form of dementia
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <HeartPulse className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Early Detection</h3>
            <p className="text-gray-600">
              Recognizing early signs can lead to better management and care planning.
            </p>
            <Link 
              to="/early-signs" 
              className="inline-block mt-4 text-purple-600 hover:text-purple-700"
            >
              Learn about early signs →
            </Link>
          </div>

          <div className="text-center p-6">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support Network</h3>
            <p className="text-gray-600">
              Connect with others and access resources for better care and understanding.
            </p>
            <Link 
              to="/support" 
              className="inline-block mt-4 text-purple-600 hover:text-purple-700"
            >
              Find support →
            </Link>
          </div>

          <div className="text-center p-6 md:col-span-2 lg:col-span-1">
            <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prevention Strategies</h3>
            <p className="text-gray-600">
              Learn about lifestyle changes that may help reduce dementia risk.
            </p>
            <Link 
              to="/resources/understanding-dementia" 
              className="inline-block mt-4 text-purple-600 hover:text-purple-700"
            >
              Explore strategies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DementiaOverview;