import React from 'react';

const HelpTopic: React.FC<{ question: string, children: React.ReactNode }> = ({ question, children }) => (
    <details className="p-4 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
        <summary className="font-semibold text-slate-800">{question}</summary>
        <div className="mt-2 text-slate-600 leading-relaxed">
            {children}
        </div>
    </details>
);

const HelpCenterPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Help Center
      </h2>
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed mb-6">Welcome to the ConnectSphere Help Center. We're here to assist you with any questions or issues you may have. Browse our frequently asked questions below or contact our support team for personalized help.</p>

        <HelpTopic question="How do I create a listing with the AI generator?">
            <p>It's easy! Navigate to the "Sell" page, upload an image of your item, and add any optional notes. Click the "Generate with AI" button, and our SmartList engine will create a title, description, category, tags, and suggested price for you. You can then review and edit the details before posting.</p>
        </HelpTopic>

        <HelpTopic question="What are the seller fees?">
            <p>ConnectSphere charges a flat 5% platform fee on the final sale price of an item. This fee helps us operate the platform, develop new features, and provide customer support. Payment processing fees from providers like Stripe or PayPal are separate and may also apply.</p>
        </HelpTopic>

        <HelpTopic question="How does the escrow system work?">
            <p>To protect both buyers and sellers, we use an automated escrow system. When a buyer purchases an item, their payment is held securely by ConnectSphere. We release the funds to the seller only after the buyer confirms they have received the item as described. This ensures buyers get what they paid for and sellers are protected from fraudulent chargebacks.</p>
        </HelpTopic>

        <HelpTopic question="What is the dispute resolution process?">
            <p>If an item is not as described or doesn't arrive, the buyer can open a dispute. Our resolution team will review the case, examine evidence from both parties, and make a fair decision. This may result in a full refund, a partial refund, or the release of funds to the seller, depending on the circumstances.</p>
        </HelpTopic>
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

export default HelpCenterPage;
