import { Phone, Users, Book, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetSupport = () => {
  const supportServices = [
    {
      icon: Phone,
      title: "24/7 Helpline",
      description: "Immediate support and guidance available round the clock",
      contact: "+263 292 482431 / +263 783 146 211"
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Connect with others facing similar challenges",
      link: "/caregiver-support#groups"
    },
    {
      icon: Book,
      title: "Resources",
      description: "Access educational materials and guides",
      link: "/resources"
    },
    {
      icon: Calendar,
      title: "Counseling",
      description: "Schedule one-on-one counseling sessions",
      link: "/contact"
    }
  ];

  return (
    <div className="bg-white pt-16">
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Get Support</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We're here to help you navigate the challenges of dementia. 
            Find the support you need through our various services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <service.icon className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              {service.contact && typeof service.contact == 'string' ? (
                <a 
                  href={`tel:${service.contact}`}
                  className="block text-center text-purple-600 font-semibold hover:text-purple-700"
                >
                  {service.contact}
                </a>
              ) : (
                <Link 
                  to={service!.link}
                  className="block text-center text-purple-600 font-semibold hover:text-purple-700"
                >
                  Learn More →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 p-8 rounded-lg">
          <div className="flex items-start space-x-4">
            <MessageCircle className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
              <p className="text-gray-600 mb-4">
                Our support team is available 24/7 to assist you with any concerns or questions.
                Don't hesitate to reach out.
              </p>
              <a 
                href="tel:+263242776290"
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;