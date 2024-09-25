import React, { useEffect, useState } from 'react';
import menuData from '../assets/menuData.json'; // Import the JSON data
import ProductCard from './ProductCard'; // Import the ProductCard component

// Import images
import Designer1 from "../assets/background-bg1.jfif"; // Ensure all images are imported correctly
import Designer2 from "../assets/background-bg2.jfif";
import Designer3 from "../assets/background-bg3.jfif";
import brimg from "../assets/contactbgimg.jpeg"; 

// Create a mapping of image names to imported images
const imageMap = {
  "Designer1.jpeg": Designer1,
  "Designer2.jpeg": Designer2,
  "Designer3.jpeg": Designer3,
  "Designer4.jpeg": Designer2,
} as const;

// Define the type for the image map keys
type ImageMapKeys = keyof typeof imageMap;

const MenuCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % menuData.length);
  };

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? menuData.length - 1 : prevIndex - 1
    );
  };

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
     
      
      <div className="container mx-auto p-6">
        
        {/* Carousel Section */}
        <div className="relative" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {menuData.map((product, index) => (
              <div 
                key={product.id} 
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`} 
                data-carousel-item
              >
                <ProductCard 
                  title={product.title}
                  image={imageMap[product.image as ImageMapKeys]}
                  rating={product.rating}
                  price={product.price}
                  onSubscribe={() => console.log(`Subscribed to ${product.title}`)} // Replace with actual subscribe logic
                />
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <button 
            type="button" 
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
            onClick={goToPreviousSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-lime-500 group-hover:bg-lime-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button 
            type="button" 
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
            onClick={goToNextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-lime-500 group-hover:bg-lime-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCarousel;
