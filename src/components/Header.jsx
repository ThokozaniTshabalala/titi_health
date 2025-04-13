import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-6 bg-white">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        {/* Left Side: Title and Navigation */}
        <div className="flex items-center justify-evenly w-full">
          <h1 className="text-2xl text-pink-500 font-bold font-display">Titi</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-lg text-pink-400 hover:text-gray-500">Home</a>
            <a href="#" className="text-lg text-pink-400 hover:text-gray-500">Services</a>
            <a href="#" className="text-lg text-pink-400 hover:text-gray-500">About us</a>
            <a href="#" className="text-lg text-pink-400 hover:text-gray-500">Contact Us</a>
          </nav>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex space-x-2">
          <button className="px-4 py-1 border text-pink-600 border-pink-500 rounded hover:bg-gray-50">Book</button>
          <button className="px-4 py-1 bg-pink-600 text-white rounded hover:bg-pink-400">Enquire</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
