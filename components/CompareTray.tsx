import React from 'react';
import { ListingDetails } from '../types.ts';

// FIX: Added props to the placeholder component.
interface CompareTrayProps {
    items: ListingDetails[];
    onCompare: () => void;
    onClear: () => void;
}

const CompareTray: React.FC<CompareTrayProps> = ({ items, onCompare, onClear }) => {
    // This is a placeholder component
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 text-center">
            <h3 className="font-bold">Compare Tray ({items.length} items)</h3>
            <div className="flex justify-center gap-4 mt-2">
                <button onClick={onCompare} className="bg-blue-500 text-white px-4 py-1 rounded">Compare</button>
                <button onClick={onClear} className="bg-gray-300 px-4 py-1 rounded">Clear</button>
            </div>
        </div>
    );
};

export default CompareTray;