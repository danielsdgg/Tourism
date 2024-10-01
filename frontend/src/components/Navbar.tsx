import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-white bg-[#104c4e] fixed top-0 left-0 right-0 z-50'>
      <Link to={'/'}> 
        <img 
          src="https://i.pinimg.com/736x/6d/37/ad/6d37ad2adfafaf9d92885e1c2e20a3fd.jpg" 
          className="h-8 mr-2 cursor-pointer" 
          alt="Fashion Design" 
        />
      </Link>
      <span className="w-full text-2xl font-semibold whitespace-nowrap text-white cursor-pointer">Royal-Bush-Safaris</span>
      <ul className='hidden md:flex'>
        <Link to={'/'}><li className='text-white p-4 cursor-pointer'>Home</li></Link>
        <Link to={'/tours'}><li className='text-white p-4 cursor-pointer'>Tours</li></Link>
        <Link to={'/contacts'}><li className='text-white p-4 cursor-pointer'>Contacts</li></Link>
        <Link to={'/about'}><li className='text-white p-4 cursor-pointer'>About</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-200 bg-[#104c4e] ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img 
          src="https://i.pinimg.com/736x/6d/37/ad/6d37ad2adfafaf9d92885e1c2e20a3fd.jpg" 
          className="h-8 mr-2 cursor-pointer" 
          alt="Fashion Design" 
        />
        <span className="w-full text-2xl font-semibold whitespace-nowrap text-white cursor-pointer">Royal-Bush-Safaris</span><br></br>
        <Link to={'/'}><li className='text-white p-4 cursor-pointer border-b border-gray-600'>Home</li></Link>
        <Link to={'/tours'}><li className='text-white p-4 cursor-pointer border-b border-gray-600'>Tours</li></Link>
        <Link to={'/contacts'}><li className='text-white p-4 cursor-pointer border-gray-600'>Contacts</li></Link>
        <Link to={'/about'}><li className='text-white p-4 cursor-pointer border-b border-gray-600'>About</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
