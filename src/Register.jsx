import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you might want to link to login

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    businessName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering Supplier:', formData);
    // TODO: Add Firebase or API call here to register a supplier
    alert('Supplier Registered Successfully! (This is a dummy registration)');
    // Optionally, navigate to a success page or login page
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">Supplier Registration</h2>

        <div className="mb-4">
          <label htmlFor="supplierName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input
            type="text"
            id="supplierName"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="supplierEmail" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="supplierEmail"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="supplierPhone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel" // Use type="tel" for phone numbers
            id="supplierPhone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="supplierPassword" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="supplierPassword"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            placeholder="Your Business Name"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 text-lg font-semibold transition duration-200"
        >
          Register as Supplier
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 hover:underline font-semibold">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;