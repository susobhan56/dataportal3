'use client';

import { motion } from 'framer-motion';
import { FileSpreadsheet, FileJson, Database, Eye, Download } from 'lucide-react';
import { useState } from 'react';

interface DatasetCardProps {
  id: string;
  name: string;
  description: string;
  type: 'csv' | 'excel' | 'json' | 'xml';
  size: string;
  lastUpdated: string;
  onView: () => void;
  onDownload: () => void;
}

export default function DatasetCard({
  id,
  name,
  description,
  type,
  size,
  lastUpdated,
  onView,
  onDownload,
}: DatasetCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const TypeIcon = {
    csv: FileSpreadsheet,
    excel: FileSpreadsheet,
    json: FileJson,
    xml: Database,
  }[type];

  const typeColor = {
    csv: 'text-green-600',
    excel: 'text-emerald-600',
    json: 'text-amber-600',
    xml: 'text-blue-600',
  }[type];

  return (
    <motion.div
      initial={false}
      animate={isHovered ? { y: -4 } : { y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className={`p-2 bg-gray-50 rounded-lg ${typeColor}`}>
            <TypeIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-400">
              <span>{size}</span>
              <span>•</span>
              <span>Updated {new Date(lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onView}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span>View</span>
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
    </motion.div>
  );
}
