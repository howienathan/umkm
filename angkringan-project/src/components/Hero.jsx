import React from 'react'
import warung from '../assets/toko.jpg'
import menu from '../assets/menu.jpg'
import uang from '../assets/uang.png'
import jempol from '../assets/jempol.png'
import berkualitas from '../assets/berkualitas2.png'
import minuman from '../assets/minuman.jpg'
import HighlightMenu from './Hightlight/HightlightMenu'
import Text from './Hightlight/Text'



const Hero = () => {
  return (
    <section className='text-white pt-[5rem]'>
<div id='Home' className="bg-gradient-to-b from-[#ffffff42] bg-opacity-20 bg-blend-saturation to-[#150000] text-white p-6 duration-300 rounded-xl text-start shadow-lg max-w-7xl mx-auto mt-10">
      <div className="grid md:grid-cols-2 gap-6 items-center ">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={warung}
            alt="Angkringan Pasadena"
            className="rounded-lg shadow-md"
          />
          <img
            src={menu}
            alt="Angkringan Menu"
            className="rounded-lg shadow-md"
          />
        </div>
        <div id='HOme'>
          <h1 className="text-yellow-400 text-4xl pb-[1rem] font-bold mb-4">
            Kenyang Hemat Bersama
            <br />
            <span className='text-white'>

            Angkringan Pasadena!
            </span>
          </h1>
          <p className="text-gray-300 mb-6 pb-2">
            Angkringan ini lebih dari sekadar tempat makan – kami menghadirkan
            hidangan lezat, harga bersahabat, cocok untuk menghabiskan waktu
            berkualitas bersama keluarga dan teman. Angkringan kami siap
            menyambut Anda dengan suasana yang nyaman, pelayanan ramah, dan rasa
            yang tidak pernah mengecewakan.
          </p>
          <a href='/ContactForm' className="border border-yellow-500 text-yellow-400 duration-300 hover:text-white hover:border-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
            Lihat Menu &rarr;
          </a>
        </div>

      </div>
    </div>


    <div className='pt-[8rem]' id='About'>
    <h1 className='text-2xl font-AnakArsitek pb-3'>Kenapa Harus Ke</h1>
    <h1 className='text-yellow-400 text-3xl font-poppins font-semibold'>Angkringan <b className='text-white font-AnakArsitek'>Pasadena?</b></h1>
    <p className='text-lg pt-5 font-jakarta'>Di Angkringan Pasadena, kami percaya bahwa makanan bukan hanya soal kenyang, tapi tentang menciptakan pengalaman yang menghubungkan orang. Setiap hidangan yang kami sajikan dipersiapkan dengan penuh cinta dan menggunakan bahan-bahan pilihan, dengan tujuan untuk memberikan rasa yang autentik dan menggugah selera. </p>
    </div>
    <div className='grid grid-cols-1 justify-center  lg:grid-cols-3 gap-12 pt-[6rem]'>
    <div className='bg-yellow-400  rounded-lg pb-4'>
        <img 
        src={uang}
         alt="uang"
         className=' px-20 py-10 '
          />
      <h2 className='text-xl font-bold font-poppins text-black'>Murah</h2>
        <p className='text-base text-center font-poppins font-medium text-black'>Nongkrong lebih hemat
        di angkringan kami</p>
    </div>
    <div className='bg-yellow-400 rounded-lg pb-4'>
        <img 
        src={jempol}
         alt="uang"
         className='  px-20 py-10 '
          />
      <h2 className='text-xl font-bold font-poppins text-black  pt-8'>Ramah & Cepat</h2>
        <p className='text-base text-center font-poppins font-medium text-black'>Nongkrong lebih hemat
        di angkringan kami</p>
    </div>
    <div className='bg-yellow-400 rounded-lg'>
        <img 
        src={berkualitas}
         alt="uang"
         className='  pb-[1.5rem]'
          />
      <h2 className='text-xl font-bold font-poppins text-black'>Murah</h2>
        <p className='text-base text-center font-poppins font-medium text-black'>Nongkrong lebih hemat
        di angkringan kami</p>
    </div>
    </div>

    <div className='pt-[5rem]'>
    <h1 className='text-3xl font-poppins font-semibold text-yellow-400 pb-[3rem] '>Hightlight menu </h1>

    <HighlightMenu/>
    <Text/>
      </div>
    </section>
  )
}

export default Hero