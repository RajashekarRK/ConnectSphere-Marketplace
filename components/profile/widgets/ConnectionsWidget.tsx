import React from 'react';

const ConnectionsWidget: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4">
            <h4 className="font-semibold text-sm text-slate-800 mb-3">Social Connections</h4>
            <div className="space-y-2">
                <button className="w-full text-left text-sm text-blue-600 font-medium hover:underline">Connect Facebook</button>
                 <button className="w-full text-left text-sm text-blue-600 font-medium hover:underline">Connect Google</button>
            </div>
        </div>
    );
};

export default ConnectionsWidget;
