'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Download } from 'lucide-react';

interface ReportCardProps {
  id: string;
  name: string;
  theme: string;
  description: string;
  thumbnail: string;
  file: string;
  lastUpdated: string;
  onView: () => void;
  onDownload: () => void;
}

export default function ReportCard({
  id,
  name,
  theme,
  description,
  thumbnail,
  file,
  lastUpdated,
  onView,
  onDownload,
}: ReportCardProps) {
  // Always use the thumbnail at the top
  const preview = thumbnail;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-stretch h-[320px] w-full max-w-xs mx-auto"
    >
      <div className="relative h-36 w-full">
        <Image
          src={preview}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2">
          <FileText className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between flex-1">
          <div className="flex flex-col h-full">
            <span className="inline-block px-2 py-0.5 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full mb-2">
              {theme}
            </span>
            <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{name}</h3>
            <p className="mt-1 text-xs text-gray-500 line-clamp-2 flex-1">{description}</p>
            <p className="mt-2 text-xs text-gray-400">
              Updated {new Date(lastUpdated).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onView}
            className="flex-1 flex items-center justify-center space-x-2 px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>View</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownload}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
