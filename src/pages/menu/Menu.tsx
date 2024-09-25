// Menu.tsx
import React from 'react';
import menuData from '../../assets/menuData.json'; // Import the JSON data

// Import background image and product images
import Designer2 from "../../assets/Designer2.jpeg";
import Designer3 from "../../assets/Designer3.jpeg";
import brimg from "../../assets/contactbgimg.jpeg";
import ProductCard from '../../components/ProductCard';

// Create a mapping of image names to imported images
const imageMap = {
  "Designer1.jpeg": Designer3,
  "Designer2.jpeg": Designer2,
  "Designer3.jpeg": Designer3,
  "Designer4.jpeg": Designer2,
} as const;

// Define the type for the image map keys
type ImageMapKeys = keyof typeof imageMap;

const Menu = () => {

  // Subscribe action handler
  const handleSubscribe = (productTitle: string) => {
    alert(`Subscribed to ${productTitle}!`);
    // You can add more functionality here, like making an API call, etc.
  };

  return (
    <div>
      <div className="relative h-80 md:h-96 lg:h-112 xl:h-128">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${brimg})` }}>
        </div>

        {/* Transparent black background overlay */}
        <div className="absolute inset-0 bg-emerald-950 opacity-60"></div>

        {/* Centered message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Explore Our Delicious Menu!</h1>
          <p className="text-white text-lg md:text-xl px-12">
            Come on in and check out our delicious menu! Fresh meals await, made just for you. Enjoy every bite!
          </p>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Menu</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
          </div>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {menuData.map(product => {
            const imageSrc = imageMap[product.image as ImageMapKeys]; // Use imageMap to get the image

            return (
              <ProductCard
                key={product.id}
                title={product.title}
                image={imageSrc} // Pass mapped image
                rating={product.rating}
                price={product.price}
                onSubscribe={() => handleSubscribe(product.title)} // Pass the subscribe handler
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
