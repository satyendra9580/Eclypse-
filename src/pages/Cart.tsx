
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Silhouette No.1 Vermilion',
      price: 7999,
      size: 'M',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      id: 2,
      name: 'Silhouette No.2 Midnight',
      price: 8999,
      size: 'L',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    }
  ]);

  const handleBuyClick = () => {
    navigate('/product');
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onBuyClick={handleBuyClick} />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-8">Your cart is empty</p>
              <button
                onClick={() => navigate('/')}
                className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex gap-6">
                      <div className="w-24 h-32 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-medium">{item.name}</h3>
                            <p className="text-gray-600">Size: {item.size}</p>
                            <p className="text-lg font-medium mt-2">₹ {item.price.toLocaleString()}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹ {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>₹ {shipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>₹ {tax.toLocaleString()}</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total</span>
                      <span>₹ {total.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full mt-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <button
                    onClick={() => navigate('/')}
                    className="w-full mt-3 py-3 border border-gray-300 text-black hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
