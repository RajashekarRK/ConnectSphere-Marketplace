import React from 'react';
// FIX: Add .ts extension for types import
import { User, Referral } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface ReferralPageProps {
  user: User;
  referrals: Referral[];
}

const ReferralPage: React.FC<ReferralPageProps> = ({ user, referrals }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Refer a Friend
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This is where the referral program information and tools would be. Your code: {user.referralCode}. You have {referrals.length} referrals.</p>
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

export default ReferralPage;