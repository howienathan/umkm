import React from "react";
import toko from "../assets/logo 2.png";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {/* Logo dan Deskripsi */}
        <div className="text-center sm:text-left">
          <img src={toko} alt="Logo" className="mb-4 mx-auto sm:mx-0 w-20 h-20" />
          <h1 className="text-2xl font-bold">Angkringan</h1>
          <h1 className="text-yellow-400 text-3xl font-bold font-AnakArsitek">
            Pasadena
          </h1>
          <p className="text-gray-400 mt-2">
            Menyediakan Angkringan yang murah dan nyaman
          </p>
        </div>

        {/* Media Sosial */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 duration-300 hover:shadow-[-1px_3px_19px_10px_#f6e05e]"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 duration-300 hover:shadow-[-1px_3px_19px_10px_#f6e05e]"
            >
              <i className="bx bxl-tiktok"></i>
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 duration-300 hover:shadow-[-1px_3px_19px_10px_#f6e05e]"
            >
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </div>
        </div>

        {/* Kontak */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="flex items-center justify-center sm:justify-start text-gray-400">
            <i className="bx bxs-envelope mr-2"></i> kontol@gmail.com
          </p>
          <p className="flex items-center justify-center sm:justify-start text-gray-400 mt-2">
            <i className="bx bxs-phone mr-2"></i> +62 696-696-696
          </p>
        </div>
      </div>

      <hr className="border-t border-yellow-400 my-6" />
      <p className="text-center sm:text-start text-gray-500 text-sm">
        © 2024 Angkringan Pasadena Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
