import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Achievment from './components/Achievment';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './app.css'

const App = () => {
  

  return (
    <section className="scrollbar-hidden  text-white">
     <Navbar/>

      <HomePage />
      <Achievment />
      <Footer />
    </section>
  );
};

export default App;
