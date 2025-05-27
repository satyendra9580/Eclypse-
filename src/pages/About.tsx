
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/product');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBuyClick={handleBuyClick} />
      
      <div className="pt-20">

        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="About Eclypse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-6">
              <h1 className="text-6xl md:text-8xl font-light mb-8">About Eclypse</h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Our Philosophy</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  We believe in the power of understated elegance. Each piece is crafted with meticulous attention to detail, 
                  using only the finest materials and time-honored techniques.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our designs speak to those who appreciate subtlety over spectacle, quality over quantity, 
                  and timeless style over fleeting trends.
                </p>
              </div>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece is made with ethically sourced materials and sustainable practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-medium mb-4">Craftsmanship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Handcrafted with precision and care by skilled artisans.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-medium mb-4">Timelessness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designs that transcend seasons and trends, built to last.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
