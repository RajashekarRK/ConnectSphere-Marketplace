import React from 'react';

const VerificationWidget: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4">
            <h4 className="font-semibold text-sm text-slate-800 mb-3">Verifications</h4>
            <div className="space-y-2">
                <div className="flex items-center text-sm">
                    <span className="text-slate-600">Email Verified</span>
                </div>
                <div className="flex items-center text-sm">
                    <span className="text-slate-600">Phone Verified</span>
                </div>
                <button className="w-full text-left text-sm text-blue-600 font-medium hover:underline mt-2">
                    Verify Your Identity
                </button>
            </div>
        </div>
    );
};

export default VerificationWidget;
