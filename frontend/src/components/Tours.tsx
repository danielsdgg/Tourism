import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Tours = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className='w-full bg-violet-200 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
            <p>Facinating views await you @<b> Harold-Adventures</b></p>
        </div>
    </div>
    <Footer />
    </>

  )
}

export default Tours