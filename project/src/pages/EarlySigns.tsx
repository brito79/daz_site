import { AlertTriangle, Brain, ClipboardCheck, Building2 } from 'lucide-react';

const EarlySigns = () => {
  const signs = [
    {
      icon: Brain,
      title: "Memory Loss",
      description: "Difficulty remembering recent events or conversations, while older memories remain clear."
    },
    {
      icon: ClipboardCheck,
      title: "Daily Task Challenges",
      description: "Problems with planning, organizing, or completing familiar daily tasks."
    },
    {
      icon: AlertTriangle,
      title: "Warning Signs",
      description: "Changes in mood, personality, and difficulty with language or spatial awareness."
    }
  ];

  const facilities = [
    {
      name: "Hospital name",
      location: "Location",
      contact: "contact"
    },
    {
      name: "Hospital name",
      location: "Location",
      contact: "contact"
    },
    {
      name: "Hospital name",
      location: "Location",
      contact: "contact"
    }
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Early Signs of Dementia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognizing the early signs of dementia is crucial for early intervention and support.
          </p>
        </div>
      </div>

      {/* Warning Signs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {signs.map((sign, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <sign.icon className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {sign.title}
              </h3>
              <p className="text-gray-600 text-center">
                {sign.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Medical Facilities */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Medical Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <Building2 className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-600 mb-2">{facility.location}</p>
                <p className="text-purple-600">{facility.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlySigns;