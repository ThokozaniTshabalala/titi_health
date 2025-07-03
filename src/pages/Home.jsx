// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServicesSlider from '../components/Services/ServicesSlider';
import BreakReminder from '../components/BreakReminder';
import CTA from '../components/CTA';
import BlogList from '../components/HealthTips/BlogList';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsApp/WhatsAppFloat';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSlider />
      <BreakReminder />
      <CTA />
      <BlogList />
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat 
        phoneNumber="+27698061824" // Replace with your WhatsApp number
        message="Hello! I'm interested in your services and would like to know more."
      />
    </>
  );
};

export default Home;
