// FIX: Implemented the ListingCard component.
import React from 'react';
// FIX: Added .ts and .tsx extensions to imports to resolve module loading errors.
import { ListingDetails, User } from '../types.ts';
import { HeartIcon } from './icons.tsx';

interface ListingCardProps {
  listing: ListingDetails;
  currentUser: User | null;
  onViewListing: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, currentUser, onViewListing, onToggleFavorite }) => {
  const isFavorited = currentUser?.favoriteIds.includes(listing.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when favoriting
    onToggleFavorite(listing.id);
  };

  return (
    <div
      onClick={() => onViewListing(listing.id)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer group transition-transform transform hover:-translate-y-1"
    >
      <div className="relative">
        <img src={listing.imageUrls[0]} alt={listing.title} className="w-full h-48 object-cover" />
        {currentUser && (
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full text-white hover:text-red-500 transition-colors"
          >
            <HeartIcon className={`w-5 h-5 ${isFavorited ? 'text-red-500 fill-current' : ''}`} />
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 dark:text-white truncate">{listing.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{listing.sellerUsername}</p>
        <p className="mt-2 text-lg font-bold text-gray-900 dark:text-white">${listing.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ListingCard;