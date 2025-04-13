import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 mb-2">Relax</p>
        <h2 className="text-3xl font-bold mb-4">Experience Bliss at Our Spa</h2>
        <p className="max-w-lg mx-auto text-gray-600">
          Soothe your spa experience in three easy steps. Follow our easy steps to connect and rejuvenate.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        <div className="text-center">
          <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
          <h3 className="font-bold mb-2">Step 1: Choose Your Service</h3>
          <p className="text-gray-600">Select our extensive menu of treatments.</p>
        </div>
        
        <div className="text-center">
          <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
          <h3 className="font-bold mb-2">Step 2: Book Your Appointment</h3>
          <p className="text-gray-600">Select a slot using our easy-to-use site.</p>
        </div>
        
        <div className="text-center">
          <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
          <h3 className="font-bold mb-2">Step 3: Enjoy Your Experience</h3>
          <p className="text-gray-600">Relax and feel the magical experience.</p>
        </div>
      </div>
      
      <div className="text-center">
        <button className="px-6 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">Book</button>
        <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-50">Learn More →</button>
      </div>
    </section>
  );
};

export default HowItWorks;