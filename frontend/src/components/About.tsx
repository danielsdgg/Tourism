import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const About = () => {
  let message = `We make plans, you make memories.`;
  return (
    <>
    <Navbar/>
<div className='w-full bg-white py-28 px-4'>
  <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8'>
    <div className='flex flex-col items-center text-black'>
      <img
        className='w-[120px] mb-6'
        src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png'
        alt='Holistic solutions'
      />
      <h2 className='font-bold text-center text-xl mb-4'>Holistic Solutions</h2>
      <p className='text-center'>
        We go beyond a simple patch-up but develop lasting solutions through holistic design.
      </p>
    </div>
    <div className='flex flex-col items-center text-black'>
      <img
        className='w-[120px] mb-6'
        src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png'
        alt='Impact'
      />
      <h2 className='font-bold text-center text-xl mb-4'>Impact</h2>
      <p className='text-center'>
        Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.
      </p>
    </div>
    <div className='flex flex-col items-center text-black'>
      <img
        className='w-[120px] mb-6'
        src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png'
        alt='Open data'
      />
      <h2 className='font-bold text-center text-xl mb-4'>Open Data</h2>
      <p className='text-center'>
        Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.
      </p>
    </div>
  </div>
</div>


    <section className="bg-gray-200 py-28">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Team Behind Royal-Bush-Safaris</h2>
                <p className="text-lg md:text-xl text-gray-500">{message}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="col-span-3 md:col-span-1 pt-9">
                        <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1716552809/1000045233_ywrlv5.jpg" className="mx-auto w-48 h-48 rounded-full mb-6" alt="pic" />
                            <h3 className="text-xl font-semibold">Harold</h3>
                            <div className="mb-4">
                                <p className="text-gray-500">CEO of Royal-Bush</p>
                            </div>
                            <p className="text-black">Harold is our co-founder and has developed search strategies for a variety of clients from international brands to medium-sized businesses for over five years.</p>
                            <ul className="flex justify-center mt-6">
                                <li className="mx-2">
                                <a href="http://www.twitter.com" > <FaTwitterSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.instagram.com" > <FaInstagram size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.facebook.com" > <FaFacebookSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.dribble.com" ><FaDribbbleSquare size={30} /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* second */}
                    <div className="col-span-3 md:col-span-1 pt-9">
                        <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712753109/all.png" className="mx-auto w-48 h-48 rounded-full mb-6" alt="pic" />
                            <h3 className="text-xl font-semibold">ALLI ABDALLA</h3>
                            <div className="mb-4">
                                <p className="text-gray-600">Marketing manager</p>
                            </div>
                            <p className="text-black">Alli first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                            <ul className="flex justify-center mt-6">
                                <li className="mx-2">
                                <a href="http://www.twitter.com" > <FaTwitterSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.instagram.com" > <FaInstagram size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.facebook.com" > <FaFacebookSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.dribble.com" ><FaDribbbleSquare size={30} /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* third */}
                    <div className="col-span-3 md:col-span-1 pt-9">
                        <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg" className="mx-auto w-48 h-48 rounded-full mb-6" alt="pic" />
                            <h3 className="text-xl font-semibold">DANIEL MUIRURI</h3>
                            <div className="mb-4">
                                <p className="text-gray-600">Software Engineer</p>
                            </div>
                            <p className="text-black">Daniel is our lead developer who specializes in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
                            <ul className="flex justify-center mt-6">
                                <li className="mx-2">
                                <a href="http://www.twitter.com" > <FaTwitterSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.instagram.com" > <FaInstagram size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.facebook.com" > <FaFacebookSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.dribble.com" ><FaDribbbleSquare size={30} /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Repeat the above structure for the other team members */}
                </div>
            </div>
        </section>

    <Footer/>
    </>

  )
}

export default About