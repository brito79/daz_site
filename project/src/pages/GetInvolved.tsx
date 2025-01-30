import { HandHeart, DollarSign, Calendar, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const GetInvolved = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers who make a difference in the lives of people affected by dementia.",
      action: "Apply Now",
      path: "/volunteer"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support our mission through financial contributions that help fund our programs and services.",
      action: "Donate",
      path: "/donate"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Participate in our awareness events, fundraisers, and community activities.",
      action: "View Events",
      path: "/events"
    },
    {
      icon: UserPlus,
      title: "Become a Member",
      description: "Join DAZ as a member and be part of our growing community supporting dementia awareness.",
      action: "Join Now",
      path: "/membership"
    }
  ];

  const upcomingEvents = [
    {
      title: "Memory Walk 2025",
      date: "Month day, Year",
      location: "Location",
      description: "Event description and its motives."
    },
    {
      title: "Memory Walk 2025",
      date: "Month day, Year",
      location: "Location",
      description: "Event description and its motives."
    }
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <p className='text-2xl font-sans
      hover:blue-600 mb-4 mx-8 text-red-500 flex justify-center items-center'>These are dummy static event cards that can be set and removed
      depending on the Organisation's events. </p>
      <div className="relative bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in making a difference in the lives of people affected by dementia. 
            There are many ways to contribute and support our cause.
          </p>
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <opportunity.icon className="h-12 w-12 text-daz-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {opportunity.description}
              </p>
              <button 
                onClick={() => navigate(opportunity.path)}
                className="w-full bg-daz-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                {opportunity.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <Calendar className="h-8 w-8 text-daz-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">📅 {event.date}</p>
                <p className="text-gray-600 mb-2">📍 {event.location}</p>
                <p className="text-gray-700">{event.description}</p>
                <Link to="/events">
                  <button className="mt-4 bg-daz-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-daz-blue text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Stay Updated</h2>
          <p className="text-center mb-6">
            Subscribe to our newsletter to receive updates about our events, 
            programs, and ways to get involved.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <button 
                onClick={() => alert('Newsletter subscription will be enabled once database integration is complete.')}
                className="bg-white text-daz-blue px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;