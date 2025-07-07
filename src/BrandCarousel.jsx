// BrandCarousel.jsx
import React from 'react';

const brands = [
  {
    name: 'Himalaya',
    logo: 'https://images.meesho.com/images/marketing/1743159415385.webp', 
  },
  {
    name: 'Xiaomi', 
    logo: 'https://images.meesho.com/images/marketing/1744636558884.webp', 
  },
  {
    name: 'Bata',
    logo: 'https://images.meesho.com/images/marketing/1744636599446.webp', 
  },
  {
    name: 'WOW Skin Science',
    logo: 'https://images.meesho.com/images/marketing/1743159302944.webp', 
  },
  {
    name: 'Mamaearth',
    logo: 'https://images.meesho.com/images/marketing/1743159322237.webp', 
  },
  {
    name: 'Wild Stone',
    logo: 'https://images.meesho.com/images/marketing/1743159363205.webp', 
  },
  {
    name: 'Plum', 
    logo: 'https://images.meesho.com/images/marketing/1743159377598.webp',
  },
  {
    name: 'Nivea', 
    logo: 'https://images.meesho.com/images/marketing/1743159393231.webp',
  },
];

const BrandCarousel = () => {
  return (
    <section className="py-8 bg-purple-50"> {/* Light purple background as seen in video */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Top Brands
        </h2>

        {/* Brands Scroller */}
        <div className="relative w-full overflow-hidden group"> {/* Added relative, w-full and group */}
          <div className="flex flex-nowrap space-x-4 py-4 animate-scroll-rtl group-hover:pause"> {/* Added animate-scroll-rtl and flex-nowrap */}
            {/* Duplicate the brands array to create a seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index} // Using index might cause issues if brands are modified, consider a unique ID if available
                className="flex-none w-48 h-28 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;