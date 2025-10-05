
import React from 'react';
// FIX: Added imports for types and components.
import { User, ListingDetails, Page } from '../../types.ts';
import ListingCard from '../ListingCard.tsx';

// FIX: Added props to component.
interface SellerProfilePageProps {
  seller: User;
  sellerListings: ListingDetails[];
  currentUser: User | null;
  onNavigate: (page: Page, data?: any) => void;
}

const SellerProfilePage: React.FC<SellerProfilePageProps> = ({ seller, sellerListings, currentUser, onNavigate }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <div className="text-center">
        <img src={seller.avatarUrl} alt={seller.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {seller.name}
        </h2>
        <p className="text-slate-600">{seller.bio}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Listings from {seller.name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sellerListings.map(listing => (
            <ListingCard 
                key={listing.id} 
                listing={listing} 
                currentUser={currentUser} 
                onViewListing={(id) => onNavigate('listing', id)}
                onToggleFavorite={() => {}} // Placeholder
            />
          ))}
        </div>
      </div>

       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SellerProfilePage;
