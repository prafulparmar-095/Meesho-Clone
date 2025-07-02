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
    // TODO: Add real auth logic
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700"
        >
          Login
        </button>

        {/* Register Now Link */}
<p className="mt-6 text-center text-sm text-gray-600">
  New user?{' '}
  <Link to="/user-register" className="text-pink-600 font-medium hover:underline">
    Register as User
  </Link>
</p>
      </form>
    </div>
  );
};

export default Login;
