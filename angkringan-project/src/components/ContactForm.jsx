import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Judul */}
        <h1 className="text-2xl font-bold text-yellow-400 mb-2">Contact us</h1>
        <p className="text-gray-400 mb-6">
          Kami mendengar kritik dan saran anda
        </p>

        {/* Form */}
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-yellow-400 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 bg-black border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-yellow-400 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-black border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-yellow-400 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              rows="4"
              className="w-full px-4 py-2 bg-black border border-gray-500 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
