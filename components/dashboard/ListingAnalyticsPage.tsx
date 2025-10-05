
import React from 'react';
// FIX: Change type from ListingAnalytics to ListingDetails array.
import { ListingDetails } from '../../types.ts';

// FIX: Changed props to accept an array of ListingDetails.
interface ListingAnalyticsPageProps {
  analytics: ListingDetails[];
}

const ListingAnalyticsPage: React.FC<ListingAnalyticsPageProps> = ({ analytics }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Listing Analytics
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This is where you'll see analytics for your listings. This feature is coming soon!</p>
        {/* FIX: Updated to show the count of listings. */}
        <p>You have {analytics.length} active listings.</p>
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

export default ListingAnalyticsPage;
