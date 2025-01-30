import { Book, Calendar, HelpCircle, Users } from 'lucide-react';

const CaregiverSupport = () => {
  const resources = [
    {
      icon: Book,
      title: "Educational Resources",
      description: "Access comprehensive guides and materials about dementia care."
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Join local support groups to connect with other caregivers."
    },
    {
      icon: Calendar,
      title: "Care Planning",
      description: "Tools and guidance for creating effective care plans."
    }
  ];

  const supportGroups = [
    {
      name: "TBA",
      location: "65067 Tshabalala Extension, Bulawayo, Zimbabwe",
      schedule: "Week Days, 8:00PM - 4:00 PM",
      contact: "Contact +263 783 146 211"
    }
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Caregiver Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting those who support others. Access resources, connect with other caregivers, 
            and find the help you need.
          </p>
        </div>
      </div>

      {/* Resources Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <resource.icon className="h-12 w-12 text-daz-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-center">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Groups */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Local Support Groups
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {supportGroups.map((group, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <Users className="h-8 w-8 text-daz-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                <p className="text-gray-600 mb-2">{group.location}</p>
                <p className="text-gray-600 mb-2">{group.schedule}</p>
                <p className="text-daz-green">{group.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center mb-6">
            <HelpCircle className="h-8 w-8 text-daz-green mr-4" />
            <h2 className="text-2xl font-bold">Need Immediate Help?</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our helpline is available 24/7 for caregivers who need immediate support or guidance.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-lg font-semibold text-daz-green">
              Call our Helpline: +263 783 146 211
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverSupport;