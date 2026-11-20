import React from 'react';

const Gallery = () => {
  const galleryEvents = [
    {
      title: "AAIBA 2026–2027 – Introduction Session for Juniors",
      image: "/gallery/intro-session-juniors.jpg",
      category: "Orientation & Mentoring",
    },
    {
      title: "AAIBA Inauguration – Conclave CEO Connect",
      image: "/gallery/conclave-ceo-connect.jpeg",
      category: "Leadership Connect",
    },
    {
      title: "Conclave – AAIBA Stall",
      image: "/gallery/conclave-aaiba-stall.jpeg",
      category: "Exhibition & Showcase",
    },
    {
      title: "MyASB Inauguration",
      image: "/gallery/myasb-inauguration.jpeg",
      category: "Platform Launch",
    },
    {
      title: "Portfolio Development Sessions",
      image: "/gallery/portfolio-development.jpg",
      category: "Skill Workshop",
    },
    {
      title: "Python Training Session",
      image: "/gallery/python-training.jpg",
      category: "Hands-on Technical Training",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Gallery of Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Highlights from AAIBA Lab events, workshops, student mentoring sessions, and flagship industry connects (2026–2027).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
            >
              <div className="w-full h-64 bg-gray-100 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                  {event.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {event.title}
                </h3>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>AAIBA Lab</span>
                  <span className="text-blue-600 font-medium">2026–2027</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
