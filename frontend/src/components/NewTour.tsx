// NewTour.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Define the type for the travel object
interface Travel {
  name: string;
  description: string;
  image: string;
  adult_price: number; 
  child_price: number; 
}

// Define the props type, which includes the newTours function
interface NewTourProps {
  newTours: (travel: Travel) => void;
}

const NewTour: React.FC<NewTourProps> = ({ newTours }) => {
  const [travel, setTravel] = useState<Travel>({
    name: "",
    description: "",
    image: "",
    adult_price: 0,
    child_price: 0,
  });
  const [notification, setNotification] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target.id;
    const value = input === 'adult_price' || input === 'child_price' ? parseFloat(e.target.value) : e.target.value;
    setTravel((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await newTours(travel);
      setNotification('New tour added successfully!');
      setTimeout(() => {
        navigate('/tours');
      }, 3000);
    } catch (error) {
      setNotification('Failed to add new tour.');
    }
  };

  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] bg-white p-6 w-full shadow-lg rounded-lg'>
        <div className='pb-8'>
          <Link to={'/tours'}>
            <img
              className='w-[30px] cursor-pointer my-4'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoh5acUOOmQRCbwrlrqsXJjksHBQu-r_0Ulw&s'
              alt='imagery'/>
          </Link>
          <h2 className="text-2xl text-center underline font-bold mb-6">Add A Tour</h2>
        </div>
        <label className="mb-4">
        <span className="block text-gray-700">Name :</span>
        <input
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
          type="text"
          placeholder='Name of Tour'
          id='name'
          value={travel.name}
          onChange={handleChange}
        />
        </label>
        <label className="mb-4">
        <span className="block text-gray-700">Description :</span>
        <input
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
          type="text"
          placeholder='Enter Tour Description'
          id='description'
          value={travel.description}
          onChange={handleChange}
        />
        </label>
        <label className="mb-4">
        <span className="block text-gray-700">Card Image :</span>
        <input
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
          type="text"
          placeholder='Tour Image'
          id='image'
          value={travel.image}
          onChange={handleChange}
        />
        </label>
        <label className="mb-4">
        <span className="block text-gray-700">Card Image :</span>
        <input
          className='mt-1 block w-full p-2 border border-gray-300 rounded'
          type="text"
          placeholder='Tour Image'
          id='image'
          value={travel.image}
          onChange={handleChange}
        />
        </label>
        <span className="block text-gray-700">Enter price per adult :</span>
        <input
          className='mt-1 bg-gray-200 block w-full p-2 border border-gray-300 rounded'
          type="number"
          placeholder='Adult Price'
          id='adult_price'
          value={travel.adult_price}
          onChange={handleChange}
        />
        <span className="block text-gray-700">Enter price per child :</span>
        <input
          className='mt-1 bg-gray-200 block w-full p-2 border border-gray-300 rounded'
          type="number"
          placeholder='Child Price'
          id='child_price'
          value={travel.child_price}
          onChange={handleChange}
        />
        <button
          className='text-white border-4 bg-blue-400 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'
          type='submit'
        >
          Add
        </button>
        {notification && (
          <p className='text-center bg-gray-600 text-green-300 italic p-2 rounded'>{notification}</p>
        )}
      </form>
    </div>
  );
};

export default NewTour;
