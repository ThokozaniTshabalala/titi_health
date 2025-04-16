import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative text-white text-center overflow-hidden bg-gray-600" 
      style={{ height: '637px' }}
    >
      {/* Background Image */}
      <img 
        src="./final_banner_woman.png" 
        alt="Spa treatment background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Revitalize Your Senses with Our Services</h2>
        <p className="max-w-lg mx-auto mb-8 text-gray-100">
          Indulge in a world of luxury and tranquility. Our hands-on beauty treatments are designed to rejuvenate your body and mind.
        </p>
        <div className="flex justify-center space-x-4">
  <button className="px-6 py-2 rounded-lg backdrop-blur-md bg-white/10 text-white border border-white/20 shadow-md hover:bg-white/20 transition">
    Book
  </button>
  <button className="px-6 py-2 rounded-lg backdrop-blur-md bg-white/10 text-white border border-white/20 shadow-md hover:bg-white/20 transition">
    Learn More
  </button>
</div>

      </div>
    </section>
  );
};

export default Hero;