import React, { useState, useRef } from 'react';
// FIX: Imported the missing CameraIcon to resolve the module export error.
import { CameraIcon } from './icons.tsx';

interface ImageUploaderProps {
  onImageUpload: (image: { mimeType: string; data: string }) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setPreviewUrl(URL.createObjectURL(file));
        onImageUpload({ mimeType: file.type, data: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
      />
      <div
        onClick={handleContainerClick}
        className="w-full h-64 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center cursor-pointer bg-gray-700/50 hover:border-blue-500 transition-colors"
      >
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-contain p-2" />
        ) : (
          <div className="text-center text-gray-400">
            <CameraIcon className="h-12 w-12 mx-auto" />
            <p className="mt-2">Click to upload an image</p>
            <p className="text-sm">PNG, JPG, or WEBP</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;