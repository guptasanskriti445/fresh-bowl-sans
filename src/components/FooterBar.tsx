import React from "react";
import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/footerimg.png')" }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <div className="flex space-x-3 mt-5">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            {/* Add proper SVGs or remove unused ones */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
