import { ArrowLeft, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Memory Walk 2024",
      date: "April 15, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Harare Gardens",
      description: "Join us for our annual Memory Walk to raise awareness about dementia. The walk will include educational stops, refreshments, and a ceremony.",
      registrationFee: "Free",
      capacity: 500,
    },
    {
      id: 2,
      title: "Caregiver Workshop",
      date: "May 20, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Rainbow Towers, Harare",
      description: "A comprehensive workshop for caregivers covering essential topics in dementia care, stress management, and available resources.",
      registrationFee: "$10",
      capacity: 100,
    },
    {
      id: 3,
      title: "World Alzheimer's Day Symposium",
      date: "September 21, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Meikles Hotel, Harare",
      description: "Annual symposium bringing together healthcare professionals, researchers, and families to discuss latest developments in dementia care.",
      registrationFee: "$15",
      capacity: 200,
    }
  ];

  return (
    <div className="bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/get-involved" className="flex items-center text-daz-blue mb-8 hover:text-daz-green">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Get Involved
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h1>

        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-xl font-semibold text-daz-blue">{event.title}</h2>
                <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                  <Calendar className="w-5 h-5 mr-2" />
                  {event.date}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {event.location}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{event.description}</p>

              <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-daz-blue" />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                  <div>
                    <span className="font-medium">Fee: {event.registrationFee}</span>
                  </div>
                </div>
                <button 
                  className="bg-daz-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => alert('Registration will be enabled once database integration is complete.')}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;