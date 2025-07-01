import React from 'react';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-3 bg-white shadow-md">
        <div className="text-2xl font-bold text-pink-600">Meesho</div>

        <div className="flex-grow max-w-2xl mx-8">
          <input
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            className="w-full px-5 py-2 border border-gray-300 rounded-sm outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-700 hover:text-pink-600">Download App</a>
          <a href="#" className="text-gray-700 hover:text-pink-600">Become a Supplier</a>
          <div className="flex flex-col items-center cursor-pointer hover:text-pink-600">
            <FaUserAlt className="text-xl" />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-pink-600">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-100 px-10 py-4 overflow-x-auto text-center">
        <ul className="flex list-none m-0 p-0 gap-5 whitespace-nowrap justify-center">
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Women Ethnic</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Women Western</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Men</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Kids</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Home & Kitchen</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Beauty & Health</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Jewellery</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Bags & Footwear</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Electronics</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Sports & Fitness</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Car & Motorbike</li>
          <li className="cursor-pointer text-sm text-gray-700 hover:text-pink-600">Office</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;