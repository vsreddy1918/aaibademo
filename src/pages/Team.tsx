import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Dr. Prashobhan Palakkeel', role: 'Mentor', image: '/img/prashobhan.jpg' },
    { name: 'Ajith Kumar', role: 'Mentor', image: '/img/ajith.jpg' },
    // Add more team members as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 