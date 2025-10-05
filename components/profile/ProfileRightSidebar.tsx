
import React from 'react';
// FIX: Corrected import path.
import { User } from '../../types.ts';
import AccountHealthWidget from './widgets/AccountHealthWidget.tsx';
import ConnectionsWidget from './widgets/ConnectionsWidget.tsx';
import StatsWidget from './widgets/StatsWidget.tsx';
import VerificationWidget from './widgets/VerificationWidget.tsx';


interface ProfileRightSidebarProps {
  currentUser: User;
}

const ProfileRightSidebar: React.FC<ProfileRightSidebarProps> = ({ currentUser }) => {
  return (
    <div className="space-y-6">
      <AccountHealthWidget currentUser={currentUser} />
      <StatsWidget />
      <VerificationWidget />
      <ConnectionsWidget />
    </div>
  );
};

export default ProfileRightSidebar;
