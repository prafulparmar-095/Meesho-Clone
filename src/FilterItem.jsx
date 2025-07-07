import React from 'react';

function FilterItem({ label, isChecked, onToggle }) {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        id={`filter-${label.replace(/\s+/g, '-')}`}
        checked={isChecked}
        onChange={() => onToggle(label)}
        className="form-checkbox h-4 w-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500 cursor-pointer"
      />
      <label htmlFor={`filter-${label.replace(/\s+/g, '-')}`} className="ml-2 text-gray-700 text-sm cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default FilterItem;