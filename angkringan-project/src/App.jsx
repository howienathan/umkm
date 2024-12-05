import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import 'boxicons/css/boxicons.min.css';


function App() {

  return (
    <section className=''>
    <Navbar/>
    <Hero/>
    <Footer/>
    </section>
  );
}

export default App
