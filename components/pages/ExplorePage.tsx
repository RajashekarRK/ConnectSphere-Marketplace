import React from 'react';
// FIX: Corrected import paths for `types.ts`, `ListingCard.tsx`, and `Carousel.tsx` by adding appropriate file extensions to resolve module loading errors.
import type { ListingDetails, User, Page } from '../../types.ts';
import ListingCard from '../ListingCard.tsx';
import Carousel from '../Carousel.tsx';

interface ExplorePageProps {
  listings: ListingDetails[];
  currentUser: User | null;
  onNavigate: (page: Page, id?: string) => void;
  onToggleFavorite: (listingId: string) => void;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ listings, currentUser, onNavigate, onToggleFavorite }) => {
  const featured = listings.slice(0, 5);
  const electronics = listings.filter(l => l.category === 'Electronics').slice(0, 5);
  const fashion = listings.filter(l => l.category === 'Fashion').slice(0, 5);
  const home = listings.filter(l => l.category === 'Home & Garden').slice(0, 5);

  const createListingCards = (items: ListingDetails[]) => {
    // This function wraps the grid of cards in a single element for the carousel
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-1">
        {items.map(listing => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onViewListing={(id) => onNavigate('listing', id)}
            currentUser={currentUser}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    );
  };
  
  // To make the carousel work with multiple items, we create slides. 
  // For simplicity here, each category gets one "slide" with multiple items.
  const featuredItems = featured.length > 0 ? [createListingCards(featured)] : [];
  const electronicsItems = electronics.length > 0 ? [createListingCards(electronics)] : [];
  const fashionItems = fashion.length > 0 ? [createListingCards(fashion)] : [];
  const homeItems = home.length > 0 ? [createListingCards(home)] : [];


  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-12">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-slate-900">Explore ConnectSphere</h1>
        <p className="mt-2 text-slate-600">Discover unique items from sellers around the globe.</p>
      </div>

      {featuredItems.length > 0 && <Carousel title="Featured Items" items={featuredItems} />}
      {electronicsItems.length > 0 && <Carousel title="Latest in Electronics" items={electronicsItems} />}
      {fashionItems.length > 0 && <Carousel title="Top Fashion Finds" items={fashionItems} />}
      {homeItems.length > 0 && <Carousel title="Home & Garden Essentials" items={homeItems} />}

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

export default ExplorePage;