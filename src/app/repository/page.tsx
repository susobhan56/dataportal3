'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { FileText, Database, ChartBar, Filter, Search, X } from 'lucide-react';
import { datasets as datasetsData } from '@/data/datasets.json';
import { reports } from '@/data/reports.json';
import ReportCard from '@/components/ReportCard';
import type { Dataset } from '@/types/dataset';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type FileType = 'all' | 'csv' | 'excel' | 'json';
type Tab = 'datasets' | 'reports' | 'factsheets' | 'sources';

const themes = [
  { key: 'demography', label: 'Demography' },
  { key: 'ageing', label: 'Ageing' },
  { key: 'health', label: 'Health' },
  { key: 'employment', label: 'Employment' },
  { key: 'migration', label: 'Migration & Urbanisation' },
  { key: 'education', label: 'Education' },
  { key: 'development', label: 'Development' },
];

const dataSources = [
  {
    heading: 'National Family Health Survey (NFHS)',
    subheading: 'Ministry of Health and Family Welfare',
    details: [
      'NFHS-1 (1992-93)',
      'NFHS-2 (1998-99)',
      'NFHS-3 (2005-06)',
      'NFHS-4 (2015-16)',
      'NFHS-5 (2019-21)',
    ],
    link: { url: 'https://www.nfhsiips.in/nfhsuser/index.php', label: 'https://www.nfhsiips.in/nfhsuser/index.php' },
    indicators: [
      'Fertility, Family Planning',
      'Infant and Child Mortality',
      'Maternal and Child Health',
      'Nutrition',
      'Anaemia',
      'HIV/AIDS Awareness',
      'Women’s Empowerment',
      'Domestic Violence',
    ],
  },
  {
    heading: 'Periodic Labour Force Survey (PLFS)',
    subheading: 'National Statistical Office (NSO)',
    details: [
      'Annual and Quarterly Reports',
      'Urban and Rural Labour Market Data',
    ],
    link: { url: 'https://www.mospi.gov.in/', label: 'https://www.mospi.gov.in/' },
    indicators: [
      'Labour Force Participation Rate',
      'Worker Population Ratio',
      'Unemployment Rate',
      'Industry and Occupation Distribution',
      'Earnings and Wages',
    ],
  },
  {
    heading: 'Unified District Information System for Education (UDISE+)',
    subheading: 'Ministry of Education',
    details: [
      'UDISE+ Reports (2018-19 onwards)',
      'District and State Level Data',
    ],
    link: { url: 'https://udiseplus.gov.in/', label: 'https://udiseplus.gov.in/' },
    indicators: [
      'School Infrastructure',
      'Enrollment and Dropout Rates',
      'Teacher Qualifications',
      'Gross Enrollment Ratio',
      'Gender Parity Index',
      'Facilities and Resources',
    ],
  },
  {
    heading: 'Sample Registration System (SRS)',
    subheading: 'Office of the Registrar General & Census Commissioner, India',
    details: [
      'Annual Statistical Reports',
      'Vital Statistics Data',
    ],
    link: { url: 'https://censusindia.gov.in/', label: 'https://censusindia.gov.in/' },
    indicators: [
      'Birth Rate',
      'Death Rate',
      'Infant Mortality Rate',
      'Maternal Mortality Ratio',
      'Life Expectancy',
    ],
  },
  {
    heading: 'National Sample Survey (NSS)',
    subheading: 'National Statistical Office (NSO)',
    details: [
      'Various Rounds on Employment, Health, Education, Consumption',
      'Unit Level and Report Data',
    ],
    link: { url: 'https://www.mospi.gov.in/', label: 'https://www.mospi.gov.in/' },
    indicators: [
      'Household Consumption',
      'Employment and Unemployment',
      'Health and Morbidity',
      'Education',
      'Social Consumption',
    ],
  },
  {
    heading: 'National Sample Survey Office (NSSO)',
    subheading: 'Periodic Labour Force Survey (PLFS)',
    details: [
      '(Annual and Quarterly Report,initiated -April 2017)',
      'Last round-January-March 2023(Quarterly Bulletin)',
    ],
    link: { url: 'https://www.mospi.gov.in/', label: 'https://www.mospi.gov.in/' },
    indicators: [
      'labour force participation rate',
      'Worker Population Ratio',
      'Distribution of workers in current weekly status',
      'Distribution of workers in current weekly status by industry',
      'Unemployment rate in current weekly status',
    ],
  },
   {
    heading: 'National Sample Survey Office (NSSO)',
    subheading: 'Periodic Labour Force Survey (PLFS)',
    details: [
      '(Annual and Quarterly Report,initiated -April 2017)',
      'Last round-January-March 2023(Quarterly Bulletin)',
    ],
    link: { url: 'https://www.mospi.gov.in/', label: 'https://www.mospi.gov.in/' },
    indicators: [
      'labour force participation rate',
      'Worker Population Ratio',
      'Distribution of workers in current weekly status',
      'Distribution of workers in current weekly status by industry',
      'Unemployment rate in current weekly status',
    ],
  },
  {
    heading: 'Longitudinal Ageing Study in India (LASI)',
    subheading: 'Wave-1-2020(Latest)',
    details: [
      '(Annual and Quarterly Report,initiated -April 2017)',
      'Last round-January-March 2023(Quarterly Bulletin)',
    ],
    link: { url: 'https://www.mospi.gov.in/', label: 'https://www.mospi.gov.in/' },
    indicators: [
      'labour force participation rate',
      'Worker Population Ratio',
      'Distribution of workers in current weekly status',
      'Distribution of workers in current weekly status by industry',
      'Unemployment rate in current weekly status',
    ],
  },
];

