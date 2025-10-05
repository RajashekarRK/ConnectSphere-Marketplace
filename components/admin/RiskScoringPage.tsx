import React from 'react';
// FIX: Added RiskEntity type import
// FIX: Added .ts extension to types import to resolve module loading error.
import { RiskEntity } from '../../types.ts';

// FIX: Added props interface to accept risk entities data
interface RiskScoringPageProps {
  riskEntities: RiskEntity[];
}

const RiskScoringPage: React.FC<RiskScoringPageProps> = ({ riskEntities }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Admin: Risk Scoring
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for future content related to user and transaction risk scoring.</p>
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

export default RiskScoringPage;