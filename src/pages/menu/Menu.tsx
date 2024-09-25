import React from 'react';
import menuData from '../../assets/menuData.json'; // Import the JSON data

// Import images
import Designer2 from "../../assets/Designer2.jpeg";
import Designer3 from "../../assets/Designer3.jpeg";

// Create a mapping of image names to imported images


const imageMap = {
  "Designer1.jpeg": Designer3,
  "Designer2.jpeg": Designer2,
  "Designer3.jpeg": Designer3,
  "Designer4.jpeg": Designer2,
} as const;

// Define the type for the image map keys
type ImageMapKeys = keyof typeof imageMap;

// Then you can safely access it with a type assertion
const Menu = () => {
  return (
    <div className="container mx-auto p-6">
       <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Menu</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
          </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData.map(product => (
          <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="p-8 rounded-t-lg" src={imageMap[product.image as ImageMapKeys]} alt={product.title} /> {/* Using image map */}
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-emerald-950 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-lime-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="bg-lime-200 text-lime-600 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-lime-200 dark:text-lime-600 ms-3">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-emerald-950 dark:text-white">{product.price}</span>
                <a href="#" className="text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-500 dark:focus:ring-lime-800">
                Subscribe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
