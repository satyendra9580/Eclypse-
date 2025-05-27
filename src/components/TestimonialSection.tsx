
import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-xs text-white/60 uppercase tracking-wider mb-8">OUR CUSTOMERS</p>
          
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8">
              "Understated, but unforgettable. It feels like it was made for me"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
              <div className="text-left">
                <p className="text-white font-medium">Random Woman</p>
                <p className="text-white/60 text-sm">NY, USA</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
