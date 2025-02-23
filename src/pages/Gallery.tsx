import React from 'react';

const Gallery = () => {
  const eventPhotos = [
    '/img/event1.jpg', // Replace with your actual image paths
    '/img/event2.jpg',
    '/img/event3.jpg',
    '/img/event4.jpg',
    '/img/event5.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Gallery of Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventPhotos.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={photo} alt={`Event ${index + 1}`} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 