import React, { useState, FormEvent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TourItem from './TourItem';
import { Link } from 'react-router-dom';

// Define the type for each product item
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  adult_price: number;
  child_price: number
}

// Define the props type for the Tours component
interface ToursProps {
  product: Product[];
}

const Tours: React.FC<ToursProps> = ({ product }) => {
  const [search, setSearch] = useState<Product[]>([]);
  const [name] = useState('');

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
        id={tours.id}
        name={tours.name}
        description={tours.description}
        image={tours.image}
        adult_price={tours.adult_price}
        child_price={tours.child_price}
      />
    ));
  } else {
    // If no search results, display all products
    displayTours = product?.map((tours) => (
      <TourItem
        key={tours.id}
        id={tours.id}
        name={tours.name}
        description={tours.description}
        image={tours.image}
        adult_price={tours.adult_price}
        child_price={tours.child_price}
      />
    ));
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-300 h-full w-full">
        <form onSubmit={handleSubmit}>
          {/* Search form elements */}
        </form><br />
        <div className='w-full bg-gray-400 text-black py-16 px-4 text-center md:text-6xl sm:text-3xl text-3xl'>
          <p>Fascinating sites await <b>you</b></p>
        </div>
        <div className="flex justify-center">
          <Link to={'/add_tours'}>
            <button className="text-white border-4 bg-black hover:border-blue-600 px-4 my-8 py-2">
              ADD A TOUR
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayTours}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tours;
