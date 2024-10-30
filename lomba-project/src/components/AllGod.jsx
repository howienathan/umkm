import React, { useState } from 'react';
import Footer from './Footer'
import cover from '../assets/Greek2.jpg'
import Pilihan from './Pilihan';

const AllGod = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <section className='scrollbar-hidden bg-marquezBlack text-white'>
      <nav className="bg-marquezBlack fixed w-full top-0 left-0 bg-primary z-50 duration-300 shadow-[0px_0px_70px_6px_#f7fafc] ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold font-jakarta">GreekMyth</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">Home</a>
              <a href="#" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">About</a>
              <a href="/GodList" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">GreekMyth Explain</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        <div className={`md:hidden bg-black ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-2">
            <a href="/" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-2 border-b-white">Home</a>
            <a href="#" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-2 border-b-white">About</a>
            <a href="/GodList" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-2 border-b-white">GreekMyth Explain</a>
          </div>
        </div>
      </nav>
      
      <header className=" text-white py-[20rem]  " style={{ backgroundImage: `url(${cover})`}}>
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4 font-jakarta">Explanation About Greek Myth</h1>
          <p className="text-xl mb-8 font-jakarta font-semibold">What is Greek Myth Meaning???</p>
        </div>
      </header>
      
      <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Explanation</h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <img src="https://static.vecteezy.com/system/resources/previews/024/473/938/large_2x/marble-statue-of-greek-god-with-cornucopia-in-his-hands-generate-ai-free-photo.jpg" alt="" className="shadow-[0px_7px_21px_4px_#f7fafc] rounded-md flex justify-self-center" />
          <p className="text-base font-jakarta text-center">
         
Greek mythology is a vast and intricate system of stories, beliefs, and practices that emerged in ancient Greece, serving to explain the mysteries of the world, the human experience, and the natural phenomena that surrounded them. It encompasses a wide range of characters, including gods, goddesses, heroes, and mythical creatures, each playing a significant role in the tapestry of Greek culture.
          </p>
        </div>
      </div>
      <Pilihan/>
      <Footer/>
      </section>
    );
  };

export default AllGod