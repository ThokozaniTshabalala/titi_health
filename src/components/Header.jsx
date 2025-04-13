import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-6 bg-white">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        {/* Left Side: Title and Navigation */}
        <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold font-display">Titi</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-xl hover:text-gray-500">Home</a>
            <a href="#" className="text-xl hover:text-gray-500">Services</a>
            <a href="#" className="text-xl hover:text-gray-500">About us</a>
            <a href="#" className="text-xl hover:text-gray-500">Contact Us</a>
          </nav>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex space-x-2">
          <button className="px-4 py-1 border border-gray-200 rounded hover:bg-gray-50">Book</button>
          <button className="px-4 py-1 bg-black text-white rounded hover:bg-gray-800">Enquire</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
