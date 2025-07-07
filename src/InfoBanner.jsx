import React from 'react';
import { FaUndo, FaMoneyBillWave, FaTags } from 'react-icons/fa';

const InfoBanner = () => {
  return (
    <div className="mainContainer p-2 sm:p-4 flex justify-center items-center bg-pink-50">
        <div className="flex flex-col sm:flex-row w-full justify-center items-center bg-white border border-pink-200 rounded-xl p-3 sm:p-4 mx-2 sm:mx-4 gap-3 sm:gap-6 text-sm sm:text-base"> {/* Added flex-col and responsive gap/padding */}
          <div className="flex items-center gap-1 sm:gap-2 text-black font-medium">
            <FaUndo className="text-pink-600 text-md sm:text-xl" />
            <span>7 Days Easy Return</span>
          </div>
          <div className="w-px h-4 sm:h-6 bg-pink-200 hidden sm:block" /> {/* Hide divider on mobile */}
          <div className="flex items-center gap-1 sm:gap-2 text-black font-medium">
            <FaMoneyBillWave className="text-pink-600 text-md sm:text-xl" />
            <span>Cash on Delivery</span>
          </div>
          <div className="w-px h-4 sm:h-6 bg-pink-200 hidden sm:block" /> {/* Hide divider on mobile */}
          <div className="flex items-center gap-1 sm:gap-2 text-black font-medium">
            <FaTags className="text-pink-600 text-md sm:text-xl" />
            <span>Lowest Prices</span>
          </div>
        </div>
    </div>
  );
};

export default InfoBanner;