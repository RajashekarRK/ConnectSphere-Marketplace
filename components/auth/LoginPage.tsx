import React from 'react';
// FIX: Added imports and props interface to handle data passed from App.tsx.
import { User, Page } from '../../types.ts';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onNavigate: (page: Page) => void;
  adminUser?: User;
  regularUser?: User;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate, adminUser, regularUser }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">Login</h2>
      <div className="space-y-4">
        <p className="text-center text-slate-600">This is a mock login page for demonstration.</p>
        {regularUser && (
            <button onClick={() => onLogin(regularUser)} className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                Log in as {regularUser.name} (User)
            </button>
        )}
        {adminUser && (
            <button onClick={() => onLogin(adminUser)} className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700">
                Log in as {adminUser.name} (Admin)
            </button>
        )}
        <div className="text-center">
            <button onClick={() => onNavigate('register')} className="text-blue-600 hover:underline">
                Don't have an account? Sign Up
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;