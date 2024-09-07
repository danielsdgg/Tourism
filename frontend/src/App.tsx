// App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tours from './components/Tours';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewTour from './components/NewTour';

// Define the Product type to match the API data structure
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

// Define the Travel type if different from Product
interface Travel {
  name: string;
  description: string;
  image: string;
  price: number;
}

function App() {
  // State to hold products
  const [product, setProduct] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  
  // State to hold travels (update this based on your API structure if needed)
  const [travels] = useState<Product[]>([]); // Adjust type as necessary

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
        // Type assertion to handle 'unknown' type
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(`Error fetching data: ${errorMessage}`);
      }
    };
    fetching();
  }, []);

  const newTours = (tours : Travel) => {
    fetch('/post_tours', {method:"POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(tours)
    }).then (res => console.log(res))
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/tours" element={<Tours product={product} travels={travels} />} />
          <Route path="/add_tours" element={<NewTour newTours = {newTours} />} />  
        </Routes>
      </Router>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
    </div>
  );
}

export default App;
