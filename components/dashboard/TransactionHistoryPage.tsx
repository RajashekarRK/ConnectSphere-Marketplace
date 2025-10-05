
import React from 'react';
// FIX: Corrected import path and type.
import { Transaction } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface TransactionHistoryPageProps {
  transactions: Transaction[];
}

const TransactionHistoryPage: React.FC<TransactionHistoryPageProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Transaction History
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This is where your transaction history would be displayed. You have {transactions.length} transactions.</p>
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

export default TransactionHistoryPage;
