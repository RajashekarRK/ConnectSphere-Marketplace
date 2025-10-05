
import React from 'react';
// FIX: Corrected import path.
import { ListingDetails } from '../../types.ts';
import { PencilIcon, TrashIcon } from '../icons.tsx';

interface ProfileContentProps {
    userListings: ListingDetails[];
    onEditListing: (listing: ListingDetails) => void;
    onDeleteListing: (listingId: string) => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ userListings, onEditListing, onDeleteListing }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-slate-800">My Listings</h3>
      {userListings.length > 0 ? (
        <div className="space-y-4">
            {userListings.map(listing => (
                <div key={listing.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-4">
                        <img src={listing.imageUrls[0]} alt={listing.title} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                            <p className="font-semibold">{listing.title}</p>
                            <p className="text-sm text-slate-500">${listing.price}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => onEditListing(listing)} className="p-2 text-slate-500 hover:text-blue-600"><PencilIcon className="h-5 w-5"/></button>
                        <button onClick={() => onDeleteListing(listing.id)} className="p-2 text-slate-500 hover:text-red-600"><TrashIcon className="h-5 w-5"/></button>
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <p className="text-slate-500">You haven't listed any items yet.</p>
      )}
    </div>
  );
};

export default ProfileContent;
