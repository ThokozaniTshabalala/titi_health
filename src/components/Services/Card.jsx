import React from 'react';

const Card = ({ price, image, title, description, onMoreDetails }) => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto rounded-[20px] bg-white shadow-lg hover:shadow-xl overflow-hidden select-none font-sans transition-shadow duration-300">
      <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-[20px] font-semibold text-sm shadow-md z-10">
        {price}
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 pt-5 pb-6">
        <h3 className="text-black font-bold text-xl mb-2 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">{description}</p>
        <button
          onClick={onMoreDetails}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-full py-3.5 font-semibold text-base transition-all duration-300 transform hover:scale-[1.02]"
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default Card;