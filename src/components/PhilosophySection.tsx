
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-8">
            Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
          </h2>
          
          <button className="group flex items-center text-white hover:text-red-500 transition-colors">
            <span className="border-b border-white group-hover:border-red-500 transition-colors">
              Learn more about Eclypse
            </span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
