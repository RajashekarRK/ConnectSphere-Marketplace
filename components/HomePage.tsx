// FIX: Implemented the HomePage component.
import React from 'react';
// FIX: Added .ts extension to the import of types to resolve module loading error.
import { ListingDetails, Category, User, Page } from '../types.ts';
import ListingCard from './ListingCard.tsx';
import CategoryCard from './CategoryCard.tsx';

interface HomePageProps {
  listings: ListingDetails[];
  categories: Category[];
  currentUser: User | null;
  onNavigate: (page: Page, data?: any) => void;
  onToggleFavorite: (listingId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ listings, categories, currentUser, onNavigate, onToggleFavorite }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Welcome to ConnectSphere</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">The AI-powered global marketplace.</p>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} onClick={() => onNavigate('search', category.name)} />
          ))}
        </div>
      </div>

      {/* Featured Listings Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              currentUser={currentUser}
              onViewListing={(id) => onNavigate('listing', id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;