import React from 'react';
import services from '../utils/fullServiceDescription.json';
import Footer from '../components/Footer';
import { whatsappActions } from '../utils/whatsappUtils';

const Services = () => {
  // Function to get the appropriate WhatsApp action based on service title
  const getWhatsAppAction = (serviceTitle) => {
    switch (serviceTitle) {
      case 'General Health & Consultation':
        return whatsappActions.generalHealth;
      case 'Immunizations / Well-Baby Clinic':
        return whatsappActions.immunizations;
      case 'Family Planning & Sexual Reproductive Health':
        return whatsappActions.familyPlanning;
      case 'Antenatal Care':
        return whatsappActions.antenatalService;
      case 'PREP Treatment':
        return whatsappActions.prepTreatment;
      case 'Vitamin Drip Menu (All Drips R600)':
        return whatsappActions.vitaminDrip;
      default:
        return whatsappActions.bookSession; // Fallback to general booking
    }
  };

  return (
    <div className="p-10 min-h-screen">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const whatsappAction = getWhatsAppAction(service.title);

        return (
          <section
            key={service.id}
            className="py-16 px-6 bg-white flex items-center justify-center"
          >
            <div
              className={`max-w-6xl mx-auto flex flex-col md:flex-row ${
                isEven ? '' : 'md:flex-row-reverse'
              } items-center justify-between gap-10 w-full`}
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-gray-800">
                  {service.title}
                </h2>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 mb-6">
                    <thead>
                      <tr className="bg-pink-100">
                        <th className="py-3 px-4 border-b text-left">Service</th>
                        <th className="py-3 px-4 border-b text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.table.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="py-3 px-4 border-b">{item.service}</td>
                          <td className="py-3 px-4 border-b">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button 
                  onClick={whatsappAction}
                  className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
                >
                  Book Now
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="rounded-3xl overflow-hidden w-full max-w-lg h-80 md:h-96 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;