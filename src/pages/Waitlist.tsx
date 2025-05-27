
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Waitlist = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleBuyClick = () => {
    navigate('/product');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', { firstName, lastName, email });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header onBuyClick={handleBuyClick} />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8">
              Join the Waitlist
            </h1>
            <p className="text-xl text-white/80 mb-16 leading-relaxed">
              Be the first to know about new collections, exclusive pieces, and special events.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                  alt="Exclusive Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-left">
                <h2 className="text-3xl font-light text-white mb-8">Early Access</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Join our exclusive waitlist and get priority access to limited edition pieces, 
                  private sales, and behind-the-scenes content.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-4 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-4 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                  >
                    Join Waitlist
                  </button>
                </form>
                
                <p className="text-white/60 text-sm mt-6">
                  By joining, you agree to receive updates about Eclypse collections and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Waitlist;
