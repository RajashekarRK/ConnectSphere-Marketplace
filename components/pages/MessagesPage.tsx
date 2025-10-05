
import React from 'react';
// FIX: Corrected import path.
import { User, Conversation } from '../../types.ts';

interface MessagesPageProps {
    currentUser: User;
    conversations: Conversation[];
    allUsers: User[];
    onSendMessage: () => void;
}

const MessagesPage: React.FC<MessagesPageProps> = ({ currentUser, conversations, allUsers, onSendMessage }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Messages
      </h2>
      <p className="text-slate-600">Your message center will be here. Coming soon!</p>
    </div>
  );
};

export default MessagesPage;
