import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${formData.email}`);
    // TODO: Add real authentication logic here (e.g., API call to a backend)
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">Login to Meesho</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
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
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/user-register" className="text-pink-600 hover:underline font-semibold">
            Register as User
          </Link>{' '}
          or{' '}
          <Link to="/register" className="text-pink-600 hover:underline font-semibold">
            Become a Supplier
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;