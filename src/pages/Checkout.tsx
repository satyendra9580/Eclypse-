
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed:', formData);
  };

  const handleBuyClick = () => {
    navigate('/product');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onBuyClick={handleBuyClick} />
      
      <div className="pt-20 container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <button
                onClick={() => navigate('/product')}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-medium">Shipping Address</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="font-medium">Add New Address</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Apt Number</label>
                  <input
                    type="text"
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 py-3 border border-gray-300 text-black hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm text-gray-600">
              By placing your order, you agree to our company{' '}
              <span className="underline cursor-pointer">Privacy policy</span> and{' '}
              <span className="underline cursor-pointer">Conditions of use</span>.
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Order Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Items - Silhouette No. 1 - Vermilion</span>
                  <span>7,999</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping and handling:</span>
                  <span>200</span>
                </div>
                <div className="flex justify-between">
                  <span>Before tax:</span>
                  <span>6,599</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Tax Collected:</span>
                  <span>1,400</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-medium">
                  <span>Order Total:</span>
                  <span>8,199</span>
                </div>
              </div>
              
              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
