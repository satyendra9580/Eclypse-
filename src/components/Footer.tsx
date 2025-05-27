
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-white font-light text-lg">Eclypse</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Rooted in a philosophy of quiet luxury, our garments are designed to speak softly.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">New Arrivals</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Collections</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Silhouettes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Philosophy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Returns</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Shipping</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex justify-between items-center">
          <p className="text-white/40 text-sm">© 2024 Eclypse. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
