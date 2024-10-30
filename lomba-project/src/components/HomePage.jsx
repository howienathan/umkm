import React from 'react'
import cover from '../assets/Greek2.jpg'


const HomePage = () => {
  return (
    <div>

      <header className=" text-white py-[20rem]  " style={{ backgroundImage: `url(${cover})`}}>
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-4 font-jakarta">welcome to the gallery - art about sculpture</h1>
          <p className="text-xl mb-8 font-jakarta font-semibold">All About Greek Myth</p>
        </div>
      </header>

      <a href='About' id='About' className="py-20">
          <h2 className="text-3xl font-bold text-center mt-14 mb-12">About</h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 pb-20">
            <img src="https://t3.ftcdn.net/jpg/05/95/16/70/360_F_595167032_gK9l2QW30IrJyLRJ2xr90k88zETIEbrx.jpg" alt="" className="shadow-[0px_7px_21px_4px_#f7fafc] rounded-md flex justify-self-center" />
            <div>
          <p className="text-lg font-jakarta text-center pb-8">
          Greek mythology is a collection of stories about the gods, heroes, and rituals of ancient Greece. These myths were a central part of Greek life, and were passed down through generations. They explained the world around the Greeks, from the weather to religious rituals.
          </p>
          <a href="/GodList" className='bg-black py-5 px-3 border border-white rounded-md flex justify-center hover:bg-white hover:text-black duration-300 font-semibold font-jakarta '>Read More</a>
          </div>
        </div>
      </a>
    </div>
  )
}

export default HomePage