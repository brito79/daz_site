
import { CheckCircle, CheckSquare2Icon, Heart, Shield, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach our work with empathy and understanding."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all we do."
    },
    {
      icon: Users,
      title: "Community Centred",
      description: "We build strong, supportive networks for those affected."
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "We are responsible for our actions and decisions."
    },
    {
      icon : CheckSquare2Icon,
      title : "Inclusiveness",
      description : "We ensure that everyone is welcome and valued."
    }

  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-daz-blue mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <value.icon className="w-12 h-12 text-daz-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;