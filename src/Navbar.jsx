import React, { useState } from 'react';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const categoryData = {
  "Women Ethnic": {
    "Sarees": ["Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees"],
    "Kurtis": ["Anarkali", "Straight Kurtis", "Printed Kurtis", "Designer Kurtis"],
    "Dress Materials": ["Unstitched", "Semi-Stitched", "Stitched Sets"]
  },
  "Women Western": {
    "Tops": ["Crop Tops", "Blouses", "Tunics"],
    "Dresses": ["Maxi Dresses", "Mini Dresses", "Bodycon"],
    "Bottomwear": ["Jeans", "Trousers", "Shorts"]
  },
  "Men": {
    "Top Wear": ["T-Shirts", "Shirts", "Jackets"],
    "Bottom Wear": ["Jeans", "Trousers", "Track Pants"],
    "Ethnic": ["Kurta Pyjama", "Sherwani", "Nehru Jackets"]
  },
  "Kids": {
    "Boys Clothing": ["Shirts", "T-Shirts", "Pants"],
    "Girls Clothing": ["Dresses", "Frocks", "Leggings"]
  },
  "Home & Kitchen": {
    "Home Decor": ["Wall Stickers", "Clocks", "Lamps"],
    "Kitchen": ["Cookware", "Storage", "Dinner Sets"],
    "Furnishing": ["Bedsheets", "Curtains", "Pillows"]
  },
  "Beauty & Health": {
    "Makeup": ["Lipsticks", "Kajal", "Foundations"],
    "Health": ["Supplements", "Fitness Equipment"]
  },
  "Jewellery": {
    "Necklaces": ["Gold Plated", "Oxidised", "Temple Jewellery"],
    "Earrings": ["Studs", "Jhumkas", "Hoops"]
  },
  "Bags & Footwear": {
    "Bags": ["Handbags", "Backpacks", "Clutches"],
    "Footwear": ["Flats", "Heels", "Sandals"]
  },
  "Electronics": {
    "Mobiles": ["Smartphones", "Feature Phones"],
    "Accessories": ["Headphones", "Chargers", "Cables"]
  },
  "Sports & Fitness": {
    "Fitness": ["Yoga", "Hand Grip Strengthener", "Tummy Trimmers", "Skipping Ropes", "Sweat Belts"],
    "Sports": ["Badminton", "Skating", "Football", "Cricket"]
  },
  "Car & Motorbike": {
    "Car Accessories": ["Car Covers", "Interior Accessories", "Car Mobile Holders", "Car Repair Assistance"],
    "Motorbike Accessories": ["Helmets", "Bike Accessories", "Bike LED Lights", "Safety Gear & Clothing"]
  },
  "Office": {
    "Office Supplies & Stationery": ["Diaries & Notebooks", "Adhesive & Notebooks", "Files & Desk Organizers", "Pen & Pencils", "Paintings & Photoframes"]
  }
};

const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-10 py-3 bg-white shadow-md">
    
        <Link to="/" className="text-2xl font-bold text-pink-600">Meesho</Link>


      



        <div className="flex-grow max-w-2xl mx-8">
          <input
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            className="w-full px-5 py-2 border border-gray-300 rounded-sm outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-700 hover:text-pink-600">Download App</a>
          <Link to="/register" className="text-gray-700 hover:text-pink-600">Become a Supplier</Link>
          
          
<Link to="/login" className="flex flex-col items-center cursor-pointer hover:text-pink-600">
  <FaUserAlt className="text-xl" />
  <span>Profile</span>
</Link>

          <div className="flex flex-col items-center cursor-pointer hover:text-pink-600">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>
        </div>
      </nav>

      {/* Category Bar */}
      <div className="relative bg-gray-100 px-10 py-4" onMouseLeave={() => setHoveredCategory(null)}>
        <ul className="flex gap-10 font-bold justify-center">
          {Object.keys(categoryData).map((category) => (
            <li
              key={category}
              onMouseEnter={() => setHoveredCategory(category)}
              className="relative text-sm text-gray-700 hover:text-pink-600 cursor-pointer"
            >
              {category}
              {hoveredCategory === category && (
                <div className="absolute left-0 w-full">
                  <Dropdown subcategories={categoryData[category]} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
