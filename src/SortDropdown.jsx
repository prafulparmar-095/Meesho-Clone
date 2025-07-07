import React from 'react';

function SortDropdown({ selectedOption, onSelectOption }) {
  const options = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest First'];

  return (
    <div className="mb-6">
      <label htmlFor="sort-by" className="block text-sm font-medium text-gray-600 mb-2">Sort by : </label>
      <div className="relative">
        <select
          id="sort-by"
          className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-base sm:text-sm cursor-pointer"
          value={selectedOption}
          onChange={(e) => onSelectOption(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SortDropdown;