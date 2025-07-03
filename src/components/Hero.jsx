import React from 'react';
import { whatsappActions } from '../utils/whatsappUtils';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-18 px-4 lg:px-2 py-8 lg:py-12 bg-white max-w-5xl mx-auto">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 lg:-ml-8 text-center lg:text-left">
        <h2 className="pt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-black">
          Allow Your Body
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6 text-black" style={{ fontFamily: 'Charmonman, cursive' }}>
          to Rest
        </h3>
        <p className="py-2 lg:py-4 mb-3 lg:mb-4 text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Slow down, heal, and feel whole again — because true beauty begins with wellness.
        </p>
        <p className="mb-6 lg:mb-9 text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Give your body what it needs, book an appointment now
        </p>
        <button 
          onClick={whatsappActions.bookSession}
          className="px-6 lg:px-8 py-2 text-lg lg:text-2xl rounded-xl bg-pink-600 text-white shadow-md hover:bg-pink-700 transition duration-300"
        >
          Book
        </button>
      </div>

      {/* Image */}
      <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gray-300 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] mt-6 lg:mt-0"></div>
    </section>
  );
};

export default Hero;