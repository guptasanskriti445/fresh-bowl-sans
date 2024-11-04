import React from "react";
import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900">
      {/* Background image without opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgimge3.jpeg')" }}
      ></div>

      {/* Light black overlay */}
      <div className="absolute inset-0  opacity-50"></div>
      <div className="absolute inset-0 bg-white opacity-80 m-8"></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between m-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mt-8">
              <img src="/logofooter.png" className="h-20 mr-3" alt="Fresh Bowl Logo" />
            </Link>
            <div className="flex space-x-3 mt-10">
              <a href="https://instagram.com" className="flex items-center">
                <img src="/instagram.png" className="h-8" alt="Instagram Logo" />
              </a>
              <a href="https://youtube.com" className="flex items-center">
                <img src="/youtube.png" className="h-8" alt="YouTube Logo" />
              </a>
              <a href="https://whatsapp.com" className="flex items-center">
                <img src="/whatsapp.png" className="h-8" alt="WhatsApp Logo" />
              </a>
              <a href="https://facebook.com" className="flex items-center">
                <img src="/facebook.png" className="h-8" alt="Facebook Logo" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-emerald-900 uppercase">The Fresh Bowl</h2>
              <ul className="text-gray-400 font-medium">

                <li className="mb-4">
                  <a href="/about-us" className="hover:underline text-emerald-900">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline text-emerald-900">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-emerald-900 uppercase">Quick Links</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/our-plans" className="hover:underline text-emerald-900">Out Plans</a>
                </li>
                <li>
                  <a href="/menu" className="hover:underline text-emerald-900">Menu</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-emerald-900 uppercase">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline text-emerald-900">Privacy Policy</Link>
                </li>
                <li>
                <Link to="/terms-and-conditions" className="hover:underline text-emerald-900">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between m-8">
          <span className="text-sm text-emerald-950  sm:text-center dark:text-gray-400 ">© 2024 <a href="https://flowbite.com/" className="hover:underline">Freshbowl</a>. All Rights Reserved.</span>
          <div className="flex mt-8 sm:justify-center sm:mt-0 space-x-5">
            {/* Add proper SVGs or remove unused ones */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
