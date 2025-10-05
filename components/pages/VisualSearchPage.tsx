import React, { useState, useRef } from 'react';
import { ListingDetails, Page, User } from '../../types.ts';
import { ArrowUpTrayIcon } from '../icons.tsx';
import ListingCard from '../ListingCard.tsx';

interface VisualSearchPageProps {
  listings: ListingDetails[];
  currentUser: User | null;
  onNavigate: (page: Page, data?: any) => void;
  onToggleFavorite: (listingId: string) => void;
}

const VisualSearchPage: React.FC<VisualSearchPageProps> = ({ listings, currentUser, onNavigate, onToggleFavorite }) => {
  const [searchImage, setSearchImage] = useState<string | null>(null);
  const [results, setResults] = useState<ListingDetails[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSearchImage(imageUrl);
        // Simulate finding similar items (e.g., from the same category as a random item)
        // In a real app, this would be an API call to a visual search engine.
        setResults(listings.filter(l => l.id !== 'listing-1').slice(0, 6)); // Show some mock similar items
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <h1 className="text-4xl font-bold text-white mb-8">Visual Search</h1>
      
      <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-2xl p-8 sm:p-16 text-center">
        <h2 className="text-2xl font-semibold text-white">Upload an image to find similar items</h2>
        <p className="text-gray-400 mt-2 max-w-md mx-auto">Use a photo or image to search for products that match the visual style.</p>
        <button
          onClick={triggerFileUpload}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center space-x-2 transition-colors"
        >
          <ArrowUpTrayIcon className="h-6 w-6" />
          <span>Upload Image</span>
        </button>
      </div>

      {(results.length > 0 || searchImage) && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">Refine Visual Search</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-2 px-4 rounded-full">Focus on specific part</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-2 px-4 rounded-full">Filter by color</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-2 px-4 rounded-full">Similar styles</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
             {searchImage && (
                <div className="col-span-2 sm:col-span-1 border-2 border-blue-500 rounded-2xl p-2">
                    <img src={searchImage} alt="Search query" className="rounded-xl w-full h-full object-cover"/>
                </div>
             )}
            {results.map(listing => (
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
      )}
    </div>
  );
};

export default VisualSearchPage;