import React from 'react';

const BlogList = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-500">Blog</p>
          <h2 className="text-2xl font-bold mb-2">Latest Insights and Tips</h2>
          <p className="text-gray-600">Explore our latest articles on health and beauty.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="bg-gray-200 h-48 mb-4"></div>
            <h3 className="font-bold mb-2">5 Essential Skincare Tips</h3>
            <p className="text-gray-600 mb-4">The ultimate guide to healthy, glowing skin even in tough times.</p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="text-sm font-bold">John Doe</p>
                <p className="text-xs text-gray-500">5 minutes read</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-200 h-48 mb-4"></div>
            <h3 className="font-bold mb-2">Top Trends in Hair Care</h3>
            <p className="text-gray-600 mb-4">Discover the latest in hair trends, styles, and products.</p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="text-sm font-bold">Jane Smith</p>
                <p className="text-xs text-gray-500">3 minutes read</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-200 h-48 mb-4"></div>
            <h3 className="font-bold mb-2">The Benefits of Regular Spa Visits</h3>
            <p className="text-gray-600 mb-4">How regular spa therapies can improve your wellness and relaxation.</p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="text-sm font-bold">Mark Johnson</p>
                <p className="text-xs text-gray-500">7 minutes read</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">View all</button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;