import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappActions } from '../utils/whatsappUtils'; // Import WhatsApp actions

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-6 bg-white relative">
      <div className="w-full md:w-2/3 mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-pink-500 font-bold font-greatVibes">Titi</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 px-8">
          <nav className="flex space-x-6">
            <Link to="/" className="text-lg text-gray-500 hover:text-pink-400">Home</Link>
            <Link to="/services" className="text-lg text-gray-500 hover:text-pink-400">Services</Link>
            <Link to="/about" className="text-lg text-gray-500 hover:text-pink-400">About us</Link>
            <Link to="/contact" className="text-lg text-gray-500 hover:text-pink-400">Contact Us</Link>
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <button
            onClick={whatsappActions.bookSession}
            className="px-4 py-1 rounded border border-pink-400 text-pink-600 bg-pink-100/30 backdrop-blur-md shadow-sm hover:bg-pink-100/50 transition"
          >
            Book
          </button>
          <button
            onClick={whatsappActions.requestConsultation}
            className="px-4 py-1 rounded text-white bg-pink-500/90 backdrop-blur-md shadow-sm hover:bg-pink-400/90 transition"
          >
            Enquire
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 transition-all duration-300 z-50 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-6 py-4 space-y-4">
          {/* Mobile Navigation */}
          <nav className="space-y-3">
            <Link
              to="/"
              className="block text-lg text-gray-500 hover:text-pink-400 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-lg text-gray-500 hover:text-pink-400 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-lg text-gray-500 hover:text-pink-400 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="block text-lg text-gray-500 hover:text-pink-400 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <button
              className="w-full px-4 py-3 rounded border border-pink-400 text-pink-600 bg-pink-100/30 backdrop-blur-md shadow-sm hover:bg-pink-100/50 transition text-center"
              onClick={() => {
                setIsMenuOpen(false);
                whatsappActions.bookSession();
              }}
            >
              Book
            </button>
            <button
              className="w-full px-4 py-3 rounded text-white bg-pink-500/90 backdrop-blur-md shadow-sm hover:bg-pink-400/90 transition text-center"
              onClick={() => {
                setIsMenuOpen(false);
                whatsappActions.requestConsultation();
              }}
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
