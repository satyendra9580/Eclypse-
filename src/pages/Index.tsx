
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import ProductShowcase from '../components/ProductShowcase';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';

const Index = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/product');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header onBuyClick={handleBuyClick} />
      <HeroSection />
      <PhilosophySection />
      <ProductShowcase />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
