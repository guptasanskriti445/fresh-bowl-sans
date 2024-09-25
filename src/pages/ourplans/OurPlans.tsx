import React from 'react';
import brimg from "../../assets/background-bg1.jfif"; // Background image

const OurPlans = () => {
  return (
    <div>
      {/* Welcome Section */}
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
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Our Mission & Vision</h1>
          <p className="text-white text-lg md:text-xl px-12">
            <strong>Mission</strong> - To provide delicious and nutritious meals at affordable prices, making healthy eating accessible to everyone.
          </p>
          <p className="text-white text-lg md:text-xl px-12 mt-4">
            <strong>Vision</strong> - To create a healthier community by offering a wide range of affordable, nutritious meals that cater to diverse tastes and dietary preferences. Thereby empowering individuals to prioritize their well-being without financial constraints.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Our Plans</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
          </div>

          {/* Sub-descriptions */}
          <div className="flex flex-wrap justify-center -m-4">
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Affordable and Accessible</h2>
                <p className="mt-2 text-gray-600">Our meal plans are priced to be budget-friendly, ensuring that healthy eating is within reach for everyone.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Diverse and Nutritious Menus</h2>
                <p className="mt-2 text-gray-600">We offer a variety of menus to cater to all dietary preferences, helping you maintain a balanced and healthy diet.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Flexible Subscription Plans</h2>
                <p className="mt-2 text-gray-600">Our subscription plans are flexible and customizable, so you can select the meal plan that fits your lifestyle best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPlans;
