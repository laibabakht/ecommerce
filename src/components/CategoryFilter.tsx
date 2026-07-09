import React from 'react';
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}
export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-hide">
      <div className="flex space-x-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {categories.map((category) =>
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category ? 'bg-rose-600 text-white shadow-md shadow-rose-200' : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50 hover:border-rose-300'}`}>
          
            {category}
          </button>
        )}
      </div>
    </div>);

}