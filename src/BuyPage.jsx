//Tasmeen Quraishi
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BuyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, price, color } = location.state || {};

  const handleProceed = () => {
    navigate('/address', { state: { name, price, color } });
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Buy Product</h2>
      <p className="mb-2"><strong>Product:</strong> {name}</p>
      <p className="mb-2"><strong>Price:</strong> {price}</p>
      <p className="mb-2"><strong>Color:</strong> {color}</p>
      <button
        onClick={handleProceed}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Proceed to Buy
      </button>
    </div>
  );
}