export default function RepositoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fileType, setFileType] = useState<FileType>('all');
  const [tab, setTab] = useState<Tab>('datasets');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');

  const allDatasets = useMemo(() => datasetsData, []);

  const filteredDatasets = useMemo(() => {
    return allDatasets.filter(dataset => {
      const matchesSearch = searchQuery === '' || 
        dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dataset.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFileType = fileType === 'all' || dataset.type === fileType;

      return matchesSearch && matchesFileType;
    });
  }, [allDatasets, searchQuery, fileType]);

  // Filtered reports by theme
  const filteredReports = useMemo(() => {
    if (selectedTheme === 'all') return reports;
    return reports.filter(r => r.theme === selectedTheme);
  }, [reports, selectedTheme]);

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
                router.push('/repository/factsheets');
              }}
            >
              Factsheets
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${tab === 'sources' ? 'border-primary-600 text-primary-700 bg-white' : 'border-transparent text-gray-500 bg-gray-50 hover:text-primary-600'}`}
              onClick={() => setTab('sources')}
            >
              Sources of Data
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
              {(searchQuery || fileType !== 'all') && (
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

                    <div className="mt-4 flex items-center justify-end gap-2">
                      <Link
                        href={`/repository/${dataset.id}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        View Details
                      </Link>
                      {dataset.file && (
                        <a
                          href={dataset.file}
                          download
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                        >
                          Download
                        </a>
                      )}
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
              {/* Theme Filter */}
              <div className="mb-6 flex flex-wrap gap-2 items-center">
                <span className="font-semibold text-gray-700 mr-2">Filter by Theme:</span>
                <button
                  className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${selectedTheme === 'all' ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-primary-50'}`}
                  onClick={() => setSelectedTheme('all')}
                >
                  All
                </button>
                {themes.map(theme => (
                  <button
                    key={theme.key}
                    className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors ${selectedTheme === theme.key ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-primary-50'}`}
                    onClick={() => setSelectedTheme(theme.key)}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>

              {/* Reports by theme (filtered) */}
              {themes.filter(theme => selectedTheme === 'all' || theme.key === selectedTheme).map(theme => {
                const themeReports = filteredReports.filter(r => r.theme === theme.key);
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
                            window.open(`/repository/reports/${report.id}`, '_blank');
                          }}
                          onDownload={() => {
                            window.open(report.file, '_blank');
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* No reports found */}
              {filteredReports.length === 0 && (
                <div className="text-center text-gray-500 py-12">No reports found for this theme.</div>
              )}
            </div>
          )}

          {/* Add a new tab content for sources */}
          {tab === 'sources' && (
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center tracking-tight">Sources of Data</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-4">
                  <thead>
                    <tr className="bg-blue-100/70">
                      <th className="px-6 py-3 text-left font-bold text-blue-800 text-lg rounded-tl-xl">Data Source</th>
                      <th className="px-6 py-3 text-left font-bold text-blue-800 text-lg rounded-tr-xl">Indicators Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataSources.map((source, idx) => (
                      <tr key={idx} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <td className={`px-6 py-5 align-top border-l-4 border-blue-400 ${idx === 0 ? 'rounded-l-xl' : ''} ${idx === dataSources.length-1 ? 'rounded-bl-xl' : ''}`}>
                          <div className="mb-2 flex items-center gap-2">
                            <span className="font-bold text-blue-700 text-lg">{source.heading}</span>
                            {source.subheading && (
                              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">{source.subheading}</span>
                            )}
                          </div>
                          {Array.isArray(source.details) ? (
                            <ul className="list-disc ml-6 text-sm text-gray-700 mb-2">
                              {source.details.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                          ) : null}
                          {source.link && (
                            <a href={source.link.url} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 underline text-sm hover:text-blue-800 transition">{source.link.label}</a>
                          )}
                        </td>
                        <td className={`px-6 py-5 align-top text-sm text-gray-700 ${idx === 0 ? 'rounded-r-xl' : ''} ${idx === dataSources.length-1 ? 'rounded-br-xl' : ''}`}>
                          <ul className={Array.isArray(source.indicators) && source.indicators.length > 1 ? 'list-disc ml-6' : ''}>
                            {source.indicators.map((ind, i) => <li key={i} className="text-black font-medium">{ind}</li>)}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
