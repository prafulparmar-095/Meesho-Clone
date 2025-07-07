import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    alert('User Registered Successfully! (This is a dummy registration)');
    // TODO: You can integrate with Firebase or a backend API here for real user registration
    navigate('/login'); // Navigate to login after dummy registration
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">User Registration</h2>

        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
          <input
            type="text"
            id="userName"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="userEmail"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userPhone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel" // Use type="tel" for phone numbers
            id="userPhone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="userPassword" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="userPassword"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 text-lg font-semibold transition duration-200"
        >
          Register
        </button>

        {/* Optional Login Link */}
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

export default UserRegister;