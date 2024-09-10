import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Define the type for the travel object, including nested image fields
interface Travel {
  name: string;
  description: string;
  image: string;
  price: number;
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
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
    price: 0,
    images: {
      image1: "",
      image2: "",
      image3: "",
    },
  });
  const [notification, setNotification] = useState<string | null>(null);
  const navigate = useNavigate();

  // Define the handleChange event type as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    // Check if the input belongs to the main travel or nested images
    if (id === "image1" || id === "image2" || id === "image3") {
      setTravel((prev) => ({
        ...prev,
        images: {
          ...prev.images,
          [id]: value,
        },
      }));
    } else {
      setTravel((prev) => ({
        ...prev,
        [id]: id === "price" ? parseFloat(value) : value,
      }));
    }
  };

  // Define the handleSubmit event type as React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await newTours(travel);
      setNotification("New tour added successfully!"); // Set success message
      setTimeout(() => {
        navigate("/tours"); // Redirect to the tours page after 3 seconds
      }, 3000);
    } catch (error) {
      setNotification("Failed to add new tour."); // Set error message
    }
  };

  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] bg-gray-500 p-3 w-full"
      >
        <div className="pb-8">
          <Link to={"/tours"}>
            <img
              className="w-[30px] cursor-pointer my-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoh5acUOOmQRCbwrlrqsXJjksHBQu-r_0Ulw&s"
              alt="imagery"
            />
          </Link>
          <div className="flex justify-center">
            <p className="text-4xl font-bold inline border-b-4 border-black text-black">
              Add A Tour
            </p>
          </div>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name of Tour"
          id="name"
          value={travel.name}
          onChange={handleChange}
        />
        <textarea
          className="my-4 p-2 bg-white"
          placeholder="Enter Tour Description"
          id="description"
          value={travel.description}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-white"
          type="text"
          placeholder="Main Tour Image URL"
          id="image"
          value={travel.image}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-white"
          type="number"
          placeholder="Price"
          id="price"
          value={travel.price}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-white"
          type="text"
          placeholder="Image 1 URL"
          id="image1"
          value={travel.images.image1}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-white"
          type="text"
          placeholder="Image 2 URL"
          id="image2"
          value={travel.images.image2}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-white"
          type="text"
          placeholder="Image 3 URL"
          id="image3"
          value={travel.images.image3}
          onChange={handleChange}
        />
        <button
          className="text-white border-4 bg-black hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
        >
          Add
        </button>
        {notification && (
          <p className="text-center bg-gray-600 text-green-300 italic p-2 rounded">
            {notification}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewTour;
