import React from "react";
import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900">
      {/* Background image without opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footerimg.png')" }}
      ></div>

      {/* Light black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/logofooter.png" className="h-20 mr-3" alt="FlowBite Logo" />
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
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline text-white">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline text-white">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline text-white">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline text-white">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            {/* Add proper SVGs or remove unused ones */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
