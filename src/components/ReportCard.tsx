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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2">
          <FileText className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full mb-2">
              {theme}
            </span>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
            <p className="mt-2 text-sm text-gray-400">
              Updated {new Date(lastUpdated).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onView}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>View Report</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownload}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
