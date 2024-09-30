import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#104c4e] py-8'>
      <div className='max-w-[1240px] mx-auto px-4 grid lg:grid-cols-2 gap-8 text-white'>
        <div>
          <Link to={'/'}>
            <img
              src='https://i.pinimg.com/736x/6d/37/ad/6d37ad2adfafaf9d92885e1c2e20a3fd.jpg'
              className='h-16 w-16 mb-4 cursor-pointer'
              alt='Royal bush safaris logo'
            />
          </Link>
          <p className='mb-4'>
            Navigate through the website for tours and reach out to us in case of any inquiries.
          </p>
          <div className='flex space-x-6'>
            <a href='http://www.facebook.com' aria-label='Facebook'>
              <FaFacebookSquare size={30} />
            </a>
            <a href='http://www.instagram.com' aria-label='Instagram'>
              <FaInstagram size={30} />
            </a>
            <a href='http://www.twitter.com' aria-label='Twitter'>
              <FaTwitterSquare size={30} />
            </a>
            <a href='http://www.dribble.com' aria-label='Dribbble'>
              <FaDribbbleSquare size={30} />
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-center lg:justify-end text-center lg:text-right'>
          <p className='text-gray-300 text-lg font-medium mb-4'>
            Royal bush safaris @2024
          </p>
          <p className='text-gray-400 text-sm'>
            All rights reserved. Developed with D26.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
