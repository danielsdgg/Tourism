import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="w-full h-auto bg-gray-100 py-28 px-12">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        className="w-[800px] h-[400px] rounded-3xl shadow-lg"
        src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg"
        alt="imagery"
      />
    </div>

    {/* Form Section */}
    <div className="flex justify-center items-center">
      <form className="w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="pb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600">To contact us, please fill out the form below or send an email to <a href="mailto:gathigidg26@gmail.com" className="text-blue-500">gathigidg26@gmail.com</a>.</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Name</label>
          <input 
            className="w-full p-2 mt-1 border border-gray-300 rounded" 
            type="text" 
            placeholder="Your Name" 
            name="name" 
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Email or Phone</label>
          <input 
            className="w-full p-2 mt-1 border border-gray-300 rounded" 
            type="email" 
            placeholder="Email or Phone Number" 
            name="email" 
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Message</label>
          <textarea 
            className="w-full p-2 mt-1 border border-gray-300 rounded" 
            name="message" 
            placeholder="Your Message" 
            rows={4}
          ></textarea>
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    <Footer />
    </>

  )
}

export default Contact