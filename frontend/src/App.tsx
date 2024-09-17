import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tours from './components/Tours';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewTour from './components/NewTour';
import Details from './components/Details';
import Booking from './components/Booking';
import Payment from './components/Payment';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  adult_price: number;
  child_price: number;
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

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch('/tours');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(`Error fetching data: ${errorMessage}`);
      }
    };
    fetching();
  }, []);

  const newTours = async (travel: Travel): Promise<void> => {
    try {
      const response = await fetch('/post_tours', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(travel)
      });
      if (!response.ok) {
        throw new Error('Failed to add new tour');
      }
      console.log(await response.json());
    } catch (error) {
      console.error('Error adding new tour:', error);
    }
  };

  const pricePerAdult = 700;
  const pricePerChild = 500;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/tours" element={<Tours product={product} />} />
          <Route path="/add_tours" element={<NewTour newTours={newTours} />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/payment" element={<Payment />} />
          <Route 
            path="/booking" 
            element={<Booking pricePerAdult={pricePerAdult} pricePerChild={pricePerChild} />} 
          />
        </Routes>
      </Router>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default App;
