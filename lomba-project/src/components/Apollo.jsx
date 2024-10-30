import React, { useState } from 'react';
import Footer from './Footer'
import cover from '../assets/Greek2.jpg'
import apollo from '../assets/Apollo.avif'
import Pilihan from './Pilihan';

const Apollo = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <section className='scrollbar-hidden bg-marquezBlack text-white overflow-x-hidden'>
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
            <a href="/" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white">Home</a>
            <a href="#" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white">About</a>
            <a href="/GodList" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white">GreekMyth Explain</a>
          </div>
        </div>
      </nav>
      <section className='flex flex-col md:flex-row pb-6 sm:pb-16'>
      <div className="flex-1 flex-col shadow-[0px_20px_22px_0px_#edf2f7] ss:shadow-[0px_20px_22px_0px_#edf2f7] gap-2 flex justify-center items-start sm:my-12 my-6 sm:px-12 px-6">
        <h2 className="font-bold xs:text-[48.83px] text-[34.84px] pt-5">Greek Myth</h2>
        <div className="pb-8 pt-5">
        Greek mythology, body of stories concerning the gods, heroes, and rituals of the ancient Greeks and Classical antiquity. That the myths contained a considerable element of fiction was recognized by the more critical Greeks, such as the philosopher Plato in the 5th–4th century bce. In general, however, in the popular piety of the Greeks, the myths were viewed as true accounts. Greek mythology has subsequently had extensive influence on the arts and literature of Western civilization, which fell heir to much of Greek culture.
            </div>
          </div>
      <img src={cover} alt="" className='shadow-[-10px_20px_22px_0px_#edf2f7]'/>
      </section>
        <div className='pb-[5rem]'>
        <h2 className="text-3xl font-bold text-center mb-12">Bio About God</h2>
        <div className="max-w-7xl mx-auto px-4 grid gap-5">
            <img src={apollo} alt="" className="shadow-[0px_7px_21px_4px_#f7fafc] rounded-md flex justify-self-center" />
            <h1 className='text-2xl font-semibold font-Lora text-center'>Apollo - God Of Music </h1>
          <p className="text-base font-jakarta text-center">
          In ancient Greek mythology Apollo was the god of music, healing, light, and prophecy (predicting the future). He was one of the 12 main gods believed to live on Mount Olympus. He also came to be considered a sun god. Because of Apollo's many important roles, the Greeks loved him greatly.
          </p>
        </div>
        </div>
        <Pilihan/>
      <Footer/>
      </section>
    );
  };

export default Apollo