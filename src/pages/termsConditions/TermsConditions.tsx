import React from 'react';
import brimg from "../../assets/background-bg3.jfif"; // Background image

const TermsConditions = () => {
  return (
    <div>
      {/* Terms & Conditions Header Section */}
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
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white text-lg md:text-xl px-12">
            <span className='text-lime-500 font-bold text-lg'>"</span>
            Welcome! Please take a moment to read our Terms & Conditions to enjoy a smooth and enjoyable experience with us!
            <span className='text-lime-500 font-bold text-lg'>"</span>
          </p>
        </div>
      </div>

      {/* Main Terms & Conditions Content Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Terms & Conditions</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
          </div>

          {/* Terms & Conditions Content */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-center text-gray-700">
              By subscribing to our service, you agree to receive food deliveries based on your selected plan. 
            </p>
            <p className="mb-4 text-center text-gray-700">
              All subscriptions are billed monthly and are non-refundable. You can cancel your subscription anytime before the next billing cycle.
            </p>
            <p className="mb-4 text-center text-gray-700">
              We reserve the right to modify our subscription plans and pricing. Users will be notified of any changes via email.
            </p>
            <p className="mb-4 text-center text-gray-700">
              It is your responsibility to ensure that the delivery address provided is accurate and up-to-date.
            </p>
            <p className="mb-4 text-center text-gray-700">
              For any questions or issues, please contact our customer support team, and we will be happy to assist you.
            </p>
            <p className="mb-4 text-center text-gray-700">
              By using our service, you acknowledge that you have read and understood these terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
