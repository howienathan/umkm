import React, { useState, useEffect } from 'react';

const Text = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Timer untuk menampilkan elemen setelah 5 detik
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
  }, []);

  const handleClick = () => {
    // Sembunyikan elemen saat tombol diklik
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed bottom-12 left-1/2 z-50 -translate-x-1/2 rounded-full py-3 bg-white dark:bg-gray-800 p-2 drop-shadow-2xl max-sm:w-11/12 
      transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
      id="gdpr"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between  text-sm">
        <div className="items-center pl-4 dark:text-white">
          Are U Enjoying Our Website?
        </div>
        <div className="content-right text-center">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqsBJbRZmcLHDPQWFqrfCzHdPhltDpXCShHWTZpBQmsGkrJdqwSJjppZjdFqSDZDHblB"
            className="cursor-pointer rounded-full hover:bg-gray-700 duration-300 bg-black dark:bg-gray-600 px-4 py-2 text-white"
          >
            Email Us
          </a>
          <button
            onClick={handleClick}
            className="cursor-pointer rounded-full hover:bg-gray-700 ml-2 duration-300 bg-black dark:bg-gray-600 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Text;
