import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar />
    <div>
        {/* {begiining} */}
        <div className='w-full bg-gray-300 py-16 px-12'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Harold-Adventures-Corporate</h2>
                <p>Welcome to your no:1 site for tours and travels exciting adventures. Here we got all you need to make your trips great and memorable.
                  We are a tours and travel company that thrives in delivering top-notch services to our tourists.
                   Great and exciting adventures awaits, You can now book a tour with us <Link to="/tours" className="text-blue-500 font-extrabold">Here</Link> and get started. </p>

            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://i.pinimg.com/736x/6d/37/ad/6d37ad2adfafaf9d92885e1c2e20a3fd.jpg' alt=''/>
        </div>
    </div>
              {/* first section of homepage */}
      <div className='w-full bg-black py-16 px-12'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] rounded-3xl mx-auto my-4' src='https://www.oneworldtravel.rw/wp-content/uploads/2018/02/Tours-and-travel.jpg' alt='imagery'/>
          <div className='flex flex-col justify-center text-white'>
            <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Effortless Search</h2>
            <p>
            Explore a curated selection of tours and travels adventure and services offered to our clients. Our intuitive interface makes finding your ideal taste a breeze.
            </p>
          </div>
        </div>
      </div>

      {/* second section of the homepage */}
      <div className='w-full bg-gray-300 py-16 px-16'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Message from our CEO:</h2>
                <p>
                    Harold-Adventures has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves.
                    <p>Internally, but also within the larger communities in which we are active. I am excited to be launching this website since it will connect us more to our clients. We are here to serve you. Enjoy..!</p>
                </p>
            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://res.cloudinary.com/ddei3mzex/image/upload/v1716552809/1000045233_ywrlv5.jpg' alt='mind'/>

        </div>
    </div>

    {/* third section of the homepage */}
    <div className='w-full bg-violet-200 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
        <p>Become part of our mission and join<b> Harold-Adventures</b></p>
    </div>

    </div>
    <Footer />    
    </>
  )
}

export default Home