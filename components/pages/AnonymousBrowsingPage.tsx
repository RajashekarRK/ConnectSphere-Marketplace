import React from 'react';
// FIX: Add .ts extension for types import
import { UserSettings } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface AnonymousBrowsingPageProps {
  settings: UserSettings;
  onSave: () => void;
}

const AnonymousBrowsingPage: React.FC<AnonymousBrowsingPageProps> = ({ settings, onSave }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Anonymous Browsing
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for an "Anonymous Browsing" or "Incognito Mode" feature.</p>
        <p>In a future version, this feature would allow users to browse listings without their activity being tied to their account, enhancing user privacy.</p>
        <p>Currently, anonymous browsing is {settings.isAnonymous ? 'enabled' : 'disabled'}.</p>
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

export default AnonymousBrowsingPage;