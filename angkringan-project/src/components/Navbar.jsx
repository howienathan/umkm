import React from 'react'
import logo from '../assets/logo 2.png'

const listItems = [
    'Home',
    'About',
    'Menu',
    'Contact',
    'Sign In',
]

const Navbar = () => {
  return (
    <>
     <div className="text-start text-white flex sticky items-center">
   <img 
     src={logo} 
     alt="Logo" 
     className="w-8 h-8 mr-2" // Atur ukuran dan jarak logo
   />
   <span className="text-yellow-400 font-bold">Angkringan</span> <b>Pasadena</b>
 </div>
    <div
     className='fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 
     translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60
     text-white shadow-lg z-10 border border-yellow-300'>
                <ul className='flex gap-8 text-xl'>
                    {listItems.map((item, idx) => (
                        <li className={`relative group cursor-pointer ${idx === 4 ? "font-semibold" : ""}`} key={idx}>
                          <a href={`#${item}`}>
                          {item}
                          </a>
                            <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r
                             from-yellow-400 to-yellow-300 transition-all duration-300 group-hover:w-full '></span>
                        </li>
                    ))}
                </ul>
                <button className='bg-gradient-to-r from-yellow-600 to-yellow-400 
                py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:shadow-gray-100 shadow-white duration-300 cursor-pointer hover:scale-105'
                >
                    Chart 
                </button>
                  </div>
                  
                  
                  
                  </>
  )
}

export default Navbar