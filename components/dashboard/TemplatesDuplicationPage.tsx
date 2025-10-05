import React from 'react';
// FIX: Add .ts extension for types import
// FIX: Added .ts extension to types import to resolve module loading error.
import { ListingDetails } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface TemplatesDuplicationPageProps {
  listings: ListingDetails[];
}

const TemplatesDuplicationPage: React.FC<TemplatesDuplicationPageProps> = ({ listings }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Listing Templates & Duplication
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for a feature that allows sellers to create templates for quick listing creation.</p>
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

export default TemplatesDuplicationPage;