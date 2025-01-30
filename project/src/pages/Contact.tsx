
import { Mail, Phone, MapPin, MessageCircle, } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+263 292 482431, +263 783 146 211"],
      action: "tel:+263 292 482431"
    },
    {
      icon : MessageCircle,
      title: "WhatsApp",
      details: ["+263 783 146 211"],
      action: "https://wa.me/+263 783 146 211"
    },
    {
      icon: Mail,
      title: "Email",
      details : ["TBA"],
      action : "mailto: TBA"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["65067 Tshabalala Extension", "Bulawayo", "Zimbabwe"],
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help. Reach out to us with any questions, concerns, or support needs.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <info.icon className="h-8 w-8 text-daz-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {info.title}
              </h3>
              <div className="text-center">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2">{detail}</p>
                ))}
              </div>
              {info.action && (
                <div className="mt-4 text-center">
                  <a
                    href={info.action}
                    className="text-daz-green hover:text-daz-blue transition-colors"
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.title === "Location" ? "View Map" : `Contact via ${info.title}`}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daz-green focus:border-daz-green"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daz-green focus:border-daz-green"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daz-green focus:border-daz-green"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-daz-green focus:border-daz-green"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-daz-green text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;