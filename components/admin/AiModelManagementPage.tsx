
import React from 'react';
// FIX: Corrected import path.
import { AiModel } from '../../types.ts';
import { ArrowUpIcon, ArrowDownIcon } from '../icons.tsx';

interface AiModelManagementPageProps {
  models: AiModel[];
}

const AiModelManagementPage: React.FC<AiModelManagementPageProps> = ({ models }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">AI Model Training & Management</h1>
      <p className="text-gray-400 mb-8">Oversee and optimize ConnectSphere's core AI engines.</p>

      {/* Active Models */}
      <section className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Active Models</h2>
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Model Name</th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Training Date</th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Accuracy</th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Precision</th>
              <th className="py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {models.map(model => (
              <tr key={model.id}>
                <td className="py-4 font-medium">{model.name}</td>
                <td className="py-4 text-gray-400">{model.lastTrainingDate}</td>
                <td className="py-4 text-gray-300">{model.accuracy}%</td>
                <td className="py-4 text-gray-300">{model.precision}%</td>
                <td className="py-4"><a href="#" className="text-blue-400 hover:underline">Retrain</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Model Performance Trends */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Model Performance Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400">Personalization Engine Accuracy</p>
            <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold text-white">85%</p>
                <div className="flex items-center text-green-400">
                    <ArrowUpIcon className="h-4 w-4" />
                    <span>+2%</span>
                </div>
            </div>
             {/* Placeholder for chart */}
            <div className="h-24 mt-4 bg-gray-700/50 rounded-md"></div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400">Fraud Detection Precision</p>
             <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold text-white">88%</p>
                 <div className="flex items-center text-red-400">
                    <ArrowDownIcon className="h-4 w-4" />
                    <span>-1%</span>
                </div>
            </div>
            {/* Placeholder for chart */}
            <div className="h-24 mt-4 bg-gray-700/50 rounded-md"></div>
          </div>
        </div>
      </section>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Model Management */}
            <section className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Model Management</h2>
                <div className="space-y-4">
                    <button className="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700">Upload New Training Data</button>
                    <button className="w-full text-center bg-gray-700 text-white font-semibold py-3 rounded-md hover:bg-gray-600">Deploy New Model Version</button>
                </div>
            </section>
            
            {/* A/B Testing */}
            <section className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-4">A/B Testing</h2>
                <div className="space-y-4">
                    <select className="w-full bg-gray-700 border-gray-600 rounded-md p-3">
                        <option>Select Model</option>
                    </select>
                    <div className="grid grid-cols-2 gap-4">
                        <select className="w-full bg-gray-700 border-gray-600 rounded-md p-3">
                            <option>Select Version A</option>
                        </select>
                        <select className="w-full bg-gray-700 border-gray-600 rounded-md p-3">
                            <option>Select Version B</option>
                        </select>
                    </div>
                    <button className="w-full text-center bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700">Start A/B Test</button>
                </div>
            </section>
        </div>
    </div>
  );
};

export default AiModelManagementPage;
