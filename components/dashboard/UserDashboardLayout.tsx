
import React from 'react';
// FIX: Corrected import path for types.
import { User, Page } from '../../types.ts';
// FIX: Added missing BriefcaseIcon import
import { HomeIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon, UserCircleIcon, TrophyIcon, UserGroupIcon, DocumentTextIcon, SparklesIcon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon } from '../icons.tsx';

interface UserDashboardLayoutProps {
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

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ currentUser, onNavigate, onLogout, children, activePage }) => {
  const sidebarNavLinks = [
    { page: 'home' as Page, icon: <HomeIcon className="h-6 w-6" />, label: 'Marketplace Home' },
    { page: 'profile' as Page, icon: <UserCircleIcon className="h-6 w-6" />, label: 'My Profile' },
    { page: 'messages' as Page, icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />, label: 'Messages' },
    { page: 'lists' as Page, icon: <DocumentTextIcon className="h-6 w-6" />, label: 'My Lists' },
    { page: 'achievements' as Page, icon: <TrophyIcon className="h-6 w-6" />, label: 'Achievements' },
    { page: 'connections' as Page, icon: <UserGroupIcon className="h-6 w-6" />, label: 'Connections' },
    { page: 'referral' as Page, icon: <SparklesIcon className="h-6 w-6" />, label: 'Refer & Earn' },
    { page: 'feedback' as Page, icon: <QuestionMarkCircleIcon className="h-6 w-6" />, label: 'Feedback & Support' },
    { page: 'settings' as Page, icon: <Cog6ToothIcon className="h-6 w-6" />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-6 flex flex-col fixed h-full">
          <div className="flex items-center space-x-3 mb-10">
            <img src={currentUser.avatarUrl} alt={currentUser.name} className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-bold text-white">{currentUser.name}</p>
              <p className="text-sm text-gray-400">@{currentUser.handle}</p>
            </div>
          </div>
          <nav className="flex-grow">
            <ul className="space-y-2">
              {sidebarNavLinks.map(link => (
                <NavLink key={link.page} {...link} activePage={activePage} onNavigate={onNavigate} />
              ))}
            </ul>
          </nav>
           <div>
             <li onClick={onLogout} className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-700 text-gray-300 list-none">
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
                <span className="font-semibold">Logout</span>
             </li>
           </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
            {children}
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
