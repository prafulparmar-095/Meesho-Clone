import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function AddressPage() {
  const location = useLocation();
  const { name, price, color } = location.state || {};

  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (address.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
      <p><strong>Product:</strong> {name}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Color:</strong> {color}</p>

      {!submitted ? (
        <div className="mt-4">
          <textarea
            className="w-full border p-3 rounded"
            placeholder="Enter your address here..."
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="mt-6 p-4 border rounded bg-green-100 text-green-800">
          <p>Thank you for your purchase! Your order has been placed.</p>
        </div>
      )}
    </div>
  );
}