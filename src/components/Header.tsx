
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onBuyClick?: () => void;
}

const Header = ({ onBuyClick }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-light text-lg">Eclypse</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/about')}
              className="text-white/80 hover:text-white transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => navigate('/waitlist')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Waitlist
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Cart
            </button>
            <button 
              onClick={onBuyClick}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Buy
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
