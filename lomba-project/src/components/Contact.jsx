import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import GmailMessage from './GmailMessage'
import WhatsAppButton from './WhatsappButton'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-[3rem]'>
       <div className='w-full h-[30rem]'>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31681.401956864764!2d110.4195174!3d-6.98862855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b41831c7b9d%3A0xcb17f1f8f9b49a67!2sRSUP%20Dr%20Kariadi%20Semarang!5e0!3m2!1sid!2sid!4v1737704597827!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
       </div>
       <div className='bg-[#240909] rounded-lg '>
        <div className='mx-[2rem]'>
        <h1 className='font-semibold text-white text-xl font-jakarta pt-[1rem]'>Keterangan</h1>
        <p className='font-semibold text-white text-base font-jakarta pt-[1rem]'>kami memiliki tempat yang cukup strategis dikarenakan banyak nya orang yang berlewatan kesana kemari melewati warung kami dan besar kemungkinan jika mereka kelaparan akan ke warung kami</p>
        <p className='font-semibold text-white text-base font-jakarta pt-[1rem] text-left'><span className='pr-[3rem]'>senin</span> jam 12.00 - 01.00</p>
        <p className='font-semibold text-white text-base font-jakarta pt-[1rem] text-left'><span className='pr-[3rem]'>senin</span> jam 12.00 - 01.00</p>
        <p className='font-semibold text-white text-base font-jakarta pt-[1rem] text-left'><span className='pr-[3rem]'>senin</span> jam 12.00 - 01.00</p>
        <p className='font-semibold text-white text-base font-jakarta pt-[1rem] text-left'><span className='pr-[3rem]'>senin</span> jam 12.00 - 01.00</p>
        <p className='font-semibold text-white text-base font-jakarta pt-[1rem] text-left'><span className='pr-[3rem]'>senin</span> jam 12.00 - 01.00</p>
        <div className="text-center sm:text-left pt-[1rem]">
        <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
        <a href='' className="flex items-center justify-center sm:justify-start bg-red-500 text-white py-2 px-4 duration-300 rounded-lg hover:bg-red-600 transition">
          <i className="bx bxs-envelope mr-2"></i> <GmailMessage/>
        </a>
        <a  className="flex items-center justify-center sm:justify-start cursor-pointer hover:bg-green-500 duration-300 bg-green-400 py-2 px-2 rounded-lg text-white font-bold  mt-2">
         
          <i className="bx bxs-phone mr-2"></i>  <WhatsAppButton/>
        </a>
      </div>
        </div>
       </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
