// src/components/CategoryFilter.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import FilterItem from './FilterItem';

function CategoryFilter({ categories, searchTerm, onSearchChange, selectedCategories, onToggleCategory }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md">
      <div
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3 className="font-semibold text-gray-800">Category</h3>
        <svg
          className={`h-5 w-5 text-gray-600 transform transition-transform duration-200 ${
            isCollapsed ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {!isCollapsed && (
        <>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <svg className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <FilterItem
                  key={category}
                  label={category}
                  isChecked={selectedCategories.includes(category)}
                  onToggle={onToggleCategory}
                />
              ))
            ) : (
              <p className="text-gray-500 text-sm">No categories found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Add PropTypes for prop validation
CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;