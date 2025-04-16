import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-6 bg-white">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        {/* Left Side: Title and Navigation */}
        <div className="flex items-center justify-evenly w-full">
          <h1 className="text-2xl text-pink-500 font-bold font-greatVibes">Titi</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-lg text-gray-500  hover:text-pink-400" >Home</a>
            <a href="#" className="text-lg text-gray-500  hover:text-pink-400">Services</a>
            <a href="#" className="text-lg text-gray-500  hover:text-pink-400">About us</a>
            <a href="#" className="text-lg text-gray-500  hover:text-pink-400">Contact Us</a>
          </nav>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex space-x-2">
          <button className="px-4 py-1 rounded border border-pink-400 text-pink-600 bg-pink-100/30 backdrop-blur-md shadow-sm hover:bg-pink-100/50 transition">
           Book
          </button>
          <button className="px-4 py-1 rounded text-white bg-pink-500/90 backdrop-blur-md shadow-sm hover:bg-pink-400/90 transition">
             Enquire
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
