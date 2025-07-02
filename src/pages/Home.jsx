// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServicesSlider from '../components/Services/ServicesSlider';
import BreakReminder from '../components/BreakReminder';
import CTA from '../components/CTA';
import BlogList from '../components/HealthTips/BlogList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSlider />
      <BreakReminder />
      <CTA />
      <BlogList />
      <Footer />
    </>
  );
};

export default Home;
