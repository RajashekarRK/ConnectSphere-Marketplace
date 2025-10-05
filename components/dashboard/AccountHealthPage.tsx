
import React from 'react';
// FIX: Corrected import path.
import { User } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface AccountHealthPageProps {
  user: User;
}

const AccountHealthPage: React.FC<AccountHealthPageProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Account Health
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        {/* FIX: Correctly accessed the 'score' property on the accountHealth object. */}
        <p>This is where your account health details would be displayed. Current health: {user.accountHealth.score}%</p>
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

export default AccountHealthPage;
