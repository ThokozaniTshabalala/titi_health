import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TipCard from './TipCard';
import healthTips from '../../utils/healthTips.json'; // Import JSON data

const BlogList = () => {
  return (
    <section className="pb-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Updated Header with Pink Stroke */}
        <div className="mb-8 text-center md:text-left relative">
          <p className="text-sm text-gray-500 font-sans">Health Tips</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 font-sans inline-block relative">
            Short Tips for You
            <span className="block relative">
              <img
                src="/pinkStroke.svg"
                alt="Pink Stroke Underline"
                className="absolute left-0 bottom-0 w-full h-16"
                style={{ transform: 'translateY(70%)' }}
              />
            </span>
          </h2>
          <p className="text-gray-600 mt-4 font-sans">Simple tips to improve your daily health and well-being.</p>
        </div>

        {/* Carousel Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-8"
        >
          {healthTips.map((tip) => (
            <SwiperSlide key={tip.id} className="pb-9">
              <TipCard
                title={tip.title}
                description={tip.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-right">
          <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 font-sans transition duration-200">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;

