import React, { useState } from 'react';

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
      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error('Error adding new tour:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Main Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Adult Price</label>
          <input
            type="number"
            value={adultPrice}
            onChange={(e) => setAdultPrice(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Child Price</label>
          <input
            type="number"
            value={childPrice}
            onChange={(e) => setChildPrice(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image 1 URL</label>
          <input
            type="text"
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image 2 URL</label>
          <input
            type="text"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image 3 URL</label>
          <input
            type="text"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Tour
        </button>
      </form>
    </div>
  );
};

export default NewTour;
