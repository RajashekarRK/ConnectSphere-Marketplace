
import React from 'react';
// FIX: Corrected import path.
import { Page } from '../../types.ts';

interface ProfileSidebarProps {
  onNavigate: (page: Page) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 space-y-2">
      <h3 className="font-bold px-2">Navigation</h3>
      <button onClick={() => onNavigate('profile')} className="w-full text-left p-2 rounded hover:bg-slate-100">Profile</button>
      <button onClick={() => onNavigate('settings')} className="w-full text-left p-2 rounded hover:bg-slate-100">Settings</button>
      <button onClick={() => onNavigate('dashboard/orders')} className="w-full text-left p-2 rounded hover:bg-slate-100">My Orders</button>
    </div>
  );
};

export default ProfileSidebar;
