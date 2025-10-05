import React from 'react';
import { Page } from '../../types.ts';

interface DashboardSidebarProps {
  activePage: string;
  setActivePage: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; activePage: string; onClick: (page: Page) => void; children: React.ReactNode }> = ({ page, activePage, onClick, children }) => (
  <li>
    <button
      onClick={() => onClick(page)}
      className={`w-full text-left p-2 rounded font-semibold ${
        activePage === page ? 'bg-slate-100 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {children}
    </button>
  </li>
);


const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h3 className="font-bold text-slate-800 mb-4">Dashboard Menu</h3>
      <nav>
        <ul className="space-y-2">
          <NavLink page="dashboard/orders" activePage={activePage} onClick={setActivePage}>Orders</NavLink>
          <NavLink page="dashboard/analytics" activePage={activePage} onClick={setActivePage}>Analytics</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;