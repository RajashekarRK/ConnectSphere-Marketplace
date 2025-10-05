
import React from 'react';
// FIX: Corrected import path for types.
import { User, Page } from '../../types.ts';
// FIX: Added missing ChartBarIcon.
import { ChartPieIcon, UsersIcon, ShieldExclamationIcon, SignalIcon, DocumentChartBarIcon, GlobeAltIcon, QuestionMarkCircleIcon, Cog8ToothIcon, CpuChipIcon, WrenchScrewdriverIcon, BellIcon, CreditCardIcon, ChartBarIcon } from '../icons.tsx';

interface AdminDashboardLayoutProps {
  currentUser: User;
  onNavigate: (page: Page, data?: any) => void;
  onLogout: () => void;
  children: React.ReactNode;
  activePage: Page;
}

const NavLink: React.FC<{ page: Page; activePage: Page; onNavigate: (page: Page) => void; icon: React.ReactNode; label: string; }> = ({ page, activePage, onNavigate, icon, label }) => (
  <li
    onClick={() => onNavigate(page)}
    className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      activePage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 text-gray-300'
    }`}
  >
    {icon}
    <span className="font-semibold">{label}</span>
  </li>
);

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({ currentUser, onNavigate, onLogout, children, activePage }) => {
  const sidebarNavLinks = [
    { page: 'admin/dashboard' as Page, icon: <ChartPieIcon className="h-6 w-6" />, label: 'Dashboard' },
    { page: 'admin/users' as Page, icon: <UsersIcon className="h-6 w-6" />, label: 'User Management' },
    { page: 'admin/trust-safety' as Page, icon: <ShieldExclamationIcon className="h-6 w-6" />, label: 'Content Moderation' },
    { page: 'admin/biometrics' as Page, icon: <SignalIcon className="h-6 w-6" />, label: 'Behavioral Analytics' },
    { page: 'admin/risk' as Page, icon: <DocumentChartBarIcon className="h-6 w-6" />, label: 'Risk Scoring' },
    { page: 'admin/feedback' as Page, icon: <QuestionMarkCircleIcon className="h-6 w-6" />, label: 'User Feedback' },
    { page: 'admin/notifications' as Page, icon: <BellIcon className="h-6 w-6" />, label: 'Notifications' },
    { page: 'admin/language' as Page, icon: <GlobeAltIcon className="h-6 w-6" />, label: 'Language' },
    { page: 'admin/currency' as Page, icon: <CreditCardIcon className="h-6 w-6" />, label: 'Payments' },
    { page: 'admin/api' as Page, icon: <WrenchScrewdriverIcon className="h-6 w-6" />, label: 'API Management' },
    { page: 'admin/models' as Page, icon: <CpuChipIcon className="h-6 w-6" />, label: 'AI Models' },
    { page: 'admin/performance' as Page, icon: <ChartBarIcon className="h-6 w-6" />, label: 'System Performance' },
    { page: 'settings' as Page, icon: <Cog8ToothIcon className="h-6 w-6" />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-gray-800 p-6 flex flex-col fixed h-full">
          <div className="flex items-center space-x-3 mb-10">
             <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
             </div>
            <h1 className="text-2xl font-bold text-white">ConnectSphere</h1>
          </div>
          <nav className="flex-grow">
            <ul className="space-y-2">
              {sidebarNavLinks.map(link => (
                <NavLink key={link.page} {...link} activePage={activePage} onNavigate={onNavigate} />
              ))}
            </ul>
          </nav>
           <div>
             <div onClick={onLogout} className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-700 text-gray-300 list-none">
                <img src={currentUser.avatarUrl} alt={currentUser.name} className="h-8 w-8 rounded-full" />
                <div>
                  <p className="font-semibold text-white">{currentUser.name}</p>
                  <p className="text-xs text-gray-400">Logout</p>
                </div>
             </div>
           </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-72 p-8">
            {children}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
