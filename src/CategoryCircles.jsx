import React from 'react';

const categories = [
 
];

const CategoryCircles = () => {
  return (
    <section className="py-8 bg-categoryBgPink">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4 sm:gap-6 justify-items-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-categoryCircleBg flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-w-[80%] max-h-[80%] object-contain" // Ensures image scales within circle
                />
              </div>
              <p className="text-categoryText text-sm sm:text-base font-medium mt-2">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;