import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import FooterBar from './components/FooterBar';
import React from 'react';
import FooterHero from './components/FooterHero';

function App() {
  return (
    <>
     <HeaderNav />
       <div className="mt-20">
          <Outlet />
        </div>
      <FooterHero />
      <FooterBar />
    </>
  );
}

export default App;
