
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductShowcase = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Premium wool blend in signature vermilion",
      description: "A tailored composition in motion",
      price: "₹ 7,999"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Discrete side pockets with clean finish",
      description: "Structured elegance redefined",
      price: "₹ 8,999"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      title: "Hand-cut and assembled in small batches",
      description: "Minimalist sophistication",
      price: "₹ 9,999"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
      title: "Discrete side pockets with clean finish",
      description: "Contemporary elegance",
      price: "₹ 10,999"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      title: "Hand-cut and assembled in small batches",
      description: "Modern sophistication",
      price: "₹ 11,999"
    }
  ];

  const handleProductClick = () => {
    navigate('/product');
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Our Collection</h2>
          <p className="text-white/60 text-lg">Discover pieces that speak softly</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div 
                  className="group relative overflow-hidden cursor-pointer bg-white h-full"
                  onClick={handleProductClick}
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-center justify-center">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center text-white opacity-0 group-hover:opacity-100">
                        <h3 className="text-2xl font-light mb-3">{product.title}</h3>
                        <p className="text-sm text-white/80 mb-4">{product.description}</p>
                        <p className="text-lg font-medium mb-6">{product.price}</p>
                        <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-medium text-black mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <p className="text-lg font-medium text-black">{product.price}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
          <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductShowcase;
