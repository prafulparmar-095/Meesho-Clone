import React from 'react';
import { FaUndo, FaMoneyBillWave, FaTags } from 'react-icons/fa';

const InfoBanner = () => {
  return (
    <div className="mainContainer p-4 flex justify-center items-center bg-pink-50">
        <div className="flex w-full justify-center items-center bg-white border border-pink-200 rounded-xl p-4 mx-4 gap-6">
      <div className="flex items-center gap-2 text-black font-medium">
        <FaUndo className="text-pink-600" />
        <span>7 Days Easy Return</span>
      </div>
      <div className="w-px h-6 bg-pink-200" />
      <div className="flex items-center gap-2 text-black font-medium">
        <FaMoneyBillWave className="text-pink-600" />
        <span>Cash on Delivery</span>
      </div>
      <div className="w-px h-6 bg-pink-200" />
      <div className="flex items-center gap-2 text-black font-medium">
        <FaTags className="text-pink-600" />
        <span>Lowest Prices</span>
      </div>
    </div>
    </div>
  );
};

export default InfoBanner;
