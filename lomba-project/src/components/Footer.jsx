import React from 'react'
import toko from "../assets/logo 2.png";
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="text-white py-8 px-6 ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

      <div className="text-center sm:text-left">
        <img src={toko} alt="Logo" className="mb-4 mx-auto sm:mx-0 w-20 h-20" />
        <h1 className="text-2xl font-bold">Warung</h1>
        <h1 className="text-yellow-400 text-3xl font-bold font-AnakArsitek">
          Anpas
        </h1>
        <p className="text-gray-400 mt-2">
          Menyediakan makanan yang murah dan enak
        </p>
      </div>


      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
        <a href="https://www.tiktok.com/@nathanwleowle" target="_blank" rel="noopener noreferrer" className='hover:scale-105 bg-white rounded-md duration-300'>
        <img src="https://img.icons8.com/?size=30&id=118638&format=png&color=000000" />
    </a>
    <a href="https://www.instagram.com/nathansigmaskibidi/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 bg-white rounded-md duration-300'>
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
        </div>
      </div>

     
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jonathanaugta3@gmail.com&su=kritik%20dan%20saran&body=menurut%20saya!' className="flex items-center justify-center sm:justify-start cursor-pointer hover:text-white duration-300 text-gray-400">
          <i className="bx bxs-envelope mr-2"></i> kaciw@gmail.com
        </a>
        <a href='https://wa.me/62895332011775?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Anda' className="flex items-center justify-center sm:justify-start hover:text-white duration-300 text-gray-400 mt-2">
          <i className="bx bxs-phone mr-2"></i> +62 696-696-696
        </a>
      </div>
    </div>

    <hr className="border-t border-yellow-400 my-6" />
    <p className="text-center sm:text-start text-gray-500 text-sm">
      © 2024 Warung Anpas Inc. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer