import React from 'react';
import { User } from '../../../types.ts';

interface AccountHealthWidgetProps {
    currentUser: User;
}

const AccountHealthWidget: React.FC<AccountHealthWidgetProps> = ({ currentUser }) => {
    const { score, status } = currentUser.accountHealth;
    const color = score > 80 ? 'text-green-500' : score > 50 ? 'text-yellow-500' : 'text-red-500';
    
    return (
        <div className="bg-white rounded-xl shadow-lg p-4">
            <h4 className="font-semibold text-sm text-slate-800 mb-3">Account Health</h4>
            <div className="text-center">
                <p className={`text-3xl font-bold ${color}`}>{score}%</p>
                <p className={`text-sm font-semibold ${color}`}>{status}</p>
            </div>
        </div>
    );
};

export default AccountHealthWidget;