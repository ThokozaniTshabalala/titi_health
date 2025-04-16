import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-6">
        <p className="text-sm text-gray-500 mb-2">Relax</p>
        <h2 className="text-3xl font-bold mb-4">Experience <span className="font-greatVibes">Bliss</span> at Our Spa</h2>
        <p className="max-w-lg mx-auto text-gray-600">
          Soothe your spa experience in three easy steps. Follow our easy steps to connect and rejuvenate.
        </p>
      </div>
      
      {/* Full width container with padding */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-8">
        {/* Flex container for the cards */}
        <div className="flex flex-col md:flex-row justify-between gap-8 max-w-screen-2xl mx-auto">
          {/* Card 1 */}
          <div className="text-center flex-1 md:max-w-xs lg:max-w-sm mx-auto md:mx-0">
            <div className="bg-gray-200 h-48 mb-4 overflow-hidden relative rounded-t-lg">
              <img 
                src="./smile.jpg" 
                alt="Choose your service" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              {/*<span className="text-gray-400 absolute inset-0 flex items-center justify-center">
                Image
              </span>*/}
            </div>
            <h3 className="font-bold mb-2">Step 1: Choose Your Service</h3>
            <p className="text-gray-600">Select our extensive menu of treatments.</p>
          </div>
          
          {/* Card 2 */}
          <div className="text-center flex-1 md:max-w-xs lg:max-w-sm mx-auto md:mx-0">
            <div className="bg-gray-200 h-48 mb-4 overflow-hidden relative rounded-t-lg">
              <img 
                src="./massage_person.jpg" 
                alt="Book your appointment" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              {/*<span className="text-gray-400 absolute inset-0 flex items-center justify-center">
                Image
              </span>*/}
            </div>
            <h3 className="font-bold mb-2">Step 2: Book Your Appointment</h3>
            <p className="text-gray-600">Select a slot using our easy-to-use site.</p>
          </div>
          
          {/* Card 3 */}
          <div className="text-center flex-1 md:max-w-xs lg:max-w-sm mx-auto md:mx-0">
            <div className="bg-gray-200 h-48 mb-4 overflow-hidden relative rounded-t-lg">
              <img 
                src="./pexels-cottonbro-7581088.jpg" 
                alt="Enjoy your experience" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              {/*<span className="text-gray-400 absolute inset-0 flex items-center justify-center">
                Image
              </span>*/}
            </div>
            <h3 className="font-bold mb-2">Step 3: Enjoy Your Experience</h3>
            <p className="text-gray-600">Relax and feel the magical experience.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center px-6">
        <button className="px-6 py-2 bg-white border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white mr-4">
          Book
        </button>

        <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-50">Learn More →</button>
      </div>
    </section>
  );
};

export default HowItWorks;