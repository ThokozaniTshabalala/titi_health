// Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ price, image, title, description }) => {
  const navigate = useNavigate();

  const titleToId = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  // Map spaServices titles to fullServiceDescription titles
  const mapServiceTitle = (spaTitle) => {
    const serviceMapping = {
      'Prenatal Care': 'Antenatal Care',
      'Vitamin Drip': 'Vitamin Drip Menu (All Drips R600)',
      'Beauty Facial': 'Beauty Facial',
      'Family Planning': 'Family Planning & Sexual Reproductive Health',
      'Well Baby Clinic/Immunizations': 'Immunizations / Well-Baby Clinic',
      'General Consultations': 'General Health & Consultation',
      'PRPP Treatment': 'PREP Treatment'
    };
    
    return serviceMapping[spaTitle] || spaTitle;
  };

  const handleMoreDetails = () => {
    const mappedTitle = mapServiceTitle(title);
    navigate(`/services#${titleToId(mappedTitle)}`);
  };

  return (
    <div className="relative w-full max-w-[385px] mx-auto rounded-[30px] bg-white shadow-lg hover:shadow-xl overflow-hidden select-none font-sans transition-shadow duration-300">
      <div className="absolute top-7.5 left-6.5 bg-white px-3 py-1 rounded-[25px] font-semibold text-sm shadow-sm z-10">
        {price}
      </div>
      <div className="p-4 pt-5 flex justify-center">
        <div className="rounded-[20px] overflow-hidden w-full">
          <img
            src={image}
            alt={title}
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
      <div className="px-6 pt-2 pb-6">
        <h3 className="text-black font-bold text-xl mb-2 leading-tight">{title}</h3>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">{description}</p>
        <button
          onClick={handleMoreDetails}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-full py-2 font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default Card;