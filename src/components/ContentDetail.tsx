'use client';

import { motion } from 'framer-motion';
import { ChartBar, FileText, Database, File } from 'lucide-react';
import FileViewer from '@/components/FileViewer';
import type { Content } from '@/types/content';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface ContentDetailProps {
  content: Content;
  themeName: string;
}

export default function ContentDetail({ content, themeName }: ContentDetailProps) {
  const TypeIcon =
    (content.type === 'chart' && ChartBar) ||
    (content.type === 'report' && FileText) ||
    (content.type === 'dataset' && Database) ||
    File;

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <TypeIcon className="w-6 h-6 text-primary-600" />
          <p className="text-sm font-medium text-primary-600 uppercase">
            {content.type}
          </p>
        </div>
        {/* Graph/Image preview above article heading */}
        {(content.graphs && content.graphs.length > 0) ? (
          <div className="mb-6 flex justify-center">
            <img src={content.graphs[0]} alt="Graph preview" className="rounded-lg border max-w-lg w-full" />
          </div>
        ) : (content.images && content.images.length > 0) ? (
          <div className="mb-6 flex justify-center">
            <img src={content.images[0]} alt="Image preview" className="rounded-lg border max-w-lg w-full" />
          </div>
        ) : null}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {content.abstract}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span>Theme: {themeName}</span>
          <span>•</span>
          <span>Last updated: {new Date(content.lastUpdated).toLocaleDateString()}</span>
        </div>
        {/* Animated Chart */}
        {content.chartData && content.chartData.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Urbanization Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={content.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" isAnimationActive={true} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        {/* Article body */}
        {content.article && (
          <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: content.article }} />
        )}
        {/* Graphs */}
        {content.graphs && content.graphs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Graphs</h2>
            <div className="flex flex-wrap gap-4">
              {content.graphs.map((src, i) => (
                <img key={i} src={src} alt={`Graph ${i+1}`} className="rounded-lg border max-w-xs" />
              ))}
            </div>
          </div>
        )}
        {/* Images */}
        {content.images && content.images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Images</h2>
            <div className="flex flex-wrap gap-4">
              {content.images.map((src, i) => (
                <img key={i} src={src} alt={`Image ${i+1}`} className="rounded-lg border max-w-xs" />
              ))}
            </div>
          </div>
        )}
      </motion.div>
      {/* FileViewer if needed (optional, can be added here) */}
    </div>
  );
}
