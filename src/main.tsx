import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import React from 'react'
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';
import Menu from './pages/menu/Menu.js';
import OurPlans from './pages/ourplans/OurPlans.js';
import PrivacyPolicy from './pages/privacyPolicy / PrivacyPolicy.js';
import TermsConditions from './pages/termsConditions/TermsConditions.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/our-plans',
        element: <OurPlans />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsConditions />,
      }
    ],
  },]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
