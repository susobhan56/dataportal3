'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { FileText, Database, ChartBar, Download, Eye } from 'lucide-react';
import { datasets } from '@/data/datasets.json';
import type { Dataset, DatasetType } from '@/types/dataset';
import { notFound } from 'next/navigation';
import FileViewer from '@/components/FileViewer';

interface DatasetPageProps {
  params: {
    id: string;
  };
}

const TypeIcons = {
  csv: Database,
  excel: FileText,
  json: ChartBar,
} as const;

export default function DatasetPage({ params }: DatasetPageProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const dataset = [
    ...datasets.raw.map(d => ({ ...d, category: 'raw' as const })),
    ...datasets.analyzed.map(d => ({ ...d, category: 'analyzed' as const }))
  ].find(d => d.id === params.id);

  if (!dataset) {
    notFound();
  }

  const Icon = TypeIcons[dataset.type as keyof typeof TypeIcons];
  const viewerType = dataset.type === 'excel' ? 'csv' : dataset.type as 'csv' | 'json';

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                    <span className="text-sm font-medium text-primary-600 uppercase">
                      {dataset.type} Dataset
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {dataset.name}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {dataset.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                <div>
                  <span className="block text-gray-500 mb-1">Category</span>
                  <span className="font-medium text-gray-900 capitalize">
                    {dataset.category}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Format</span>
                  <span className="font-medium text-gray-900 uppercase">
                    {dataset.type}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Last Updated</span>
                  <span className="font-medium text-gray-900">
                    {new Date(dataset.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Size</span>
                  <span className="font-medium text-gray-900">
                    {dataset.size}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsViewerOpen(true)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Data
                </button>
                <a
                  href={`/data/${dataset.id}.${dataset.type}`}
                  download
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          </motion.div>

          {isViewerOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <FileViewer 
                url={`/data/${dataset.id}.${dataset.type}`}
                type={viewerType}
              />
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
