import React, { useState, useEffect } from 'react';
import AutoImageSlider from './AutoImageSlider';
import Zeus from '../assets/menu.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const Sejarah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <section className="scrollbar-hidden  w-full h-full text-white">
      <Navbar/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-[3rem]'>
            <AutoImageSlider/>
            <div>
                <h1 className='text-4xl font-Lora text-yellow-400 font-semibold'>Sejarah</h1>
                <p className='pt-5 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, corrupti numquam saepe blanditiis enim cum, dolor culpa tenetur velit atque, quam voluptatibus. Fugiat suscipit architecto repellat ea quod molestiae at modi error cumque quos dolor, autem asperiores excepturi quaerat velit. Alias fuga eligendi beatae id ratione vel facere, quae magni?</p>
            </div>
        </div>
        <div className='pt-[3rem] flex justify-center'>
            <img src={Zeus} alt="" className='' />
        </div>
        <div className='pt-5'>
            <p className='font-Lora text-xl'>Lorem ipsum odor amet, consectetuer adipiscing elit. Litora ligula in donec velit platea luctus id rutrum. Neque iaculis magna diam adipiscing; sed egestas est taciti aptent. Taciti arcu dignissim magna tincidunt facilisi est tellus adipiscing. Himenaeos suspendisse leo turpis vitae integer nam viverra posuere. Nullam euismod potenti volutpat suspendisse sodales, dictumst mollis metus. Himenaeos interdum ac donec ridiculus, maximus inceptos. Venenatis dictum non eros primis sodales elementum eu. Netus est etiam sit lectus mollis dictumst ut hac.
            </p>
        </div>
    <Footer/>
    </section>
  );
};

export default Sejarah;
