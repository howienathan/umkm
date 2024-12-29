import React from 'react'
import warung from '../assets/toko.jpg'
import menu from '../assets/menu.jpg'
import uang from '../assets/uang.png'
import jempol from '../assets/jempol.png'
import berkualitas from '../assets/berkualitas2.png'
import minuman from '../assets/minuman.jpg'



const HomePage = () => {
  return (
    <section className='text-white pt-[5rem] px-[2rem]'>
<div id='Home' className="bg-gradient-to-b from-[#ffffff42] bg-opacity-20 bg-blend-saturation to-[#150000] text-white p-6 duration-300 rounded-xl text-start shadow-lg max-w-7xl w-full mx-auto mt-10">
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
        <div id='Home'>
          <h1 className="text-yellow-400 text-4xl pb-[1rem] font-bold mb-4">
            Kenyang Hemat Bersama
            <br />
            <span className='text-white'>

            Warung Anpas!
            </span>
          </h1>
          <p className="text-gray-300 mb-6 pb-2">
            Warung Anpas ini lebih dari sekadar tempat makan – kami menghadirkan
            hidangan lezat, harga bersahabat, cocok untuk menghabiskan waktu
            berkualitas bersama keluarga dan teman. Angkringan kami siap
            menyambut Anda dengan suasana yang nyaman, pelayanan ramah, dan rasa
            yang tidak pernah mengecewakan.
          </p>
          <a href='/Menu' className="border border-yellow-500 text-yellow-400 duration-300 hover:text-white hover:border-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
            Lihat Menu &rarr;
          </a>
        </div>

      </div>
    </div>


    <div className='pt-[8rem] items-center text-center' id='About'>
    <h1 className='text-2xl font-AnakArsitek pb-3'>Kenapa Harus Ke</h1>
    <h1 className='text-yellow-400 text-3xl font-poppins font-semibold'>Warung <b className='text-white font-AnakArsitek'>Anpas?</b></h1>
    <p className='text-lg pt-5 font-jakarta'>Di Warung Anpas, kami percaya bahwa makanan bukan hanya soal kenyang, tapi tentang menciptakan pengalaman yang menghubungkan orang. Setiap hidangan yang kami sajikan dipersiapkan dengan penuh cinta dan menggunakan bahan-bahan pilihan, dengan tujuan untuk memberikan rasa yang autentik dan menggugah selera. </p>
    </div>
    <div className="grid grid-cols-1 gap-6 pt-24 px-6 sm:px-12 lg:grid-cols-3 lg:gap-12 lg:px-24">
  
  <div className="bg-yellow-400 relative rounded-lg shadow-lg pb-6">
    <img
      src={uang}
      alt="Murah"
      className="w-3/4 mx-auto pt-8 pb-8"
    />
    <div className='absolute bottom-0 '>
    <h2 className="text-xl font-bold font-poppins text-center text-black">
      Murah
    </h2>
    <p className="text-base font-medium font-poppins text-center  px-[5rem] text-black ">
      Nongkrong lebih hemat di angkringan kami
    </p>
    </div>
  </div>


  <div className="bg-yellow-400 relative rounded-lg shadow-lg pb-6">
    <img
      src={jempol}
      alt="Ramah & Cepat"
      className="w-3/4 mx-auto pt-8 pb-8"
    />
    <div className='absolute bottom-0 '>
    <h2 className="text-xl font-bold font-poppins text-center text-black">
      Ramah & Cepat
    </h2>
    <p className="text-base font-medium font-poppins text-center  text-black px-[5rem]">
      Pelayanan ramah dan cepat di angkringan kami
    </p>
    </div>
  </div>


  <div className="bg-yellow-400 rounded-lg relative shadow-lg pb-6">
    <img
      src={berkualitas}
      alt="Berkualitas"
      className="w-3/4 mx-auto pt-8 pb-8"
    />
    <div className='absolute bottom-0 '>
    <h2 className="text-xl font-bold font-poppins text-center  text-black">
      Berkualitas
    </h2>
    <p className="text-base font-medium font-poppins text-center  text-black px-[5rem]">
      Menyediakan makanan dan minuman berkualitas
    </p>
    </div>
  </div>
</div>


    <div className='pt-[5rem]'>
    <h1 className='text-3xl font-poppins font-semibold text-yellow-400 pb-[3rem] text-center'>Hightlight menu </h1>
    </div>
    </section>
  )
}

export default HomePage