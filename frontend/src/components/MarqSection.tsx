import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../assets/NCBA.jpg';
import img2 from '../assets/coop.jpg';
import img3 from '../assets/grizzly.png';
import img4 from '../assets/saf.png';
import img5 from '../assets/samsung.png';
import img6 from '../assets/Microsoft.jpg'
import '../App.css'


const MarqSection = () => {
  return (
    <div className='app'>
        <div className='title'>
            <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl'>Our Technology Partners</h1>
            <p className='mt-4 font-medium'>Royal-Bush-Safaris wouldn't be possible without our collaborators</p>
        </div>
        <div>
            <Marquee speed={90} delay={2} gradient={true}>

                <div className='image_wrapper'>
                    <img className='w-[200px] mx-auto rounded-3xl my-4' src={img1} alt='' />
                </div>
                <div className='image_wrapper'>
                    <img className='w-[200px] mx-auto rounded-3xl my-4' src={img2} alt='' />
                </div>
                <div className='image_wrapper'>
                    <img className='w-[200px] mx-auto rounded-3xl my-4' src={img3} alt='' />
                </div>
                <div className='image_wrapper'>
                    <img className='w-[200px] mx-auto rounded-3xl my-4' src={img4} alt='' />
                </div>
                <div className='image_wrapper'>
                    <img className='w-[200px] mx-auto rounded-3xl my-4' src={img5} alt='' />
                </div>
                <div className='image_wrapper'>
                    <img className='w-[200px] mx-auto rounded-3xl my-4' src={img6} alt='' />
                </div>
            </Marquee>
        </div>
    </div>
  )
}

export default MarqSection