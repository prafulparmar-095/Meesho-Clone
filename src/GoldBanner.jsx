import React from 'react';

const GoldBanner = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.meesho.com/images/marketing/1744698265981.webp')`,
      }}
    >
      <div className=" w-full">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <div className="text-white w-full md:w-1/2 flex flex-col items-start justify-center space-y-4">
            {/* Gold Logo and Title */}
            

           

            <button className="mt-3 border border-yellow-300 text-yellow-300 px-5 py-2 rounded-md hover:bg-yellow-300 hover:text-[#3d261b] transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Right Section - Categories */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full md:w-1/2">
            {/* Lehengas */}
            <div className="flex flex-col items-center">
              <div className="w-30 h-30  overflow-hidden  relative group">
                <img
                  src="https://images.meesho.com/images/marketing/1744722796811.webp"
                  alt="Lehengas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-full"></div>
              </div>
              <p className="text-white mt-2 font-medium">Lehengas</p>
            </div>

            {/* Menwear */}
            <div className="flex flex-col items-center">
              <div className="w-30 h-30 overflow-hidden relative group">
                <img
                  src="https://images.meesho.com/images/marketing/1744635113661.webp"
                  alt="Menwear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-full"></div>
              </div>
              <p className="text-white mt-2 font-medium">Menwear</p>
            </div>

            {/* Sarees */}
            <div className="flex flex-col items-center">
              <div className="w-30 h-30  overflow-hidden relative group">
                <img
                  src="https://images.meesho.com/images/marketing/1744635139351.webp"
                  alt="Sarees"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-full"></div>
              </div>
              <p className="text-white mt-2 font-medium">Sarees</p>
            </div>

            {/* Jewellery */}
            <div className="flex flex-col items-center">
              <div className="w-30 h-30 overflow-hidden relative group">
                <img
                  src="https://images.meesho.com/images/marketing/1744635189897.webp"
                  alt="Jewellery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-full"></div>
              </div>
              <p className="text-white mt-2 font-medium">Jewellery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBanner;
