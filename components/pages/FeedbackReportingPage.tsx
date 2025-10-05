
import React, { useState } from 'react';
// FIX: Corrected import path.
import { User, SupportTicket, SupportTicketStatus } from '../../types.ts';
import { ArrowUpTrayIcon } from '../icons.tsx';

interface FeedbackReportingPageProps {
  currentUser: User;
  submittedTickets: SupportTicket[];
  onSubmitTicket: (ticket: Pick<SupportTicket, 'category' | 'description'>) => void;
}

const FeedbackReportingPage: React.FC<FeedbackReportingPageProps> = ({ currentUser, submittedTickets, onSubmitTicket }) => {
  const [category, setCategory] = useState('Bug Report');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onSubmitTicket({ category, description });
      setDescription('');
    }
  };
  
  const getStatusClass = (status: SupportTicketStatus) => {
    switch(status) {
        case 'Open': return 'bg-yellow-500/20 text-yellow-300';
        case 'In Progress': return 'bg-blue-500/20 text-blue-300';
        case 'Resolved': return 'bg-green-500/20 text-green-300';
        case 'Closed': return 'bg-gray-500/20 text-gray-400';
        default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6">Feedback & Reporting</h1>
      <p className="text-gray-400 mb-10">Your input helps us improve ConnectSphere. Submit feedback, report issues, or flag content.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Submit Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Submit a New Ticket</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Bug Report</option>
                <option>Feature Suggestion</option>
                <option>Harassment Report</option>
                <option>General Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the issue in detail..."
                className="w-full bg-gray-800 border-gray-700 text-white rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Attachment (Optional)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                   <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-500" />
                   <div className="flex text-sm text-gray-400">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Ticket
            </button>
          </form>
        </div>

        {/* Submitted Tickets */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Your Submitted Tickets</h2>
          <div className="space-y-4">
            {submittedTickets.length > 0 ? (
              <div className="bg-gray-800 rounded-lg">
                <table className="min-w-full">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ticket ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Submitted</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {submittedTickets.map(ticket => (
                      <tr key={ticket.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">#{ticket.id.slice(-5)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{ticket.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                           <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(ticket.status)}`}>
                             {ticket.status}
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{ticket.createdAt}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 hover:underline cursor-pointer">View</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-800 rounded-lg">
                <p className="text-gray-400">You haven't submitted any tickets yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReportingPage;
