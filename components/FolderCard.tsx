// app/components/FolderCard.tsx
'use client';

interface FolderCardProps {
  title: string;
  onClick: () => void;
}

export default function FolderCard({ title, onClick }: FolderCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border p-4 rounded-md shadow-md hover:bg-yellow-100 transition w-32 text-center"
    >
      <div className="text-5xl">📁</div>
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
}
