import React from 'react';

const BreakReminder = () => {
  return (
    <section className="py-16 px-3 bg-white flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
          When last did you take a break?
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 font-sans">
          You only have one body, take care of it.
        </p>
        
        {/* Grey area for an image */}
        <div className="bg-gray-200 rounded-2xl w-full h-80 md:h-96">
          {/* This div is intended to hold an image, if one were to be added later */}
        </div>
      </div>
    </section>
  );
};

export default BreakReminder;