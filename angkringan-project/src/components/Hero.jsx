import React from 'react'
import warung from '../assets/toko.jpg'
import menu from '../assets/menu.jpg'
import uang from '../assets/uang.png'
import jempol from '../assets/jempol.png'
import berkualitas from '../assets/berkualitas2.png'
import minuman from '../assets/minuman.jpg'


const Hero = () => {
  return (
    <section className='text-white pt-[5rem]'>
<div className="bg-gradient-to-b from-gray-600 to-black text-white p-6 duration-300 rounded-xl text-start shadow-lg max-w-5xl mx-auto mt-10">
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
        <div>
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
          <button className="border border-yellow-500 text-yellow-400 hover:text-white hover:border-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
            Pesan Sekarang &rarr;
          </button>
        </div>

      </div>
    </div>


    <div className='pt-[8rem]'>
    <h1 className='text-2xl font-AnakArsitek pb-3'>Kenapa Harus Ke</h1>
    <h1 className='text-yellow-400 text-3xl font-poppins font-semibold'>Angkringan <b className='text-white font-AnakArsitek'>Pasadena?</b></h1>
    <p className='text-lg pt-5 font-jakarta'>Di Angkringan Pasadena, kami percaya bahwa makanan bukan hanya soal kenyang, tapi tentang menciptakan pengalaman yang menghubungkan orang. Setiap hidangan yang kami sajikan dipersiapkan dengan penuh cinta dan menggunakan bahan-bahan pilihan, dengan tujuan untuk memberikan rasa yang autentik dan menggugah selera. </p>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 pt-[6rem]'>
    <div className='bg-yellow-400 rounded-lg pb-4'>
        <img 
        src={uang}
         alt="uang"
         className=' w-auto h-auto px-20 py-10 '
          />
      <h2 className='text-xl font-bold font-poppins text-black'>Murah</h2>
        <p className='text-base text-center font-poppins font-medium text-black'>Nongkrong lebih hemat
        di angkringan kami</p>
    </div>
    <div className='bg-yellow-400 rounded-lg pb-4'>
        <img 
        src={jempol}
         alt="uang"
         className=' w-auto h-auto px-20 py-10 '
          />
      <h2 className='text-xl font-bold font-poppins text-black  pt-8'>Ramah & Cepat</h2>
        <p className='text-base text-center font-poppins font-medium text-black'>Nongkrong lebih hemat
        di angkringan kami</p>
    </div>
    <div className='bg-yellow-400 rounded-lg'>
        <img 
        src={berkualitas}
         alt="uang"
         className=' w-auto h-auto pb-[1.5rem]'
          />
      <h2 className='text-xl font-bold font-poppins text-black'>Murah</h2>
        <p className='text-base text-center font-poppins font-medium text-black'>Nongkrong lebih hemat
        di angkringan kami</p>
    </div>
    </div>

    <div className='pt-[5rem]'>
    <h1 className='text-3xl font-poppins font-semibold text-yellow-400 pb-[3rem] '>Hightlight menu </h1>

    <div className="bg-yellow-500 px-12 justify-center items-center py-9 rounded-lg max-h-screen">
      <div className="grid grid-cols-4 gap-8">
        
          <div
            className="bg-black text-white p-4 rounded-lg flex flex-col items-center"
          >
            <img
              src={minuman} 
              alt="Sate Ayam"
              className="mb-4"
            />
            <h3 className="text-lg font-semibold">Sate Ayam</h3>
            <p className="text-xl font-bold my-2">Rp 69.000</p>
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 min-w-full rounded hover:bg-yellow-500">
              Beli
            </button>
          </div>
          <div
            className="bg-black text-white p-4 rounded-lg flex flex-col items-center"
          >
            <img
              src={minuman} 
              alt="Sate Ayam"
              className="mb-4"
            />
            <h3 className="text-lg font-semibold">Sate Ayam</h3>
            <p className="text-xl font-bold my-2">Rp 69.000</p>
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 min-w-full rounded hover:bg-yellow-500">
              Beli
            </button>
          </div>
          <div
            className="bg-black text-white p-4 rounded-lg flex flex-col items-center"
          >
            <img
              src={minuman} 
              alt="Sate Ayam"
              className="mb-4"
            />
            <h3 className="text-lg font-semibold">Sate Ayam</h3>
            <p className="text-xl font-bold my-2">Rp 69.000</p>
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 min-w-full rounded hover:bg-yellow-500">
              Beli
            </button>
          </div>
          <div
            className="bg-black text-white p-4 rounded-lg flex flex-col items-center"
          >
            <img
              src={minuman} 
              alt="Sate Ayam"
              className="mb-4"
            />
            <h3 className="text-lg font-semibold">Sate Ayam</h3>
            <p className="text-xl font-bold my-2">Rp 69.000</p>
            <button className="bg-yellow-400 text-black font-bold py-2 px-4 min-w-full rounded hover:bg-yellow-500">
              Beli
            </button>
          </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Hero