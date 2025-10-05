import React from 'react';

const SafetyFeature: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="mt-1 text-slate-600 leading-relaxed">{children}</p>
    </div>
);


const TrustAndSafetyPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Trust & Safety Center
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>Your security is our top priority. At ConnectSphere, we've implemented a suite of advanced features and policies to ensure that you can buy and sell with confidence. Learn more about how we protect our community.</p>

        <div className="space-y-4">
            <SafetyFeature title="Secure Escrow Protection">
                Every transaction is protected by our secure escrow system. Payment is held by ConnectSphere until the buyer confirms the item has been received as described, protecting both parties from fraud.
            </SafetyFeature>
             <SafetyFeature title="AI-Powered Fraud Detection">
                Our proprietary AI models work around the clock to monitor for suspicious activity, identify fraudulent listings, and protect your account from unauthorized access.
            </SafetyFeature>
             <SafetyFeature title="Verified Seller Program">
                Look for the verification badge on seller profiles. Verified sellers have completed an identity verification process, adding an extra layer of trust to your purchases.
            </SafetyFeature>
            <SafetyFeature title="Dispute Resolution">
                In the rare event that something goes wrong, our dedicated dispute resolution team is here to mediate and ensure a fair outcome for both the buyer and the seller.
            </SafetyFeature>
        </div>
        
        <p className="pt-4">If you have any security concerns or need to report an issue, please don't hesitate to <strong className="text-blue-600 cursor-pointer">contact our support team</strong>.</p>
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

export default TrustAndSafetyPage;
