import React from 'react';
// FIX: Add .ts extension for types import
import { User, Page } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface SettingsPageProps {
  user: User;
  onSave: () => void;
  onNavigate: (page: Page) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ user, onSave }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-3">Account Settings</h2>
        <form className="space-y-4">
           <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                <input type="text" id="username" defaultValue={user.name} className="mt-1 block w-full sm:w-2/3 border-slate-300 rounded-md shadow-sm" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" id="email" defaultValue={user.email} className="mt-1 block w-full sm:w-2/3 border-slate-300 rounded-md shadow-sm" />
            </div>
            <div className="pt-2">
                 <button type="submit" onClick={(e) => { e.preventDefault(); onSave(); }} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">Save Changes</button>
            </div>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-6 border-b pb-3">Notifications</h2>
         <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium text-slate-800">Email Notifications</p>
                    <p className="text-sm text-slate-500">Get emails about new messages, offers, and account activity.</p>
                </div>
                <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
            </div>
             <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium text-slate-800">Push Notifications</p>
                    <p className="text-sm text-slate-500">Get push notifications on your mobile device.</p>
                </div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
      </div>
       <style>{`
        .switch { position: relative; display: inline-block; width: 40px; height: 24px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; }
        .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 4px; bottom: 4px; background-color: white; transition: .4s; }
        input:checked + .slider { background-color: #2563eb; }
        input:checked + .slider:before { transform: translateX(16px); }
        .slider.round { border-radius: 34px; }
        .slider.round:before { border-radius: 50%; }
      `}</style>
    </div>
  );
};

export default SettingsPage;