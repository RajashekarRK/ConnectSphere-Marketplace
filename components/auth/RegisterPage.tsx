
// FIX: Implemented the RegisterPage component.
import React, { useState } from 'react';
// FIX: Added .ts extension to types import to resolve module loading error.
import { Page } from '../../types.ts';

interface RegisterPageProps {
  // FIX: Updated onRegister signature to pass form data.
  onRegister: (name: string, email: string) => void;
  onNavigate: (page: Page) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, onNavigate }) => {
  // FIX: Added state for form inputs.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form data
    onRegister(name, email);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">Full Name</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">Email Address</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300">Password</label>
          <input type="password" required className="mt-1 block w-full border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
        <div className="text-center">
          <button type="button" onClick={() => onNavigate('login')} className="text-blue-600 dark:text-blue-400 hover:underline">
            Already have an account? Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
