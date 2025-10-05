import React from 'react';
// FIX: Add .ts extension for types import
import { FamilyMember } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface FamilyAccountPageProps {
  familyAccount: { members: FamilyMember[] };
  onInvite: () => void;
}

const FamilyAccountPage: React.FC<FamilyAccountPageProps> = ({ familyAccount, onInvite }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Family Accounts
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for a future feature where you can manage family accounts, shared payment methods, and parental controls.</p>
        <p>You have {familyAccount.members.length} family members.</p>
        <button onClick={onInvite} className="bg-blue-500 text-white px-4 py-2 rounded">Invite Member</button>
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

export default FamilyAccountPage;