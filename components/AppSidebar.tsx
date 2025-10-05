
import React from 'react';

const AppSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h2 className="font-bold text-xl">ConnectSphere</h2>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-slate-100">Home</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-slate-100">Explore</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-slate-100">Sell</a>
          </li>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded hover:bg-slate-100">Profile</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
