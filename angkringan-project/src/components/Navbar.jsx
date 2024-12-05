import React, { useState } from "react";
import logo from "../assets/logo 2.png";

const listItems = ["Home", "About", "Menu", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="fixed border border-yellow-400 bg-black flex justify-between items-center gap-16 py-3 px-6 md:px-10 left-1/2 
                translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60
              text-white shadow-[0px_0px_18px_3px_#f6e05e] z-20 w-[95%] md:w-auto"
      >
        <div className="text-start text-white flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 mr-2" // Atur ukuran dan jarak logo
          />
          <span className="text-yellow-400 font-bold">Angkringan</span>{" "}
          <b>Pasadena</b>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl">
          {listItems.map((item, idx) => (
            <li
              className={`relative group cursor-pointer ${
                idx === 0 ? "font-semibold hover:scale-105 duration-300" : ""
              }`}
              key={idx}
            >
              <a href={`#${item}`}>{item}</a>
              <span
                className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r
                             from-yellow-400 to-yellow-500 transition-all duration-300 group-hover:w-full"
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-8 h-1 bg-yellow-400 mb-1"></span>
          <span className="block w-8 h-1 bg-yellow-400 mb-1"></span>
          <span className="block w-8 h-1 bg-yellow-400"></span>
        </div>

        {/* Login Button */}
        <button className="hidden md:block bg-gradient-to-r from-yellow-600 to-yellow-400 
                py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:shadow-gray-100 shadow-white duration-300 cursor-pointer hover:scale-105">
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-[80px] duration-300 transition-transform left-1/2 translate-x-[-50%] w-[95%] md:w-auto bg-black bg-opacity-60 
            border-t border-yellow-400 rounded-b-xl text-white flex flex-col items-center gap-4 py-4 shadow-[0px_0px_18px_3px_#f6e05e]"
        >
          {listItems.map((item, idx) => (
            <a
              href={`#${item}`}
              key={idx}
              className="text-lg font-semibold hover:scale-105 duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
          <button
            className="bg-gradient-to-r from-yellow-600 to-yellow-400 
                py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:shadow-gray-100 shadow-white duration-300 cursor-pointer hover:scale-105"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
