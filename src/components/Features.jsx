import React from 'react';

const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Discover Our Exceptional Health, Beauty, and Spa Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-black">🌍</span>
              </div>
              <h3 className="font-bold">Expert Therapists: Committed to Your Well-Being</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our skilled team is dedicated to providing you with treatments tailored to your needs.
            </p>
            <a href="#" className="text-gray-600 hover:text-gray-800">Learn More →</a>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-black">🌟</span>
              </div>
              <h3 className="font-bold">Luxurious Facilities for a Pampering Experience</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our beautiful spa builds the perfect space for your spa experience.
            </p>
            <a href="#" className="text-gray-600 hover:text-gray-800">Explore →</a>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-black">👤</span>
              </div>
              <h3 className="font-bold">Personalized Experience Tailored Just for You</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We carefully match services to meet your personal preferences and needs.
            </p>
            <a href="#" className="text-gray-600 hover:text-gray-800">Sign Up →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;