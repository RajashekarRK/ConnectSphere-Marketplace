import React from 'react';
import { ListingDetails, User, Page } from '../../types.ts';
import ListingCard from '../ListingCard.tsx';

interface SearchResultsPageProps {
  listings: ListingDetails[];
  query: string;
  currentUser: User | null;
  onNavigate: (page: Page, id?: string) => void;
  onToggleFavorite: (listingId: string) => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ listings, query, currentUser, onNavigate, onToggleFavorite }) => {
  // Simulate filtering based on query
  const filteredListings = listings.filter(listing => 
    listing.title.toLowerCase().includes(query.toLowerCase()) || 
    listing.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 6); // Limiting to 6 for the design

  // Mock data for new UI elements
  const suggestedTags = ['Armchairs', 'Comfort', 'Upholstered'];
  const confidence = 92;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4">
            {/* FIX: Changed text color to be more visible */}
            <p className="text-gray-500">Suggested:</p>
            <div className="flex gap-2">
                {suggestedTags.map(tag => (
                    <button key={tag} className="px-4 py-1.5 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 text-sm">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Search Results</h1>
        <p className="text-gray-400 mb-6">Showing results for: "{query}"</p>

        <div className="bg-blue-900/30 border border-blue-700 text-blue-200 rounded-lg p-4 mb-8">
          <p><span className="font-bold">Semantic Search Confidence: {confidence}%</span> - Our AI believes this is a very strong match for your query.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredListings.length > 0 ? (
              filteredListings.map(listing => (
                  <ListingCard 
                      key={listing.id}
                      listing={listing}
                      currentUser={currentUser}
                      onViewListing={() => onNavigate('listing', listing.id)}
                      onToggleFavorite={onToggleFavorite}
                  />
              ))
          ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                  <p>No listings found matching your criteria.</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;