import React, { useState } from 'react';
// FIX: Added .ts and .tsx extensions to imports to resolve module loading errors.
import { User } from '../../types.ts';
import { PlusIcon, XMarkIcon } from '../icons.tsx';

interface ExpertiseTagsPageProps {
  currentUser: User;
  onSave: (tags: string[]) => void;
}

const ExpertiseTagsPage: React.FC<ExpertiseTagsPageProps> = ({ currentUser, onSave }) => {
  const [tags, setTags] = useState<string[]>(currentUser.expertiseTags || []);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = () => {
    onSave(tags);
  };

  return (
    <div className="flex justify-center items-start pt-16">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-2">Expertise Tags</h1>
        <p className="text-gray-400 mb-6">Manage your tags to showcase your skills and connect with the right opportunities.</p>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
              placeholder="Add a new tag..."
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddTag}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-400 hover:text-white"
            >
              <PlusIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 min-h-[50px]">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center bg-blue-500/20 text-blue-300 text-sm font-medium pl-3 pr-2 py-1 rounded-full">
              {tag}
              <button onClick={() => handleRemoveTag(tag)} className="ml-2 text-blue-300 hover:text-white">
                <XMarkIcon className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTagsPage;