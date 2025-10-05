import React from 'react';
// FIX: Add .ts extension for types import
import { User } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface ConnectionsPageProps {
  currentUser: User;
  users: User[];
  onFollow: (userId: string) => void;
}

const ConnectionsPage: React.FC<ConnectionsPageProps> = ({ currentUser, users, onFollow }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Social Connections
      </h2>
      <div className="space-y-6">
        <p className="text-slate-600">Connect your social accounts to build trust and make logging in easier. We will never post without your permission.</p>
        <div className="space-y-4">
            <button className="w-full flex items-center justify-center p-3 rounded-lg border font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Connect Facebook
            </button>
             <button className="w-full flex items-center justify-center p-3 rounded-lg border font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Connect Google
            </button>
             <button className="w-full flex items-center justify-center p-3 rounded-lg border font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                Connect Twitter
            </button>
        </div>
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

export default ConnectionsPage;