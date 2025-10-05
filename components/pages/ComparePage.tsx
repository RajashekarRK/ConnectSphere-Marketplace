import React from 'react';
// FIX: Added imports and defined component props.
import { ListingDetails, Page } from '../../types.ts';

interface ComparePageProps {
  listings: ListingDetails[];
  onNavigate: (page: Page) => void;
}

const ComparePage: React.FC<ComparePageProps> = ({ listings, onNavigate }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-6xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Compare Items
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page will allow you to compare items side-by-side. This feature is under construction.</p>
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

export default ComparePage;