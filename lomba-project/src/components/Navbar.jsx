import React from 'react'

const toggleMenu = () => {
  setIsOpen(!isOpen);



  return (
    <>
    <nav> className="bg-marquezBlack fixed w-full top-0 left-0 bg-primary z-50 duration-300 shadow-[0px_0px_70px_6px_#f7fafc] ">
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
                  </>
  )
}

export default Navbar