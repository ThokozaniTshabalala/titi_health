// src/pages/About.jsx
import React from 'react';
import Footer from '../components/Footer'; // Import the footer

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex-grow p-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">
          We Provide Holistic Health and Beauty
        </h1>

        {/* Image Placeholder */}
        <div className="w-full max-w-3xl h-80 bg-gray-200 rounded-lg mb-8 shadow-lg flex items-center justify-center">
          <span className="text-gray-500 text-lg">Image Placeholder</span>
        </div>

        {/* Text Section */}
        <div className="max-w-3xl text-center">
          <p className="text-gray-600 mb-4">
            Our health and beauty business was founded in XXXX by Nurse No. 1, a qualified nurse with a passion for promoting overall well-being. We believe that true beauty comes from taking care of the body, mind, and soul.
          </p>
          <p className="text-gray-600">
            With a holistic approach, we offer professional health and beauty services designed to help you feel good, look great, and live well. Your health is our priority.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
