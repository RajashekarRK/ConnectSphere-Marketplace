import React from 'react';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg">Filters</h3>
                <p>Filter options will be here.</p>
                <button onClick={onClose} className="mt-4 bg-gray-200 px-4 py-2 rounded">Close</button>
            </div>
        </div>
    );
};

export default FilterModal;
