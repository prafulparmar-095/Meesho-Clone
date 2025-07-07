import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function AddressPage() {
  const location = useLocation();
  const { image, name, price, color } = location.state || {}; // Destructure with default empty object

  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    pincode: '',
    city: '',
    state: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setError(''); // Clear error on change
  };

  const handleSubmit = () => {
    const allFilled = Object.values(address).every((val) => val.trim() !== '');
    if (allFilled) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Please fill all address fields.');
    }
  };

  // Ensure product details exist
  if (!name || !price || !image) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl font-bold mb-4">Error: Product details missing.</h2>
        <p>Could not load product details for address page.</p>
        {/* You might want to navigate back or to a general products page here */}
        <button
          onClick={() => window.history.back()} // Go back to the previous page
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-xl mx-auto bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-pink-600 text-center">Shipping Address</h2>

      <div className="mb-6 p-4 border rounded bg-gray-50">
        <p className="text-lg font-semibold text-gray-800">Order Summary:</p>
        <div className="flex items-center mt-2">
          <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md mr-3" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-gray-600">Color: {color || 'N/A'}</p>
            <p className="text-xl font-bold text-pink-600">₹{price}</p>
          </div>
        </div>
      </div>

      {!submitted ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address Line 1</label>
            <input
              type="text"
              name="line1"
              value={address.line1}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="House No., Building, Street, Area"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address Line 2 (Optional)</label>
            <input
              type="text"
              name="line2"
              value={address.line2}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Landmark, e.g., Near Apollo Hospital"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="e.g. 842003"
              required
              pattern="[0-9]{6}" // Basic 6-digit pincode validation
              title="Pincode must be 6 digits"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="e.g. Muzaffarpur"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="e.g. Bihar"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            onClick={handleSubmit}
            className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 w-full text-lg font-semibold transition duration-200"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="mt-6 p-6 border rounded-lg bg-green-100 text-green-800 text-center shadow-inner">
          <h3 className="text-2xl font-bold mb-3">Order Confirmed!</h3>
          <p className="mb-2">Your order for <span className="font-semibold">{name}</span> has been placed successfully.</p>
          <p className="mb-2">It will be delivered to:</p>
          <p className="font-medium">{address.line1}, {address.line2 && `${address.line2}, `}{address.city}, {address.state} - {address.pincode}</p>
          <p className="mt-4 text-sm">Thank you for shopping with us!</p>
          <button
            onClick={() => window.location.href = '/'} // Navigate to homepage
            className="mt-6 bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}