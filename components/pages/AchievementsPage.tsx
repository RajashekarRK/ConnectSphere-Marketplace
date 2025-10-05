import React from 'react';
// FIX: Add .ts extension for types import
import { User } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface AchievementsPageProps {
  user: User;
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Achievements for {user.name}
      </h2>
      <p className="text-slate-600">This page will display your badges and achievements. Coming soon!</p>
    </div>
  );
};

export default AchievementsPage;