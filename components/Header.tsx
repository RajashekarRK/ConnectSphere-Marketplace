import React, { useState } from 'react';
// FIX: Corrected import paths for types.ts to resolve module loading errors.
import { User, Page } from '../types.ts';

interface HeaderProps {
  currentUser: User | null;
  onNavigate: (page: Page, data?: any) => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onNavigate, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if(searchQuery.trim()) {
        onNavigate('search', searchQuery.trim());
    }
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => onNavigate('home')}>ConnectSphere</h1>
        
        <div className="flex-1 px-4 max-w-xl">
            <form onSubmit={handleSearch}>
                <input 
                    type="search" 
                    placeholder="Search for anything..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <button onClick={() => onNavigate('explore')} className="text-gray-600 hover:text-blue-600">Explore</button>
          {/* FIX: Corrected navigation page for selling */}
          <button onClick={() => onNavigate('dashboard/listings')} className="text-gray-600 hover:text-blue-600">Sell</button>
        </nav>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <button onClick={() => onNavigate(currentUser.role === 'admin' ? 'admin/dashboard' : 'profile')} className="text-gray-600 hover:text-blue-600">{currentUser.role === 'admin' ? 'Admin' : 'Profile'}</button>
              <button onClick={onLogout} className="bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600 text-sm font-semibold">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => onNavigate('login')} className="text-gray-600 hover:text-blue-600">Log In</button>
              <button onClick={() => onNavigate('register')} className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 text-sm font-semibold">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;