// src/components/CategoryBanner.jsx
import React from 'react';

const categories = [
  {
    name: 'Ethnic Wear',
    image: 'https://images.meesho.com/images/marketing/1744634654837.webp',
  },
  {
    name: 'Western Dresses',
    image: 'https://images.meesho.com/images/marketing/1744634725496.webp',
  },
  {
    name: 'Menswear',
    image: 'https://images.meesho.com/images/marketing/1744634780426.webp',
  },
  {
    name: 'Footwear',
    image: 'https://images.meesho.com/images/marketing/1744634814643.webp',
  },
  {
    name: 'Home Decor',
    image: 'https://images.meesho.com/images/marketing/1744634835018.webp',
  },
  {
    name: 'Beauty',
    image: 'https://images.meesho.com/images/marketing/1744634871107.webp',
  },
  {
    name: 'Accessories',
    image: 'https://images.meesho.com/images/marketing/1744634909968.webp',
  },
  {
    name:'Grocery',
    image: 'https://images.meesho.com/images/marketing/1744634937295.webp'
  },
];

const CategoryBanner = () => {
  return (
    <div className="bg-pink-50 py-6"> {/* The light pink background */}
      {/* Horizontal scrollable container */}
      <div className="max-w-full mx-auto px-4 flex flex-nowrap overflow-x-auto justify-center items-center space-x-6 pb-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex-none flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
