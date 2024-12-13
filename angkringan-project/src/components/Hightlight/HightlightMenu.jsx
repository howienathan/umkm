import React from 'react'
import menu from '../../assets/menu.jpg'

const HightlightMenu = () => {
  return (
    <section id='Menu' className='bg-[#150000] border-2 border-white rounded-lg py-8'>
      <div className='pb-7 grid lg:grid-cols-4 px-12 gap-8'>
        <div className='bg-yellow-400 rounded-lg'>
          <img src={menu} alt="" className=' px-3 py-4 '/>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>Sate Ayam</p>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>20.200</p>
        </div>
        <div className='bg-yellow-400 rounded-lg'>
          <img src={menu} alt="" className=' px-3 py-4 '/>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>Sate Ayam</p>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>20.200</p>
        </div>
        <div className='bg-yellow-400 rounded-lg'>
          <img src={menu} alt="" className=' px-3 py-4 '/>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>Sate Ayam</p>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>20.200</p>
        </div>
        <div className='bg-yellow-400 rounded-lg'>
          <img src={menu} alt="" className=' px-3 py-4 '/>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>Sate Ayam</p>
          <p className=' text-xl font-bold font-AnakArsitek pb-2 '>20.200</p>
        </div>
      </div>
      <a href="" className='bg-yellow-400 px-3 py-2 text-white text-lg font-semibold font-AnakArsitek hover:bg-yellow-500 border-2 border-white  duration-300 rounded-lg '>Click For More</a>
    </section>
  )
}

export default HightlightMenu