// Details.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Define the structure of a single image and tour object
interface Image {
  image1: string;
  image2: string;
  image3: string;
}

interface Tour {
  name: string;
  description: string;
  images: Image[];
  adult_price: number;
  child_price: number;
  location: string;
}

const Details: React.FC = () => {
    // State for storing tour details
  const [tours, setTours] = useState<Tour | null>(null); 
  const [show2, setShow2] = useState(false);
  const [show1, setShow1] = useState(false);
  const [image1, setImage1] = useState<string>('');
  const [image2, setImage2] = useState<string>('');
  const [image3, setImage3] = useState<string>('');

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Fetching the tour details from the backend
    const fetching = async () => {
      try {
        const response = await fetch(`/tour/${id}`);
        const data: Tour = await response.json();
        setTours(data);

        // Extracting image URLs if available
        if (data.images.length > 0) {
          setImage1(data.images[0].image1);
          setImage2(data.images[0].image2);
          setImage3(data.images[0].image3);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetching();
  }, [id]);

  // If no tours data, show a loading state
  if (!tours) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="flex flex-col lg:items-center py-12 2xl:px-20 md:px-6 px-4">
      {/* Images Section */}
      <div className="grid lg:grid-cols-3 gap-6 w-full lg:w-2/3 h-2/3">
        {/* Individual Images in Columns on Large Screens */}
        <img className="w-full h-64 object-cover" alt={tours.name} src={image1} />
        <img className="w-full h-64 object-cover" alt={tours.name} src={image2} />
        <img className="w-full h-64 object-cover" alt={tours.name} src={image3} />
      </div>
    {/* Text and Description Section */}
    <div className="lg:w-2/3 w-full lg:mt-8 mt-6 lg:mx-auto">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2"> {tours.name} </h1>
    </div>
    <div className="border-b py-4 border-gray-200">
      <div onClick={() => setShow1(!show1)} className="flex justify-between items-center cursor-pointer">
        <p className="text-base leading-4 text-gray-800">Pricing</p>
        <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" aria-label="show or hide">
          <svg className={'transform ' + (show1 ? 'rotate-180' : 'rotate-0')} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <p className={'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' + (show1 ? 'block' : 'hidden')} id="sect"> Per Adult : {tours.adult_price} </p>
      <p className={'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' + (show1 ? 'block' : 'hidden')} id="sect">Per Child : {tours.child_price} </p>
    </div>
    <div className="border-b py-4 border-gray-200">
      <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
        <p className="text-base leading-4 text-gray-800">Description</p>
        <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" aria-label="show or hide">
          <svg className={'transform ' + (show2 ? 'rotate-180' : 'rotate-0')} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className={'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' + (show2 ? 'block' : 'hidden')} id="sect"> {tours.description} </div>
    </div>
    <Link to={`/booking/${id}`}>
      <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
        <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
        Book
      </button>
    </Link>
  </div>
</div>
    <Footer />
    </>
    
  );
};

export default Details;
