import React from 'react'

const listItems = [
    'WarungSigma',
    'About',
    'Project',
    'Contact',
]

const Navbar = () => {
  return (
    <>
    <div
     className='fixed bg-black flex justify-between items-center gap-16 py-3 px-10 left-1/2 
                translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60
              text-white shadow-lg z-10'>
                <ul className='flex gap-8 text-xl'>
                    {listItems.map((item, idx) => (
                        <li className={`relative group cursor-pointer ${idx === 0 ? "font-semibold hover:scale-105 duration-300" : ""}`} key={idx}>
                          <a href={`#${item}`}>
                          {item}
                          </a>
                            <span className='absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r
                             from-gray-400 to-white transition-all duration-300 group-hover:w-full '></span>
                        </li>
                    ))}
                </ul>

                <button className='bg-gradient-to-r from-gray-600 to-gray-400 
                py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:shadow-gray-100 shadow-white duration-300 cursor-pointer hover:scale-105'
                >
                    Login
                </button>
                  </div>
                  </>
  )
}

export default Navbar