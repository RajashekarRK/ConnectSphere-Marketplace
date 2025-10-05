

import React from 'react';
// FIX: Corrected import path and added type.
import { CrossPostSuggestion } from '../../types.ts';

// FIX: Added props to component.
interface CrossPostingPageProps {
    suggestions: CrossPostSuggestion[];
}

const CrossPostingPage: React.FC<CrossPostingPageProps> = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Cross-Posting
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for a feature that would allow sellers to cross-post their listings to other marketplaces.</p>
        <p>Stay tuned for updates! We have {suggestions.length} suggestions for you.</p>
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

export default CrossPostingPage;
