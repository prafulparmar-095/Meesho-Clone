import React from 'react';

function ProductCard({ product, onBuy }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image || 'https://via.placeholder.com/200?text=No+Image'}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 truncate mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">Category: {product.subcategory}</p>
        <div className="flex items-baseline justify-between">
          <p className="text-xl font-bold text-pink-600">₹{product.price}</p>
          <button
            onClick={() => onBuy(product)}
            className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full hover:bg-pink-600 transition-colors duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;