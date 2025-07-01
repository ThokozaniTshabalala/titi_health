import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-18 px-2 py-12 bg-white max-w-5xl mx-auto">
      {/* Text Content */}
      <div className="w-1/2 -ml-8">
        <h2 className="pt-2 text-6xl font-bold mb-2 text-black">Allow Your Body</h2>
        <h3 className="text-5xl mb-6 text-black" style={{ fontFamily: 'Charmonman, cursive' }}>
          to Rest
        </h3>
        <p className="py-4 mb-4 text-black text-2xl">
          Slow down, heal, and feel whole again — because true beauty begins with wellness.
        </p>
        <p className="mb-9 text-black text-2xl">
          Give your body what it needs, book an appointment now
        </p>
        <button className="px-8 py-2 text-2xl rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition">
          Book
        </button>

      </div>

      {/* Placeholder Image */}
      <div className="w-[450px] h-[450px] bg-gray-300 rounded-[50px]"></div>
    </section>
  );
};

export default Hero;
