import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import spaData from '../../utils/spaServices.json';
import { sliderSettings } from '../../utils/sliderSettings';
import Card from './Card';

function ServicesSlider() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper && !isBeginning) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper && !isEnd) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // Initialize button states when swiper is ready
  const handleSwiperInit = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="services-wrapper pb-9">
      {/* Full-width underline */}
      <div className="w-full h-px bg-gray-300 mb-8"></div>
      
      <div className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="paddings innerwidth services-container">
          <div>
            <span className="font-bold text-4xl">Our Services</span>
            <div className="services-head flexColStart relative mb-8">
            <p className="pt-4 text-xl">A quick look at the wide range of services we offer</p>
            <p className="text-xl">From health to beauty to self-care, we have it all and its All for You.</p>
            <SliderButtons 
              onPrev={handlePrevSlide} 
              onNext={handleNextSlide}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
            </div>
          </div>

          <Swiper 
            {...sliderSettings} 
            className="services-swiper pb-8"
            ref={swiperRef}
            onSlideChange={handleSlideChange}
            onSwiper={handleSwiperInit}
          >
            {spaData.map((service) => (
              <SwiperSlide key={service.id} 
              className="pb-8">
                <Card
                  image={service.image}
                  price={service.price}
                  title={service.title}
                  description={service.description}
                  buttonText={service.buttonText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ServicesSlider;

const SliderButtons = ({ onPrev, onNext, isBeginning, isEnd }) => {
  return (
    <div className="absolute top-0 right-0 flex gap-3">
      <button 
        onClick={onPrev}
        disabled={isBeginning}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-md border border-gray-100 ${
          isBeginning 
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
            : 'bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-700 cursor-pointer'
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        onClick={onNext}
        disabled={isEnd}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-md border border-gray-100 ${
          isEnd 
            ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
            : 'bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-700 cursor-pointer'
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};