// src/AllProducts.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import productsData from './ProductsData'; // Import centralized product data

function AllProducts() {
  const navigate = useNavigate();

  // State for filters and sorting
  const [appliedFilters, setAppliedFilters] = useState({
    sortOption: 'Relevance',
    selectedCategories: [], // Renamed from subcategories for clarity in filter section
    selectedColors: [],
    priceRange: [0, 5000], // Example default price range
    categorySearchTerm: '', // For searching within categories in the filter sidebar
  });

  // Handle filter changes from FilterSection
  const handleFilterChange = (newFilters) => {
    setAppliedFilters(newFilters);
  };

  // Handle buy button click
  const handleBuy = (product) => {
    navigate('/buy', { state: product });
  };

  // Filter and sort products based on applied filters
  const getFilteredAndSortedProducts = () => {
    let currentProducts = [...productsData]; // Start with a fresh copy of all products

    // 1. Filter by Category (subcategory)
    if (appliedFilters.selectedCategories.length > 0) {
      currentProducts = currentProducts.filter(product =>
        appliedFilters.selectedCategories.includes(product.subcategory)
      );
    }

    // 2. Filter by Color (Add a ColorFilter component and state if needed)
    // For now, let's assume we have a selectedColors array in appliedFilters
    if (appliedFilters.selectedColors.length > 0) {
      currentProducts = currentProducts.filter(product =>
        appliedFilters.selectedColors.some(color => product.color.toLowerCase().includes(color.toLowerCase()))
      );
    }

    // 3. Filter by Price Range
    currentProducts = currentProducts.filter(product =>
      product.price >= appliedFilters.priceRange[0] && product.price <= appliedFilters.priceRange[1]
    );

    // 4. Sort
    currentProducts.sort((a, b) => {
      switch (appliedFilters.sortOption) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Newest First':
          // Assuming higher ID means newer for dummy data, for real data use a timestamp
          return b.id - a.id;
        case 'Relevance':
        default:
          return 0; // No specific sorting for 'Relevance' without a complex algorithm
      }
    });

    return currentProducts;
  };

  const displayedProducts = getFilteredAndSortedProducts();

  // Extract unique subcategories for the CategoryFilter component
  const uniqueSubcategories = [...new Set(productsData.map(product => product.subcategory))];
  
  // Extract unique colors for a potential ColorFilter component (currently not implemented in FilterSection)
  const uniqueColors = [...new Set(productsData.map(product => product.color))];


  return (
    <div className="flex min-h-screen">
      {/* Filter Sidebar */}
      <FilterSection
        initialFilters={appliedFilters}
        onFilterChange={handleFilterChange}
        totalProductCount={displayedProducts.length} // Display count of filtered products
        allCategories={uniqueSubcategories} // Pass unique subcategories for category filter
        allColors={uniqueColors} // Pass unique colors for a potential color filter
      />

      {/* Main Product Display Area */}
      <div className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-pink-600">
          Explore All Products ({displayedProducts.length})
        </h2>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onBuy={handleBuy} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg py-10">
            No products found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;