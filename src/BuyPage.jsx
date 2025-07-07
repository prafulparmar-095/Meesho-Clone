//Tasmeen Quraishi
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BuyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, name, price, color } = location.state || {}; // Destructure with default empty object

  // Ensure product details exist before proceeding
  if (!name || !price || !image) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">Error: Product details missing.</h2>
        <p>Please go back to the product page and try again.</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Go to All Products
        </button>
      </div>
    );
  }

  const handleProceed = () => {
    navigate('/address', { state: { image, name, price, color } });
  };

  return (
    <div className="p-10 max-w-xl mx-auto bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Confirm Your Order</h2>

      <div className="flex items-center mb-6 border-b pb-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-md mr-4"
        />
        <div>
          <p className="text-xl font-semibold text-gray-800">{name}</p>
          <p className="text-md text-gray-600">Color: {color || 'N/A'}</p>
          <p className="text-2xl font-bold text-pink-600 mt-1">₹{price}</p>
        </div>
      </div>

      <button
        onClick={handleProceed}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 text-lg font-semibold transition duration-200"
      >
        Proceed to Address
      </button>
    </div>
  );
}