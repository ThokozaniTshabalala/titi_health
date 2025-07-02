import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 px-6 bg-white flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* Left side: Text and Button */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans">
            Why choose us?
          </h2>
          <ul className="list-disc pl-5 text-lg md:text-xl text-gray-700 space-y-3 mb-8">
            <li>Qualified Nurse Led Treatments</li>
            <li>Holistic health meets beauty</li>
            <li>Personalized care</li>
            <li>5-star rated services</li>
          </ul>
          <button className="bg-pink-600 hover:bg-pink-700 text-white  py-3 px-8 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
            Get A consultation
          </button>
        </div>

        {/* Right side: Grey image placeholder */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="bg-gray-200 rounded-3xl w-full max-w-lg h-80 md:h-96 flex items-center justify-center">
            {/* This div is intended to hold an image, if one were to be added later */}
            <span className="text-gray-500 text-xl">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
