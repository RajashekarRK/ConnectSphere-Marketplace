import React from 'react';
// FIX: Add .ts extension for types import
import { Theme } from '../../types.ts';

// FIX: Added props to the placeholder component.
// FIX: Updated onSave prop to accept a theme argument to resolve type error.
interface ProfileCustomizationPageProps {
  currentTheme: Theme;
  onSave: (theme: Theme) => void;
}

const ProfileCustomizationPage: React.FC<ProfileCustomizationPageProps> = ({ currentTheme, onSave }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Customize Your Profile
      </h2>
      <p className="text-slate-600">This page will allow you to customize your public profile page. Coming soon!</p>
      <p className="text-slate-500 mt-4">Current theme: {currentTheme.name}</p>
    </div>
  );
};

export default ProfileCustomizationPage;