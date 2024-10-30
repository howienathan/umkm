import React from 'react'
import Zeus from '../assets/Zeus.jpg'
import Hercules from '../assets/Hercules.jpg' 
import Poseidon from '../assets/Poseidon.jpg'
import Hermes from '../assets/Hermes.jpg'
import Apollo from '../assets/Apollo.avif'
import Ares from '../assets/Ares.webp'

const hidePoseidon = location.pathname === '/Poseidon';
const hideZeus = location.pathname === '/Zeus';
const hideApollo = location.pathname === '/Apollo';
const hideAres = location.pathname === '/Ares';
const hideHermes = location.pathname === '/Hermes';
const hideHercules = location.pathname === '/Hercules';

const Pilihan = () => {
  return (
    <section className='flex justify-center pb-[6rem]'>
    <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Some well-known figures from Greek mythology include:</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {!hideZeus && (
      <a href='/Zeus' className="bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transition-transform transform hover:scale-105 ">
        <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Zeus God Of Thunder - Father Of God</h1>
        <img src={Zeus} alt="" className='rounded-md shadow-md' />
      </a>
    )}
     {!hideApollo && (
      <a href='/Apollo' className="bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transition-transform transform hover:scale-105 ">
        <h1 className='text-black text-lg font-semibold font-jakarta text-center pb-3'>Apollo - God Of Music</h1>
        <img src={Apollo} alt="" className='rounded-md shadow-md' />
      </a>
     )}
      {!hidePoseidon && (
      <a href='/Poseidon' className="bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transition-transform transform hover:scale-105 ">
        <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Poseidon - God Of Sea</h1>
        <img src={Poseidon} alt="" className='rounded-md shadow-md' />
      </a>
       )}
        {!hideAres && (
      <a href='/Ares' className="bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transition-transform transform hover:scale-105 ">
        <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Ares - God Of War</h1>
        <img src={Ares} alt="" className='rounded-md shadow-md' />
      </a>
        )}
         {!hideHercules && (
      <a href='/Hercules' className="bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transition-transform transform hover:scale-105 ">
        <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Hercules - King Of God</h1>
        <img src={Hercules} alt="" className='rounded-md shadow-md' />
      </a>
         )}
      {!hideHermes && (
      <a href='/Hermes' className="bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transition-transform transform hover:scale-105 ">
        <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Hermes - God Of Messengers</h1>
        <img src={Hermes} alt="" className='rounded-md shadow-md' />
      </a>
      )}
    </div>
  </div>
</section>
  )
}

export default Pilihan