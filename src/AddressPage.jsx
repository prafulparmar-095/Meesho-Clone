import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function AddressPage() {
  const location = useLocation();
  const { image , name, price, color, } = location.state || {};

  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    pincode: '',
    city: '',
    state: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const allFilled = Object.values(address).every((val) => val.trim() !== '');
    if (allFilled) {
      setSubmitted(true);
    } else {
      alert('Please fill all address fields.');
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>

      <div className="mb-6 p-4 border rounded bg-gray-50">
        <p><strong>Image:</strong> {image}</p>
        <p><strong>Product:</strong> {name}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Color:</strong> {color}</p>
      </div>

      {!submitted ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">House No / Apartment / Office</label>
            <input
              type="text"
              name="line1"
              value={address.line1}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. 123, Sunrise Apt, Tech Park"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Road / Village / Area</label>
            <input
              type="text"
              name="line2"
              value={address.line2}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. Muzaffarpur"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. 842003"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. Bihar"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="e.g. Delhi"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="mt-6 p-4 border rounded bg-green-100 text-green-800">
          <p>✅ Thank you for your purchase! Your order has been placed.</p>
        </div>
      )}
    </div>
  );
}
