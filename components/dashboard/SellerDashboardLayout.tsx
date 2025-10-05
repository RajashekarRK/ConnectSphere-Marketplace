import React from 'react';
// FIX: Added .ts extension to types import to resolve module loading error.
import { User, Page } from '../../types.ts';
import DashboardSidebar from './DashboardSidebar.tsx';
import DashboardHeader from './DashboardHeader.tsx';

interface SellerDashboardLayoutProps {
    currentUser: User;
    onNavigate: (page: Page) => void;
    onLogout: () => void;
    activePage: Page;
    children: React.ReactNode;
}

const SellerDashboardLayout: React.FC<SellerDashboardLayoutProps> = ({ currentUser, onNavigate, onLogout, activePage, children }) => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
                <DashboardSidebar activePage={activePage} setActivePage={onNavigate} />
            </div>
            <div className="lg:col-span-3">
                <DashboardHeader />
                <div className="bg-white rounded-xl shadow-lg p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SellerDashboardLayout;