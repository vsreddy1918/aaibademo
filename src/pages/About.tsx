import React from 'react';

const About = () => {
  const mentors = [
    { name: 'Dr. Prashobhan Palakkeel', role: 'Mentor', image: '/img/prashobhan.jpg' },
    { name: 'Ajith Kumar', role: 'Mentor', image: '/img/ajith.jpg' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={mentor.image} alt={mentor.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <p className="text-gray-600">{mentor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About; 