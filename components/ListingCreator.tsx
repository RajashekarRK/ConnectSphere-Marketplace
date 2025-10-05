
import React, { useState } from 'react';
// FIX: Corrected import paths for ImageUploader.tsx, geminiService.ts, and types.ts to resolve module loading errors.
import ImageUploader from './ImageUploader.tsx';
import { generateListingDetails } from '../services/geminiService.ts';
// FIX: Corrected import path for types.
import { ListingDetails, User } from '../types.ts';

interface ListingCreatorProps {
  currentUser: User;
  // FIX: Changed prop name from onCreateListing to onAddListing and updated its signature.
  onAddListing: (listing: Omit<ListingDetails, 'id'>) => void;
  onUpdateListing: (listing: ListingDetails) => void;
  listingToEdit?: ListingDetails;
}

// FIX: Changed prop name from onCreateListing to onAddListing.
const ListingCreator: React.FC<ListingCreatorProps> = ({ currentUser, onAddListing, onUpdateListing, listingToEdit }) => {
  const [image, setImage] = useState<{ mimeType: string; data: string } | null>(null);
  const [userNotes, setUserNotes] = useState('');
  const [details, setDetails] = useState<Partial<ListingDetails>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateDetails = async () => {
    if (!image) {
      setError('Please upload an image first.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const generated = await generateListingDetails(image, userNotes);
      setDetails(generated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.title || !details.price) {
        setError("Title and Price are required.");
        return;
    }
    // FIX: Changed to create a listing object without an id for creation.
    const newListing: Omit<ListingDetails, 'id'> = {
      title: details.title || '',
      description: details.description || '',
      price: details.price || 0,
      category: details.category || 'Other',
      tags: details.tags || [],
      imageUrls: image ? [`data:${image.mimeType};base64,${image.data}`] : [],
      sellerId: currentUser.id,
      sellerUsername: currentUser.name,
      quantity: 1,
      country: currentUser.country?.code ?? 'US',
      // FIX: Added missing properties to satisfy the ListingDetails type.
      reviews: [],
      rating: 0,
      reviewCount: 0,
    };
    onAddListing(newListing);
  };
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a New Listing</h2>
      <div className="space-y-6">
        <ImageUploader onImageUpload={setImage} />
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Your Notes (optional)</label>
          <textarea id="notes" value={userNotes} onChange={e => setUserNotes(e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., condition, brand, year..."></textarea>
        </div>
        <button type="button" onClick={handleGenerateDetails} disabled={isLoading || !image} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors font-semibold">
          {isLoading ? 'Generating...' : 'Generate with AI'}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        {Object.keys(details).length > 0 && (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t">
             <h3 className="text-lg font-semibold text-gray-800">Review and Post</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input type="text" value={details.title || ''} onChange={e => setDetails({...details, title: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={details.description || ''} onChange={e => setDetails({...details, description: e.target.value})} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
              <input type="number" value={details.price || ''} onChange={e => setDetails({...details, price: Number(e.target.value)})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input type="text" value={details.category || ''} onChange={e => setDetails({...details, category: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>
            <div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 font-semibold transition-colors">Create Listing</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ListingCreator;
