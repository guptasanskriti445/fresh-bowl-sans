import React from 'react';
import contactImage from '../../assets/contactimg.jpeg'; // Add your contact image path here
import backgroundImage from '../../assets/contactbgimg.jpeg'; // Add your background image path here

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Image with opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.4 }}
      ></div>

      {/* Main content (with relative positioning to sit above the background image) */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        
        {/* Right side - Image (appears first on smaller screens) */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <img 
            className="rounded-lg shadow-lg w-full h-full object-cover" 
            src={contactImage} 
            alt="Contact Us" 
          />
        </div>

        {/* Left side - Contact Info (appears after image on smaller screens) */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-4">
            Feel free to reach out to us through any of the following methods. We'd love to hear from you!
          </p>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="font-medium text-gray-700">Address:</span> <br /> 123 Main Street, City, Country
              </li>
              <li>
                <span className="font-medium text-gray-700">Phone:</span> <br /> +123 456 7890
              </li>
              <li>
                <span className="font-medium text-gray-700">Email:</span> <br /> contact@company.com
              </li>
              <li>
                <span className="font-medium text-gray-700">Business Hours:</span> <br /> Mon - Fri: 9 AM - 5 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
