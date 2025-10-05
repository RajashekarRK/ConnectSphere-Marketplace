

import React from 'react';
// FIX: Corrected import path and added types.
import { AutomationRule, ImpactedListing } from '../../types.ts';

// FIX: Added props to component.
interface AutomatedLifecyclePageProps {
    rules: AutomationRule[];
    impacted: ImpactedListing[];
}

const AutomatedLifecyclePage: React.FC<AutomatedLifecyclePageProps> = ({ rules, impacted }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Automated Listing Lifecycle
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for a feature that would allow sellers to set up automated rules for their listings, such as automatic price drops or re-listing.</p>
        <p>You have {rules.length} active rules, impacting {impacted.length} listings.</p>
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

export default AutomatedLifecyclePage;
