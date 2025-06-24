// app/components/FolderModal.tsx
'use client';

import { useEffect } from 'react';

interface FolderModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export default function FolderModal({ title, content, onClose }: FolderModalProps) {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg animate-fade-in">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
