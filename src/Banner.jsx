import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="h-[200px] sm:h-[250px] md:h-[350px] flex items-center justify-center sm:justify-end pr-0 sm:pr-16 text-white relative bg-cover bg-center text-center sm:text-right"
      style={{ backgroundImage: "url('https://images.meesho.com/images/marketing/1746425994914.webp')" }}
    >
      <div className="max-w-xs sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">Smart Shopping</h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-5">Trusted by Millions</h3>
        <Link
          to="/products"
          className="mt-2 sm:mt-4 inline-block bg-pink-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded hover:bg-pink-700 text-sm sm:text-base"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;