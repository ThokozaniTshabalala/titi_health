import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter for the latest updates on our offerings and promotions.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button className="px-4 py-2 bg-pink-500 text-white rounded-r hover:bg-gray-800">Join</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By joining, you agree that Zago will send content to maintain updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;