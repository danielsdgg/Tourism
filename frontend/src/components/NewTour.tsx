import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface NewTourProps {
  newTours: (travel: Travel) => Promise<void>;
}

interface Travel {
  name: string;
  description: string;
  image: string;
  adult_price: number;
  child_price: number;
  images: {
    image1: string;
    image2: string;
    image3: string;
  }[];
}

const NewTour: React.FC<NewTourProps> = ({ newTours }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [adultPrice, setAdultPrice] = useState(0);
  const [childPrice, setChildPrice] = useState(0);
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTourData: Travel = {
      name,
      description,
      image,
      adult_price: adultPrice,
      child_price: childPrice,
      images: [
        {
          image1,
          image2,
          image3
        }
      ]
    };

    try {
      await newTours(newTourData);
      // Show success notification
      setNotification('Tour added successfully');
      // Reset form fields
      setName('');
      setDescription('');
      setImage('');
      setAdultPrice(0);
      setChildPrice(0);
      setImage1('');
      setImage2('');
      setImage3('');
      // Remove notification after 6 seconds
      setTimeout(() => setNotification(null), 6000);
    } catch (error) {
      console.error('Error adding new tour:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] bg-white p-6 w-full shadow-lg rounded-lg">
        <Link to={'/tours'}>
          <p className='cursor-pointer pt-4 text-base leading-normal pr-12 mt-4 text-gray-500 flex items-center'>
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            Go back
          </p>
        </Link>
        <h2 className="text-2xl text-center underline font-bold mb-6">Add New Tour</h2>

        <label className="mb-4">
          <span className="block text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Description</span>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Main Image URL</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Adult Price</span>
          <input
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={adultPrice}
            onChange={(e) => setAdultPrice(parseFloat(e.target.value))}
            required
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Child Price</span>
          <input
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={childPrice}
            onChange={(e) => setChildPrice(parseFloat(e.target.value))}
            required
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Image 1 URL</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
            required
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Image 2 URL</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            required
          />
        </label>

        <label className="mb-6">
          <span className="block text-gray-700">Image 3 URL</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Tour
        </button>

        {notification && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">
            {notification}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewTour;
