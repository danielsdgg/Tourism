import React, { useState, FormEvent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TourItem from './TourItem';
import { Link } from 'react-router-dom';

// Define the type for each travel item
interface Travel {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

// Define the type for each product item
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

// Define the props type for the Tours component
interface ToursProps {
  travels: Travel[];
  product: Product[];
}

const Tours: React.FC<ToursProps> = ({ product }) => {
  const [search, setSearch] = useState<Product[]>([]);
  const [name, setName] = useState('');


  // Search functionality
  const filtering = () => {
    const filteredProducts = product.filter((pro: Product) =>
      pro.name.toLowerCase().includes(name.toLowerCase())
    );
    setSearch(filteredProducts);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') {
      // Clear search results if the search query is empty
      setSearch([]);
    } else {
      filtering();
    }
  };

  let displayTours;

  if (search.length > 0) {
    displayTours = search.map((tours) => (
      <TourItem
        key={tours.id}
        name={tours.name}
        description={tours.description}
        image={tours.image}
        price={tours.price}
      />
    ));
  } else {
    // If no search results, display all products
    displayTours = product?.map((tours) => (
      <TourItem
        key={tours.id}
        name={tours.name}
        description={tours.description}
        image={tours.image}
        price={tours.price}
      />
    ));
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-300 h-full w-full">
        <form onSubmit={handleSubmit}>
          <label className="font-semibold mr-2" htmlFor="name">
            Select Category :
          </label>
          <select
            className="slcc font-bold md:text-1xl sm:text-1xl"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <option value="">Any</option>
            <option value="Maasai Mara">Maasai Mara</option>
            <option value="Ngong Hills">Ngong Hills</option>
            <option value="Lakes">Lakes</option>
          </select>
          <button
            className="bg-[#00df9a] w-[100px] rounded-md ml-2 font-medium my-1 mx-auto py-2 text-black"
            type="submit"
          >
            <span>Search</span>
          </button>
        </form>
        <br />
        <h3 className="text-center font-bold md:text-4xl sm:text-3xl underline">Tours</h3>
        <hr className="my-6 w-full border-gray-200 sm:mx-auto dark:border-gray-900 lg:my-2" /> <br></br>
        <Link to={'/add_tours'}><button className="bg-[#00df9a] w-[100px] rounded-md font-medium my-1 mx-auto py-2 text-black ml-3">
          ADD
        </button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayTours}
        </div>
        {/* {travels.map((travel: Travel) => (
          <TourItem
            key={travel.id}
            name={travel.name}
            image={travel.image}
            price={travel.price}
            description={travel.description}
          />
        ))} */}
      </div>
      <Footer />
    </>
  );
};

export default Tours;
