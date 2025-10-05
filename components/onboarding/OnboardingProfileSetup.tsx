

import React from 'react';

// FIX: Added props interface to accept onNext handler.
interface OnboardingProfileSetupProps {
  onNext: () => void;
}

const OnboardingProfileSetup: React.FC<OnboardingProfileSetupProps> = ({ onNext }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Onboarding: Profile Setup
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>This page is a placeholder for future content.</p>
        <button onClick={onNext} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Next</button>
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

export default OnboardingProfileSetup;
