
import React from 'react';
// FIX: Corrected import path.
import { ApiKey, Integration } from '../../types.ts';

interface ApiManagementPageProps {
  apiKeys: ApiKey[];
  integrations: Integration[];
}

const ApiManagementPage: React.FC<ApiManagementPageProps> = ({ apiKeys, integrations }) => {
    const getStatusClass = (status: string) => status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300';

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">API Management & Integration Control</h1>
      <p className="text-gray-400 mb-8">Manage ConnectSphere APIs and third-party integrations.</p>

      {/* Available APIs */}
      <section className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Available APIs</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 p-4 items-center">
            <span className="font-semibold">Products API</span>
            <span className="text-gray-400 col-span-2">Manage product listings, inventory, and pricing.</span>
            <div className="flex items-center space-x-4 justify-self-end">
                <a href="#" className="text-blue-400 hover:underline">View Docs</a>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-500/20 text-green-300">Active</span>
            </div>
          </div>
           <div className="grid grid-cols-4 gap-4 p-4 items-center">
            <span className="font-semibold">Orders API</span>
            <span className="text-gray-400 col-span-2">Access order details, manage fulfillment, and track shipments.</span>
             <div className="flex items-center space-x-4 justify-self-end">
                <a href="#" className="text-blue-400 hover:underline">View Docs</a>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-500/20 text-green-300">Active</span>
            </div>
          </div>
           <div className="grid grid-cols-4 gap-4 p-4 items-center">
            <span className="font-semibold">Users API</span>
            <span className="text-gray-400 col-span-2">Manage user accounts, profiles, and authentication.</span>
             <div className="flex items-center space-x-4 justify-self-end">
                <a href="#" className="text-blue-400 hover:underline">View Docs</a>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-500/20 text-red-300">Inactive</span>
            </div>
          </div>
        </div>
      </section>

      {/* API Key Management */}
      <section className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">API Key Management</h2>
        <div className="flex items-center space-x-4">
            <input type="text" readOnly value="********************************" className="flex-grow bg-gray-700 border-gray-600 rounded-md p-2" />
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">Generate New Key</button>
            <button className="text-gray-400 hover:text-white">Revoke Key</button>
        </div>
      </section>

      {/* Other Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Rate Limiting</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="text-sm text-gray-400">Requests per minute</label>
                  <input type="text" placeholder="e.g. 1000" className="w-full mt-2 bg-gray-700 border-gray-600 rounded-md p-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Requests per hour</label>
                  <input type="text" placeholder="e.g. 10000" className="w-full mt-2 bg-gray-700 border-gray-600 rounded-md p-2" />
                </div>
            </div>
        </section>

         <section className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Webhooks & Callbacks</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="text-sm text-gray-400">Webhook URL</label>
                  <input type="text" placeholder="https://example.com/webhook" className="w-full mt-2 bg-gray-700 border-gray-600 rounded-md p-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Callback URL</label>
                  <input type="text" placeholder="https://example.com/callback" className="w-full mt-2 bg-gray-700 border-gray-600 rounded-md p-2" />
                </div>
            </div>
        </section>
      </div>

       <section className="bg-gray-800 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Active Integrations</h2>
           <table className="min-w-full">
               <thead>
                   <tr>
                       <th className="py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Integration</th>
                       <th className="py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                       <th className="py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                       <th className="py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Error Logs</th>
                   </tr>
               </thead>
               <tbody className="divide-y divide-gray-700">
                    {integrations.map(int => (
                        <tr key={int.id}>
                            <td className="py-3 font-medium">{int.name}</td>
                            <td className="py-3 text-gray-400">{int.type}</td>
                            <td className="py-3"><span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusClass(int.status)}`}>{int.status}</span></td>
                            <td className="py-3"><a href="#" className="text-blue-400 hover:underline">View Logs</a></td>
                        </tr>
                    ))}
               </tbody>
           </table>
       </section>

      <div className="flex justify-end mt-8">
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Save Changes</button>
      </div>
    </div>
  );
};

export default ApiManagementPage;
