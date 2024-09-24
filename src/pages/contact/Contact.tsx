import React from 'react';
import contactImage from '../../assets/contactimg.png'; // Add your contact image path here
import backgroundImage from '../../assets/contactbgimg.jpeg'; // Add your background image path here
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Light Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content (with relative positioning to sit above the background image and overlay) */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg shadow-lg">
        
        {/* Contact Us Heading */}
        <div className="absolute top-0 left-0 right-0 text-center pt-12">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
        </div>

        {/* Right side - Image (appears first on smaller screens) */}
        <div className="flex justify-center items-center order-1 md:order-2 mt-24">
          <img 
            className="rounded-lg shadow-lg w-full h-full object-cover bg-transparent" 
            src={contactImage} 
            alt="Contact Us" 
          />
        </div>

        {/* Left side - Contact Info (appears after image on smaller screens) */}
        <div className="flex flex-col justify-center order-2 md:order-1 bg-transparent mt-24">
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-lg text-white mb-4">
            We would love to hear from you! Feel free to reach out to us for any inquiries, support, or just to say hello.
          </p>

          {/* Static Contact Information */}
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-white">
                <span className="font-medium">📍 Address:</span><br /> 
                1234 Elm Street, Suite 567, Springfield, USA
              </li>
              <li className="text-white">
                <span className="font-medium">📞 Phone:</span><br /> 
                +1 (555) 123-4567
              </li>
              <li className="text-white">
                <span className="font-medium">📧 Email:</span><br /> 
                info@company.com
              </li>
              <li className="text-white">
                <span className="font-medium">⏰ Business Hours:</span><br /> 
                Monday - Friday: 9:00 AM - 5:00 PM
              </li>
            </ul>
          </div>

          {/* Link to "Our Team" Section */}
          <div className="mt-8">
            <Link
              to="/about#our-team" // Assuming you have a route to the About page with an ID on the "Our Team" section
              className="text-lg font-semibold text-lime-400 hover:text-lime-300"
            >
              Learn more about our team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
