'use client';

import { factsheets } from '@/data/factsheets.json';
import Layout from '@/components/Layout';
import FactsheetCard from '@/components/FactsheetCard';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

export default function FactsheetsPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const filteredFactsheets = useMemo(() => {
    return factsheets.filter(f =>
      search === '' ||
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-700 mb-8 text-center">Factsheets</h1>
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search factsheets..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          {search && (
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm">
                Search: {search}
                <button
                  onClick={() => setSearch('')}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFactsheets.map(factsheet => (
              <FactsheetCard
                key={factsheet.id}
                {...factsheet}
                onView={() => router.push(`/repository/factsheets/${factsheet.id}`)}
                onDownload={() => window.open(factsheet.file, '_blank')}
              />
            ))}
            {filteredFactsheets.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-500">
                No factsheets found matching your criteria
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
