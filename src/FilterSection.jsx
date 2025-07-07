// src/components/FilterSection.jsx
import React, { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';
import CategoryFilter from './CategoryFilter';
import FilterItem from './FilterItem'; // Assuming you might use this for colors or sizes

function FilterSection({ initialFilters, onFilterChange, totalProductCount, allCategories, allColors }) {
  const [selectedSortOption, setSelectedSortOption] = useState(initialFilters.sortOption);
  const [categorySearchTerm, setCategorySearchTerm] = useState(initialFilters.categorySearchTerm);
  const [selectedCategories, setSelectedCategories] = useState(initialFilters.selectedCategories);
  const [selectedColors, setSelectedColors] = useState(initialFilters.selectedColors || []); // New state for colors
  const [priceRange, setPriceRange] = useState(initialFilters.priceRange || [0, 5000]); // New state for price range

  // Collapsible states for filter sections
  const [isPriceCollapsed, setIsPriceCollapsed] = useState(true);
  const [isColorCollapsed, setIsColorCollapsed] = useState(true);

  // Use useEffect to propagate changes up to the parent `AllProducts` component
  useEffect(() => {
    onFilterChange({
      sortOption: selectedSortOption,
      selectedCategories: selectedCategories,
      categorySearchTerm: categorySearchTerm,
      selectedColors: selectedColors,
      priceRange: priceRange,
    });
  }, [selectedSortOption, selectedCategories, categorySearchTerm, selectedColors, priceRange, onFilterChange]);

  const handleToggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  const handleToggleColor = (color) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter((col) => col !== color)
        : [...prevSelected, color]
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === 'minPrice') {
        newRange[0] = Number(value);
      } else if (name === 'maxPrice') {
        newRange[1] = Number(value);
      }
      return newRange;
    });
  };

  return (
    <div className="w-64 flex-shrink-0 bg-white p-4 border-r border-gray-200 shadow-md">
      {/* Sort By Section */}
      <SortDropdown
        selectedOption={selectedSortOption}
        onSelectOption={setSelectedSortOption}
      />

      <div className="mb-4 pt-4 border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">FILTERS</h2>
        <p className="text-sm text-gray-500">{totalProductCount} Products</p>
      </div>

      {/* Category Filter Section */}
      <CategoryFilter
        categories={allCategories} // Pass the unique subcategories here
        searchTerm={categorySearchTerm}
        onSearchChange={setCategorySearchTerm}
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
      />

      {/* Price Filter Section */}
      <div className="mb-6 p-4 border border-gray-200 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsPriceCollapsed(!isPriceCollapsed)}
        >
          <h3 className="font-semibold text-gray-800">Price</h3>
          <svg
            className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${
              isPriceCollapsed ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {!isPriceCollapsed && (
          <div className="mt-2">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                value={priceRange[0]}
                onChange={handlePriceChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md text-sm"
              />
              <span>-</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-1/2 p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            {/* You can add a slider here for better UX */}
          </div>
        )}
      </div>

      {/* Color Filter Section (Example - assuming you want to filter by color) */}
      <div className="mb-6 p-4 border border-gray-200 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsColorCollapsed(!isColorCollapsed)}
        >
          <h3 className="font-semibold text-gray-800">Color</h3>
          <svg
            className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${
              isColorCollapsed ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {!isColorCollapsed && (
          <div className="mt-2 max-h-60 overflow-y-auto custom-scrollbar">
            {allColors.length > 0 ? (
              allColors.map((color) => (
                <FilterItem
                  key={color}
                  label={color}
                  isChecked={selectedColors.includes(color)}
                  onToggle={handleToggleColor}
                />
              ))
            ) : (
              <p className="text-gray-500 text-sm">No colors available.</p>
            )}
          </div>
        )}
      </div>

      {/* You can add more filter types here (e.g., Sizes, Brands) */}
    </div>
  );
}

export default FilterSection;