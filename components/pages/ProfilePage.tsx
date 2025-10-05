
import React from 'react';
// FIX: Corrected import path.
import { User, Page, ListingDetails } from '../../types.ts';
// FIX: Added imports for newly created sub-components.
import ProfileSidebar from '../profile/ProfileSidebar.tsx';
import ProfileHeader from '../profile/ProfileHeader.tsx';
import ProfileContent from '../profile/ProfileContent.tsx';
import ProfileRightSidebar from '../profile/ProfileRightSidebar.tsx';

// FIX: Added missing props to handle user's listings and actions.
interface ProfilePageProps {
  currentUser: User;
  onNavigate: (page: Page, data?: any) => void;
  userListings: ListingDetails[];
  onEditListing: (listing: ListingDetails) => void;
  onDeleteListing: (listingId: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ currentUser, onNavigate, userListings, onEditListing, onDeleteListing }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <ProfileHeader currentUser={currentUser} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div className="md:col-span-1">
          <ProfileSidebar onNavigate={onNavigate} />
        </div>
        <div className="md:col-span-2">
          {/* FIX: Passed listing-related props to ProfileContent. */}
          <ProfileContent 
            userListings={userListings} 
            onEditListing={onEditListing} 
            onDeleteListing={onDeleteListing} 
          />
        </div>
        <div className="md:col-span-1">
          <ProfileRightSidebar currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
