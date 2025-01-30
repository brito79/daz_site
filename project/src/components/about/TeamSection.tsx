import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Manyau",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. John Moyo",
      role: "Medical Director",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
    },
    {
      name: "Ms. Grace Mutasa",
      role: "Community Outreach",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-daz-blue mb-12">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;