import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline'; 
const brandCategories = [
  {
    name: 'Personal Care',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqulPasMazDsshs8PoqZ_hDwP2ODwuwWMECc8pt5od79Ibtp1TrGYz2fQvYihq0yWoJNM&usqp=CAU', 
  },
  {
    name: 'Electronics',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTp-gGQb0S1asv454XjtS7hJ11RvqDB7CdwX1GFwh0MMCfwKfRG', 
  },
  {
    name: 'Makeup',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfXEKnjJ3M4LUgqqqOietQl2Y3aaQo4v-x0oHzbVeT4iJ6e_dZ', 
  },
  {
    name: 'Smart Phones',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0If_a9_D34fb0sTaj5rbehppfODVT2xfzrLE0xCyABylOPZ_O', 
  },
  {
    name: 'Men Perfume',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAnAhhfNf1kJ3ycTNdkjJnajtH6V9cQw2S5BEW15mFaaIqE8kt',
  },
  {
    name: 'Bags',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTh_nMHlfgsk9IFV8TrYSLJYisEvro22jUveji5DOc7f1nviY6l',
  },
  {
    name: 'Footwear',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtY2RboQT3Giy2i8WIX2sovOZYrSbvEvjEW2diZm6wcUY3yxX', 
  },
  {
    name: 'Books',
    image: 'https://images.meesho.com/images/products/556375870/4h8wy_512.jpg', 
  },
];

const OriginalBrands = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Top Original Brands
          </h2>
          <button className="flex items-center text-pink-600 font-semibold hover:text-pink-700">
            VIEW ALL <ChevronRightIcon className="h-5 w-5 ml-1" />
          </button>
        </div>

        {/* Brand Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 sm:gap-6">
          {brandCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 group"
            >
              {/* Image Container */}
              <div className="w-full h-32 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden mb-2"> {/* Added overflow-hidden */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {/* Category Name Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-md transition duration-200 text-sm">
                {category.name}
              </button>
            </div>
          ))}
        </div>
       
       
      </div>
    </section>
  );
};

export default OriginalBrands;