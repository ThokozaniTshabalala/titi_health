// src/pages/Contact.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import Footer from '../components/Footer'; // Import the Footer

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex-grow p-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-500 mb-6">Contact Us</h1>

        <div className="mb-6">
          <p className="text-gray-600 mb-2">Phone: +27 68 362 8594</p>
          <p className="text-gray-600 mb-2">Email: hello.titihnb@gmail.com</p>
          <p className="text-gray-600">We would love to hear from you!</p>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://www.facebook.com/share/16ccguohon/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >
            <FaFacebook className="w-8 h-8" />
          </a>
          <a 
            href="https://www.instagram.com/titihnb?igsh=MXB1NHl3cndqYWtxbA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=%2B27683628594&text=Hey&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
          <a 
            href="https://www.tiktok.com/@titihnb?_t=ZM-8xhXTdCiDR7&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
          >
            <FaTiktok className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;
