import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface BookingProps {
  pricePerAdult: number;
  pricePerChild: number;
}

const Booking: React.FC<BookingProps> = ({ pricePerAdult, pricePerChild }) => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // Calculate total price whenever adults, children, or tour details change
    const total = (adults * pricePerAdult) + (children * pricePerChild);
    setTotalPrice(total);
  }, [adults, children, pricePerAdult, pricePerChild]);

  return (
    <>
    <Navbar />
        <div className="w-full h-screen bg-gray-100 flex justify-center items-center p-4">
      <form className="flex flex-col max-w-[600px] bg-white p-6 w-full shadow-lg rounded-lg">
        <h2 className="text-2xl text-center underline font-bold mb-6">Book Your Tour</h2>

        <label className="mb-4">
          <span className="block text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Phone Number</span>
          <input
            type="tel"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        <label className="mb-4">
          <span className="block text-gray-700">Number of Adults :</span>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
          >
            <option value="0">Select number</option>
            {[...Array(10).keys()].map((n) => (
              <option key={n} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </label>

        <label className="mb-6">
          <span className="block text-gray-700">Number of Children :</span>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value))}
          >
            <option value="0">Select number</option>
            {[...Array(10).keys()].map((n) => (
              <option key={n} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </label>

        <div className="mb-6">
          <p className="text-xl font-semibold">
            Total Price: Kshs {totalPrice}
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Booking;
