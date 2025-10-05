// FIX: Implemented the CategoryCard component.
import React from 'react';
// FIX: Added .ts extension to types import to resolve module loading error.
import { Category } from '../types.ts';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 cursor-pointer hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
    >
      <div className="text-blue-500">{category.icon}</div>
      <p className="font-semibold text-sm text-gray-700 dark:text-gray-200">{category.name}</p>
    </div>
  );
};

export default CategoryCard;