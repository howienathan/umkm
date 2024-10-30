import React, { useState } from 'react';
import Zeus from '../assets/Zeus.jpg'
import Hercules from '../assets/Hercules.jpg' 
import Poseidon from '../assets/Poseidon.jpg'
import Hermes from '../assets/Hermes.jpg'
import Apollo from '../assets/Apollo.avif'
import Ares from '../assets/Ares.webp'



const Achievment = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return (
    <section className='flex justify-center pb-[6rem]'>
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Some well-known figures from Greek mythology include:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
         
          <a href='/Zeus' className={`bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transform transition-shadow ${
                isHovered ? 'animate-float' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Zeus God Of Thunder - Father Of God</h1>
            <img src={Zeus} alt="" className='rounded-md shadow-md' />
          </a>
          <a href='/Apollo' className={`bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transform transition-shadow ${
                isHovered2 ? 'animate-float' : ''
            }`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}>
            <h1 className='text-black text-lg font-semibold font-jakarta text-center pb-3'>Apollo - God Of Music</h1>
            <img src={Apollo} alt="" className='rounded-md shadow-md' />
          </a>
          <a href='/Poseidon' className={`bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transform transition-shadow ${
                isHovered3 ? 'animate-float' : ''
            }`}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}>
            <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Poseidon - God Of Sea</h1>
            <img src={Poseidon} alt="" className='rounded-md shadow-md' />
          </a>
          <a href='/Ares' className={`bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transform transition-shadow ${
                isHovered4 ? 'animate-float' : ''
            }`}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}>
            <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Ares - God Of War</h1>
            <img src={Ares} alt="" className='rounded-md shadow-md' />
          </a>
          <a href='/Hercules'  className={`bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transform transition-shadow ${
                isHovered5 ? 'animate-float' : ''
            }`}
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}>
            <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Hercules - King Of God</h1>
            <img src={Hercules} alt="" className='rounded-md shadow-md' />
          </a>
          <a href='/Hermes'  className={`bg-white border rounded-lg shadow-[0px_3px_21px_4px_#cbd5e0] p-6 transform transition-shadow ${
                isHovered6 ? 'animate-float' : ''
            }`}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}>
            <h1 className='text-black text-lg font-semibold font-Lora text-center pb-3'>Hermes - God Of Messengers</h1>
            <img src={Hermes} alt="" className='rounded-md shadow-md' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Achievment