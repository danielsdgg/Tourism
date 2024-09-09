import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div  className='w-full h-screen bg-gray-300 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] bg-gray-500 p-3 w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black py-4'> To reach me, Submit the form below or shoot me an email - gathigidg26@gmail.com</p>
            </div>
        <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-white' type="email" placeholder='Email or Tel' name='email' />
        <textarea className='bg-white p-2' name="message" placeholder='Message'></textarea>
        <button className='text-white border-4 bg-black hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
<Footer />
    </>

  )
}

export default Contact