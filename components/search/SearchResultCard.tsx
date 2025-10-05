import React from 'react';
import { ListingDetails } from '../../types.ts';

interface SearchResultCardProps {
  listing: ListingDetails;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ listing }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex">
      <img src={listing.imageUrls[0]} alt={listing.title} className="w-24 h-24 object-cover rounded-md" />
      <div className="ml-4">
        <h4 className="font-bold">{listing.title}</h4>
        <p>${listing.price}</p>
        <p className="text-sm text-gray-500">{listing.sellerUsername}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;