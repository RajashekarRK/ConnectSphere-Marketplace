import React from 'react';

const StatsWidget: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4">
            <h4 className="font-semibold text-sm text-slate-800 mb-3">Your Stats</h4>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Listings Sold</span>
                    <span className="font-semibold text-slate-800">5</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Listings Purchased</span>
                    <span className="font-semibold text-slate-800">12</span>
                </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Seller Rating</span>
                    <span className="font-semibold text-slate-800">4.9/5.0</span>
                </div>
            </div>
        </div>
    );
};

export default StatsWidget;
