
import React from 'react';
// FIX: Corrected import path.
import { User } from '../../types.ts';

interface ProfileHeaderProps {
  currentUser: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ currentUser }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-4">
        <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{currentUser.name}</h2>
          <p className="text-slate-500">{currentUser.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
