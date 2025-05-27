
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Heart } from 'lucide-react';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleBuyNow = () => {
    if (selectedSize) {
      navigate('/checkout');
    }
  };

  const handleBuyClick = () => {
    navigate('/product');
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log('Added to cart:', { size: selectedSize });
      // Add to cart logic
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBuyClick={handleBuyClick} />
      
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-black">Home</button>
            <span>/</span>
            <span>Silhouettes</span>
            <span>/</span>
            <span className="text-black">Silhouette No. 1</span>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                <img
                  src={images[selectedImage]}
                  alt="Silhouette No. 1 - Vermilion"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    isFavorited ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                  } hover:bg-red-500 hover:text-white transition-colors`}
                >
                  <Heart className="w-5 h-5" fill={isFavorited ? "currentColor" : "none"} />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[4/5] overflow-hidden bg-gray-100 border-2 ${
                      selectedImage === index ? 'border-black' : 'border-transparent'
                    } hover:border-gray-400 transition-colors`}
                  >
                    <img
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-light text-black mb-4">
                  Silhouette No. 1 – Vermilion
                </h1>
                
                <div className="text-2xl font-light text-black mb-6">
                  ₹ 7,999 
                  <span className="text-sm text-gray-500 ml-2">MRP incl. of all taxes</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  A tailored composition in motion. Cut from structured wool with a sculpted 
                  shoulder and softened hem, this piece captures presence without force. Worn 
                  here in the starkness of a city in motion.
                </p>
              </div>
              
              {/* Size Selection */}
              <div>
                <p className="text-black mb-4 font-medium">Size</p>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black transition-colors font-medium ${
                        selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-red-500 text-sm mt-2">Please select a size</p>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`w-full py-4 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors ${
                    !selectedSize ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Add to Cart
                </button>
                
                <button
                  onClick={handleBuyNow}
                  disabled={!selectedSize}
                  className={`w-full py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors ${
                    !selectedSize ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Buy Now
                </button>
              </div>
              
              {/* Product Details */}
              <div className="space-y-6 border-t pt-8">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-200">
                    <span className="text-black font-medium">Product Details</span>
                    <span className="transform group-open:rotate-180 transition-transform text-xl">+</span>
                  </summary>
                  <div className="py-4 text-gray-700 space-y-2">
                    <p>• 100% virgin wool</p>
                    <p>• Structured shoulders with soft drape</p>
                    <p>• Dry clean only</p>
                    <p>• Made in Italy</p>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-200">
                    <span className="text-black font-medium">Size & Fit</span>
                    <span className="transform group-open:rotate-180 transition-transform text-xl">+</span>
                  </summary>
                  <div className="py-4 text-gray-700 space-y-2">
                    <p>• Model is 5'8" and wearing size S</p>
                    <p>• Relaxed fit through body</p>
                    <p>• Structured shoulders</p>
                    <p>• Length: 28 inches</p>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-4 border-b border-gray-200">
                    <span className="text-black font-medium">Shipping & Returns</span>
                    <span className="transform group-open:rotate-180 transition-transform text-xl">+</span>
                  </summary>
                  <div className="py-4 text-gray-700 space-y-2">
                    <p>• Free shipping on orders above ₹5,000</p>
                    <p>• 30-day return policy</p>
                    <p>• Express delivery available</p>
                    <p>• Complimentary gift wrapping</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
