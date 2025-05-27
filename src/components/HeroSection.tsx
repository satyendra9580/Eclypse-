import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Hero Section"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-6">
            Silhouette<br />
            No. 1
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem.
          </p>
          <button className="group flex items-center bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
            <span className="mr-2">Shop Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;