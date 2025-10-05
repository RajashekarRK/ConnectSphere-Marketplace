// FIX: Implemented the ListingDetailPage component.
import React from 'react';
// FIX: Added 'seller' to props to correctly display seller information and 'onAddToCart' to handle cart functionality.
// FIX: Added .ts and .tsx extensions to imports to resolve module loading errors.
import { ListingDetails, User, Page, Review } from '../../types.ts';
import { HeartIcon, StarIcon, CheckBadgeIcon, ShoppingCartIcon } from '../icons.tsx';

interface ListingDetailPageProps {
  listing: ListingDetails;
  currentUser: User | null;
  onNavigate: (page: Page, data?: any) => void;
  onToggleFavorite: (listingId: string) => void;
  seller: User;
  onAddToCart: (listing: ListingDetails) => void;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex items-center mb-2">
            <img src={review.authorAvatar} alt={review.author} className="w-10 h-10 rounded-full mr-3"/>
            <div>
                <p className="font-semibold text-gray-800 dark:text-white">{review.author}</p>
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                    ))}
                </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{review.date}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{review.text}</p>
    </div>
);


const ListingDetailPage: React.FC<ListingDetailPageProps> = ({ listing, seller, currentUser, onNavigate, onToggleFavorite, onAddToCart }) => {
    const isFavorited = currentUser?.favoriteIds.includes(listing.id);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Gallery */}
                <div className="p-4">
                    <img src={listing.imageUrls[0]} alt={listing.title} className="w-full h-auto object-cover rounded-lg"/>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{listing.title}</h1>
                    <div className="flex items-center my-2">
                        <span className="text-gray-600 dark:text-gray-300 cursor-pointer hover:underline" onClick={() => alert('Navigate to seller profile')}>
                            {seller.name}
                        </span>
                        <CheckBadgeIcon className="w-5 h-5 text-blue-500 ml-2" />
                    </div>
                    <div className="flex items-baseline space-x-2 my-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${listing.price.toFixed(2)}</span>
                        {listing.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">${listing.originalPrice.toFixed(2)}</span>
                        )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 my-4 flex-grow">{listing.description}</p>
                    
                    <div className="flex space-x-2 mb-4">
                        {listing.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 rounded-full">{tag}</span>
                        ))}
                    </div>

                    <div className="mt-auto flex space-x-4">
                        <button onClick={() => onAddToCart(listing)} className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                            <ShoppingCartIcon className="w-5 h-5" />
                            <span>Add to Cart</span>
                        </button>
                        <button onClick={() => onToggleFavorite(listing.id)} className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">
                            <HeartIcon className={`w-6 h-6 ${isFavorited ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            {listing.reviews.length > 0 && (
                 <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reviews ({listing.reviewCount})</h2>
                    <div className="space-y-6">
                        {listing.reviews.map(review => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                 </div>
            )}
        </div>
    );
};

export default ListingDetailPage;