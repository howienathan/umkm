import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full ${
        isScrolled ? 'shadow-[0px_13px_20px_4px_#f6e05e] ' : 'shadow-none'
      } bg-[#150000] border-b border-yellow-400 transition-shadow duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-white text-xl font-poppins font-bold">Angkringan<span className='text-yellow-400'>Pasadena</span></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="Home" className="text-white duration-300 hover:scale-105 text-lg font-semibold font-AnakArsitek hover:text-gray-300">Home</a>
            <a href="#" className="text-white duration-300 hover:scale-105 text-lg font-semibold font-AnakArsitek hover:text-gray-300">About</a>
            <a href="/About" className="text-white duration-300 hover:scale-105 text-lg font-semibold font-AnakArsitek hover:text-gray-300">Services</a>
            <a href="/Contact" className="text-white duration-300 hover:scale-105 text-lg font-semibold font-AnakArsitek hover:text-gray-300">Contact</a>
            <a href="#" className="text-black duration-300 hover:scale-105 text-lg font-semibold font-AnakArsitek bg-yellow-500 border border-white px-1 rounded-lg hover:text-white hover:bg-yellow-400">SignIn</a>
            <a href="#" className="text-black duration-300 hover:scale-105 text-lg font-semibold font-AnakArsitek bg-yellow-500 border border-white px-1 rounded-lg hover:text-white hover:bg-yellow-400">Login</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none duration-300 transition-all hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-white hover:bg-yellow-400 duration-300 font-semibold">Home</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-yellow-400 duration-300 font-semibold">About</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-yellow-400 duration-300 font-semibold">Services</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-yellow-400 duration-300 font-semibold">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
