import React from 'react';

const TipCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto flex flex-col items-center text-center border border-gray-100">
      <h3 className="text-2xl font-bold mb-4 text-black font-sans">
        {title}
      </h3>
      <p className="text-gray-700 mb-6 font-sans">
        {description}
      </p>
      <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
        Get More Tips
      </button>
    </div>
  );
};

export default TipCard;
