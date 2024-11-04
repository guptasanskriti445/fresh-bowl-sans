import React, { useEffect, useState } from 'react';
import menuData from '../assets/menuData.json'; // Import the JSON data
import ProductCard from './ProductCard'; // Import the ProductCard component

// Import images
import Designer1 from "../assets/background-bg1.jfif";
import Designer2 from "../assets/background-bg2.jfif";
import Designer3 from "../assets/background-bg3.jfif";

// Create a mapping of image names to imported images
const imageMap = {
  "Designer1.jpeg": Designer1,
  "Designer2.jpeg": Designer2,
  "Designer3.jpeg": Designer3,
} as const;

// Define the type for the image map keys
type ImageMapKeys = keyof typeof imageMap;

const MenuCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const visibleProductsCount = 3; // Adjust based on screen size

  // Create a new array that includes duplicates for seamless looping
  const extendedMenuData = [
    ...menuData.slice(-visibleProductsCount), // Last items for seamless transition
    ...menuData,
    ...menuData.slice(0, visibleProductsCount), // First items for seamless transition
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + extendedMenuData.length) % extendedMenuData.length);
  };

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle the transition reset when reaching the end
  useEffect(() => {
    if (currentIndex >= extendedMenuData.length - visibleProductsCount) {
      const timeout = setTimeout(() => {
        setCurrentIndex(visibleProductsCount); // Jump to the "real" start
      }, 700); // Match this to the transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="container mx-auto p-6">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * (100 / visibleProductsCount))}%)` }}
          >
            {extendedMenuData.map((product, index) => (
              <div 
                key={product.id} 
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`transition-transform duration-300 transform ${hoveredIndex === index ? 'scale-100' : 'scale-95'} hover:scale-100`}>
                  <ProductCard
                    title={product.title}
                    image={imageMap[product.image as ImageMapKeys] || Designer1} // Fallback to Designer1 if image not found
                    rating={product.rating}
                    price={product.price}
                    onSubscribe={() => console.log(`Subscribed to ${product.title}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button 
          className="absolute top-1/2 left-0 z-30 flex items-center justify-center w-10 h-10 text-white bg-lime-500 rounded-full transform -translate-y-1/2 hover:bg-lime-600"
          onClick={goToPreviousSlide}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button 
          className="absolute top-1/2 right-0 z-30 flex items-center justify-center w-10 h-10 text-white bg-lime-500 rounded-full transform -translate-y-1/2 hover:bg-lime-600"
          onClick={goToNextSlide}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuCarousel;
