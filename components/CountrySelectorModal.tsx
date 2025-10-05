import React from 'react';
import { Country } from '../types.ts';
// FIX: Changed the icon import from XIcon to the available XMarkIcon.
// FIX: Added .tsx extension to icon import.
import { XMarkIcon } from './icons.tsx';

interface CountrySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  // FIX: Added missing props
  onSelectCountry: (country: Country) => void;
  suggestedCountry: Country;
}

// FIX: Added missing props to component signature
const CountrySelectorModal: React.FC<CountrySelectorModalProps> = ({ isOpen, onClose, onSelectCountry, suggestedCountry }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Select Country/Region</h3>
          <button onClick={onClose}><XMarkIcon className="h-5 w-5 text-slate-500" /></button>
        </div>
        <div className="p-6 text-center">
          <p className="text-slate-600">Country selection feature is coming soon.</p>
          <p className="mt-4 text-sm text-slate-500">Suggested: {suggestedCountry.name}</p>
          <button
            onClick={() => onSelectCountry(suggestedCountry)}
            className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
           >
            Select {suggestedCountry.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountrySelectorModal;