import React from 'react'

const Text = () => {
  return (
    <div className="fixed bottom-12 left-1/2 z-50 -translate-x-1/2  rounded-full py-3 bg-white dark:bg-gray-800 p-2 drop-shadow-2xl max-sm:w-11/12" id="gdpr">
  <div className="flex items-center justify-between gap-6 text-sm">
    <div className="content-left pl-4 dark:text-white">
      Are U Enjoying Our Website?
    </div>
    <div className="content-right text-end">
      <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqsBJbRZmcLHDPQWFqrfCzHdPhltDpXCShHWTZpBQmsGkrJdqwSJjppZjdFqSDZDHblB' className="cursor-pointer rounded-full hover:bg-gray-700 duration-300 bg-black dark:bg-gray-600 px-4 py-2 text-white">Email Us</a>
    </div>
  </div>
</div>

  )
}

export default Text