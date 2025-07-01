import React from 'react';

const Dropdown = ({ subcategories }) => {
  return (
    <div className="absolute top-full left-0 mt-0 w-full min-w-[700px] bg-white shadow-lg p-4 z-10 text-left flex flex-wrap max-h-[400px] overflow-y-auto">
      {Object.entries(subcategories).map(([subCategoryTitle, items]) => (
        <div key={subCategoryTitle} className="w-1/3 p-2">
          <h4 className="font-bold text-pink-600 mb-2">{subCategoryTitle}</h4>
          <ul>
            {items.map((item) => (
              <li key={item} className="text-gray-700 hover:text-pink-600 cursor-pointer text-xs py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
