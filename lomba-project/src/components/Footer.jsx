import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col bottom-0 justify-center pt-14 pb-10 bg-white shadow-[0px_-12px_30px_9px_#edf2f7]">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium pb-7">
    <a className="hover:text-gray-900 font-Lora duration-300 hover:scale-105" href="/">Home</a>
    <a className="hover:text-gray-900 font-Lora duration-300 hover:scale-105" href="#">About</a>
    <a className="hover:text-gray-900 font-Lora duration-300 hover:scale-105" href="/GodList">GreekMyth Explain</a>
</nav>

<div className="flex justify-center space-x-5 pb-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:scale-105 duration-300'>
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://www.tiktok.com/@nathanwleowle" target="_blank" rel="noopener noreferrer" className='hover:scale-105 duration-300'>
        <img src="https://img.icons8.com/?size=30&id=118638&format=png&color=000000" />
    </a>
    <a href="https://www.instagram.com/nathansigmaskibidi/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 duration-300'>
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
</div>
<p className="text-center text-gray-700 font-medium font-Lora">&copy; Website Developer : Nathan Sigma</p>
</footer>
  )
}

export default Footer