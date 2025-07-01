import React from 'react';

const Banner = () => {
  return (
    <div
      className="h-[350px] flex items-center justify-end pr-16 text-white relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.meesho.com/images/marketing/1746425994914.webp')" }}
    >
      <div className="max-w-md text-right">
        <h2 className="text-4xl font-bold mb-2">Smart Shopping</h2>
        <h3 className="text-3xl mb-5">Trusted by Millions</h3>
        <button className="px-6 py-3 bg-white text-purple-700 font-bold border-none rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;