import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#104c4e] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitterSquare size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaDribbbleSquare size={24} />
          </a>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Royal Bush Safaris</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
