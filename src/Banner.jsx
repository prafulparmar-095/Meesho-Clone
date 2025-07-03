import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="h-[350px] flex items-center justify-end pr-16 text-white relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.meesho.com/images/marketing/1746425994914.webp')" }}
    >
      <div className="max-w-md text-right">
        <h2 className="text-4xl font-bold mb-2">Smart Shopping</h2>
        <h3 className="text-3xl mb-5">Trusted by Millions</h3>
<Link
  to="/products"
  className="mt-4 inline-block bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
>
  Shop Now
</Link>

      </div>
    </div>
  );
};

export default Banner;
