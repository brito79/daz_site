import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
  const benefits = [
    "Access to exclusive resources and educational materials",
    "Priority registration for workshops and events",
    "Quarterly newsletter subscription",
    "Networking opportunities with other members",
    "Voting rights in DAZ general meetings",
    "Discounted entry to paid events",
  ];

  const handleJoin = () => {
    alert('Membership registration will be enabled once database integration is complete.');
  };

  return (
    <div className="bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/get-involved" className="flex items-center text-daz-blue mb-8 hover:text-daz-green">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Get Involved
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Become a Member</h1>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6">Membership Benefits</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-daz-green mt-1 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Membership Options</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Individual Membership</h4>
              <p className="text-gray-600 mb-4">Perfect for individuals interested in supporting our cause</p>
              <p className="text-2xl font-bold mb-4">$../year</p>
              <button
                onClick={handleJoin}
                className="w-full bg-daz-blue text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Join Now
              </button>
            </div>
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Corporate Membership</h4>
              <p className="text-gray-600 mb-4">For organizations wanting to support dementia awareness</p>
              <p className="text-2xl font-bold mb-4">$../year</p>
              <button
                onClick={handleJoin}
                className="w-full bg-daz-blue text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;