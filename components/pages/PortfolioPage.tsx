import React from 'react';
// FIX: Add .ts extension for types import
import { PortfolioProject } from '../../types.ts';

// FIX: Added props to the placeholder component.
interface PortfolioPageProps {
  projects: PortfolioProject[];
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ projects }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        My Portfolio
      </h2>
      <p className="text-slate-600">This page will allow you to showcase your best work or collection. You have {projects.length} projects. Coming soon!</p>
    </div>
  );
};

export default PortfolioPage;