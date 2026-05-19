'use client';
import Image from 'next/image';
import { FileText, Download } from 'lucide-react';

interface FactsheetCardProps {
  id: string;
  title: string;
  abstract: string;
  thumbnail: string;
  lastUpdated: string;
  onView: () => void;
  onDownload: () => void;
}

export default function FactsheetCard({
  id,
  title,
  abstract,
  thumbnail,
  lastUpdated,
  onView,
  onDownload,
}: FactsheetCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-stretch h-[320px] w-full max-w-xs mx-auto">
      <div className="relative h-36 w-full">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2 flex-1">{abstract}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
          <span>{new Date(lastUpdated).toLocaleDateString()}</span>
          <span className="capitalize">Factsheet</span>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={onView} className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
            <FileText className="w-4 h-4" /> Preview
          </button>
          <button onClick={onDownload} className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200">
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
      </div>
    </div>
  );
}
