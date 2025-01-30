
import { Heart, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundimage from '../../assets/images/background-image.jpg';

const HeroSection = () => {
  return (
    <div className="relative bg-purple-50 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={backgroundimage}
          alt="Elderly person with caregiver in a supportive environment"
        />
        <div className="absolute inset-0 bg-purple-900 mix-blend-multiply opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Understanding & Supporting
            <span className="block mt-2">Lives Affected by Dementia</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Join DAZ in our mission to provide support, education, and hope for individuals 
            and families affected by dementia in Zimbabwe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/support"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <Heart className="mr-2 h-5 w-5" />
              Get Support
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Brain className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;