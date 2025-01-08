import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './app.css'

const App = () => {
  

  return (
    <section className="scrollbar-hidden  text-white">
     <Navbar/>

      <HomePage />
      <Footer />
    </section>
  );
};

export default App;
