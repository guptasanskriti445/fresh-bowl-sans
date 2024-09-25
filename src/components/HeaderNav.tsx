import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get the current URL

  // Function to toggle visibility
  const toggleNavbar = () => {
    setIsVisible(prevState => !prevState);
  };

  // Function to check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.PNG" className="h-8" alt="The Fresh Bowl Logo" />
            <span>
              <div className="text-2xl font-semibold whitespace-nowrap dark:text-white text-emerald-950">
                The Fresh Bowl
              </div>
              <div className="text-xs">Serving Up Healthy Habits</div>
            </span>
          </Link>

          <button
            type="button"
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={`w-full md:block md:w-auto ${isVisible ? '' : 'hidden'}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 rounded md:p-0 ${isActive('/') 
                    ? 'text-white bg-lime-500 md:text-lime-500 md:bg-transparent dark:bg-lime-500 dark:text-white'
                    : 'text-emerald-950 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/our-plans"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 rounded md:p-0 ${isActive('/our-plans') 
                    ? 'text-white bg-lime-500 md:text-lime-500 md:bg-transparent dark:bg-lime-500 dark:text-white'
                    : 'text-emerald-950 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  OUR PLANS
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 rounded md:p-0 ${isActive('/about-us') 
                    ? 'text-white bg-lime-500 md:text-lime-500 md:bg-transparent dark:bg-lime-500 dark:text-white'
                    : 'text-emerald-950 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 rounded md:p-0 ${isActive('/menu') 
                    ? 'text-white bg-lime-500 md:text-lime-500 md:bg-transparent dark:bg-lime-500 dark:text-white'
                    : 'text-emerald-950 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleNavbar}
                  className={`block py-2 px-3 rounded md:p-0 ${isActive('/contact') 
                    ? 'text-white bg-lime-500 md:text-lime-500 md:bg-transparent dark:bg-lime-500 dark:text-white'
                    : 'text-emerald-950 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
