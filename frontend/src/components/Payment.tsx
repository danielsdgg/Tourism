import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Payment = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 }; // Get total price from Booking page
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPaymentMethod(null);
  };

  // Function to handle payment submission
  const handlePayment = async () => {
    if (paymentMethod === 'mpesa') {
      try {
        const response = await fetch('/payments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalPrice, // Use the total price here
            phone: phoneNumber,
          }),
        });

        const data = await response.json();

        // Handle the response from the payment API
        if (response.ok) {
          alert(`Payment initiated! Check your phone for a prompt to complete the payment.`);
          // Optionally redirect or reset form after payment
        } else {
          setError(data.message || 'Failed to initiate payment');
        }
      } catch (error) {
        setError('An error occurred while processing your payment.');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 py-28">
        <div className="max-w-[100%] mx-auto grid md:grid-cols-2 gap-8 items-center">

          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="https://backtothesourcetours.com/wp-content/uploads/2024/07/How-to-pay-for-your-Tour-Banner-web-1600x800.jpg" // Replace with any valid payment image URL
              alt="Payment Methods"
              className="h-96 w-auto max-w-sm rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Column - Payment Method Selection */}
          <div className="text-center bg-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">Select Your Payment Method:</h1>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
              <button 
                className="bg-green-500 text-white w-full md:w-auto px-6 py-3 rounded-lg hover:bg-green-600 transition"
                onClick={() => handlePaymentMethodSelect('mpesa')}
              >
                Mpesa
              </button>
              <button 
                className="bg-blue-500 text-white w-full md:w-auto px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={() => handlePaymentMethodSelect('visa')}
              >
                Visa Card
              </button>
            </div>
          </div>
        </div>

        {/* Modal for payment prompt */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] md:max-w-lg max-w-xs">
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                &times;
              </button>

              {paymentMethod === 'mpesa' && (
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Follow Prompt to Complete Payment</h2>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number (e.g. 0707319080)" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4" 
                  />
                  <p className="mb-4"><b>TOTAL </b> = Kshs {totalPrice}</p>
                  <button 
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                    onClick={handlePayment} // Call payment handler
                  >
                    Pay
                  </button>
                  {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
                </div>
              )}

              {paymentMethod === 'visa' && (
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Enter Visa Card Details</h2>
                  <input 
                    type="text" 
                    placeholder="Card Number" 
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4" 
                  />
                  <input 
                    type="text" 
                    placeholder="Card Holder Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4" 
                  />
                  <input 
                    type="text" 
                    placeholder="Expiry Date (MM/YY)" 
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4" 
                  />
                  <input 
                    type="text" 
                    placeholder="CVV" 
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4" 
                  />
                  <button 
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Payment;
