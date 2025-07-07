import React from 'react';

const TrendzBanner = () => {
  return (
    <div
      className="w-full py-10 px-4 md:px-10 lg:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.meesho.com/images/marketing/1744698143534.webp')`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-white flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0 w-full md:w-1/3">
          
          <button className="bg-white text-[#5B0060] font-semibold text-lg px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300 mt-20 ">
            Shop Now
          </button>
        </div>

        {/* Right Section: Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-2/3">
          {/* 1. Summer Dresses */}
          <div className="flex flex-col items-center bg-white rounded-2xl px-2 py-3 shadow-md">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.meesho.com/images/marketing/1744635893307.webp"
                alt="Summer Dresses"
                className="w-32 h-40 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-3 bg-[#5B0060] text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#72007a] transition duration-300">
              Summer Dresses
            </button>
          </div>

          {/* 2. Baggy Jeans */}
          <div className="flex flex-col items-center bg-white rounded-2xl px-2 py-3 shadow-md">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.meesho.com/images/marketing/1744634780426.webp"
                alt="Baggy Jeans"
                className="w-32 h-40 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-3 bg-[#5B0060] text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#72007a] transition duration-300">
              Baggy Jeans
            </button>
          </div>

          {/* 3. Earrings */}
          <div className="flex flex-col items-center bg-white rounded-2xl px-2 py-3 shadow-md">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.meesho.com/images/marketing/1744635139351.webp"
                alt="Earrings"
                className="w-32 h-40 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-3 bg-[#5B0060] text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#72007a] transition duration-300">
              Earrings
            </button>
          </div>

          {/* 4. Chic Flats */}
          <div className="flex flex-col items-center bg-white rounded-2xl px-2 py-3 shadow-md">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.meesho.com/images/marketing/1744635189897.webp"
                alt="Chic Flats"
                className="w-32 h-40 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-3 bg-[#5B0060] text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-[#72007a] transition duration-300">
              Chic Flats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendzBanner;
