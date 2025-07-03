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
    name: 'Accessorie',
    image: 'https://images.meesho.com/images/marketing/1744634909968.webp',
  },
];

const CategoryBanner = () => {
  return (
    <div className="bg-pink-50 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <div className="w-28 h-28 bg-pink-100 rounded-full flex items-center justify-center overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={cat.image}
                alt={cat.name}
                className="object-cover h-full w-full"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
