'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, ChartBar, Database, ImageIcon, BarChart3 } from 'lucide-react';

interface ContentCardProps {
  id: string;
  title: string;
  theme: string;
  abstract: string;
  thumbnail: string;
  type: 'chart' | 'report' | 'dataset';
  lastUpdated: string;
  images?: string[];
  graphs?: string[];
}

export default function ContentCard({
  id,
  title,
  theme,
  abstract,
  thumbnail,
  type,
  lastUpdated,
  images,
  graphs,
}: ContentCardProps) {
  const TypeIcon = {
    chart: ChartBar,
    report: FileText,
    dataset: Database,
  }[type];

  // Always use the thumbnail at the top, regardless of images/graphs
  const preview = thumbnail;
  const hasGraph = graphs && graphs.length > 0;
  const hasImage = images && images.length > 0;

  // Use a plain <a> with window.location.href for hard reload navigation
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `/themes/${theme}/${id}`;
  };

  return (
    <a href={`/themes/${theme}/${id}`} onClick={handleClick} style={{ textDecoration: 'none' }}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[320px] w-full max-w-xs flex-1"
      >
        <div className="relative h-40">
          <Image
            src={preview}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 flex gap-1">
            <TypeIcon className="w-5 h-5 text-gray-600" />
            {hasGraph && <BarChart3 className="w-4 h-4 text-blue-500" />}
            {hasImage && <ImageIcon className="w-4 h-4 text-green-500" />}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2 flex-1">{abstract}</p>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
            <span>{new Date(lastUpdated).toLocaleDateString()}</span>
            <span className="capitalize">{type}</span>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
