'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { FileText, Database, ChartBar, Filter, Search, X } from 'lucide-react';
import { datasets } from '@/data/datasets.json';
import { reports } from '@/data/reports.json';
import ReportCard from '@/components/ReportCard';
import type { Dataset } from '@/types/dataset';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ContentType = 'all' | 'raw' | 'analyzed';
type FileType = 'all' | 'csv' | 'excel' | 'json';
type Tab = 'datasets' | 'reports' | 'factsheets';

const themes = [
  { key: 'demography', label: 'Demography' },
  { key: 'ageing', label: 'Ageing' },
  { key: 'health', label: 'Health' },
  { key: 'employment', label: 'Employment' },
  { key: 'migration', label: 'Migration & Urbanisation' },
  { key: 'education', label: 'Education' },
];

export default function RepositoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState<ContentType>('all');
  const [fileType, setFileType] = useState<FileType>('all');
  const [tab, setTab] = useState<Tab>('datasets');

  const allDatasets = useMemo(() => {
    const raw = datasets.raw.map(d => ({ ...d, category: 'raw' as const }));
    const analyzed = datasets.analyzed.map(d => ({ ...d, category: 'analyzed' as const }));
    return [...raw, ...analyzed];
  }, []);

  const filteredDatasets = useMemo(() => {
    return allDatasets.filter(dataset => {
      const matchesSearch = searchQuery === '' || 
        dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dataset.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesContentType = contentType === 'all' || dataset.category === contentType;
      const matchesFileType = fileType === 'all' || dataset.type === fileType;

      return matchesSearch && matchesContentType && matchesFileType;
    });
  }, [allDatasets, searchQuery, contentType, fileType]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const router = useRouter();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${tab === 'datasets' ? 'border-primary-600 text-primary-700 bg-white' : 'border-transparent text-gray-500 bg-gray-50 hover:text-primary-600'}`}
              onClick={() => setTab('datasets')}
            >
              Datasets
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${tab === 'reports' ? 'border-primary-600 text-primary-700 bg-white' : 'border-transparent text-gray-500 bg-gray-50 hover:text-primary-600'}`}
              onClick={() => setTab('reports')}
            >
              Reports
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${tab === 'factsheets' ? 'border-primary-600 text-primary-700 bg-white' : 'border-transparent text-gray-500 bg-gray-50 hover:text-primary-600'}`}
              onClick={() => {
                window.location.href = '/repository/factsheets';
              }}
            >
              Factsheets
            </button>
          </div>

          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Data Repository
            </h1>
            <p className="text-lg text-gray-600">
              Access and download datasets, reports, and visualizations
            </p>
          </motion.div>

          {tab === 'datasets' && (
            <motion.div 
              className="mb-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search datasets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex gap-4">
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value as ContentType)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Content</option>
                    <option value="raw">Raw Datasets</option>
                    <option value="analyzed">Analyzed Data</option>
                  </select>

                  <select
                    value={fileType}
                    onChange={(e) => setFileType(e.target.value as FileType)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="csv">CSV</option>
                    <option value="excel">Excel</option>
                    <option value="json">JSON</option>
                  </select>
                </div>
              </div>

              {/* Filter Tags */}
              {(searchQuery || contentType !== 'all' || fileType !== 'all') && (
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm"
                    >
                      Search: {searchQuery}
                      <button
                        onClick={() => setSearchQuery('')}
                        className="ml-2 hover:text-primary-900"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.span>
                  )}
                  {contentType !== 'all' && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm"
                    >
                      Type: {contentType}
                      <button
                        onClick={() => setContentType('all')}
                        className="ml-2 hover:text-primary-900"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.span>
                  )}
                  {fileType !== 'all' && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm"
                    >
                      Format: {fileType}
                      <button
                        onClick={() => setFileType('all')}
                        className="ml-2 hover:text-primary-900"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.span>
                  )}
                </div>
              )}
            </motion.div>
          )}

          {tab === 'datasets' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredDatasets.map((dataset) => (
                <motion.div
                  key={dataset.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {dataset.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {dataset.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {dataset.type === 'csv' && (
                          <Database className="w-6 h-6 text-primary-600" />
                        )}
                        {dataset.type === 'excel' && (
                          <FileText className="w-6 h-6 text-green-600" />
                        )}
                        {dataset.type === 'json' && (
                          <ChartBar className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 text-sm">
                      <span className="text-gray-500">
                        {new Date(dataset.lastUpdated).toLocaleDateString()}
                      </span>
                      <span className="text-gray-500">{dataset.size}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {dataset.category}
                      </span>
                      <Link
                        href={`/repository/${dataset.id}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredDatasets.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12 text-gray-500"
                >
                  No datasets found matching your criteria
                </motion.div>
              )}
            </motion.div>
          )}

          {tab === 'reports' && (
            <div className="space-y-12">
              {themes.map(theme => {
                const themeReports = reports.filter(r => r.theme === theme.key);
                if (themeReports.length === 0) return null;
                return (
                  <div key={theme.key}>
                    <h2 className="text-2xl font-bold text-primary-700 mb-4">{theme.label}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {themeReports.map(report => (
                        <ReportCard
                          key={report.id}
                          {...report}
                          onView={() => {
                            // Open preview page (could be modal or route)
                            router.push(`/repository/reports/${report.id}`);
                          }}
                          onDownload={() => {
                            // Download PDF
                            window.open(report.file, '_blank');
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
