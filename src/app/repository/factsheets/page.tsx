'use client';

import { factsheets } from '@/data/factsheets.json';
import Layout from '@/components/Layout';
import FactsheetCard from '@/components/FactsheetCard';
import { useRouter } from 'next/navigation';

export default function FactsheetsPage() {
  const router = useRouter();
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-700 mb-8 text-center">Factsheets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factsheets.map(factsheet => (
              <FactsheetCard
                key={factsheet.id}
                {...factsheet}
                onView={() => router.push(`/repository/factsheets/${factsheet.id}`)}
                onDownload={() => window.open(factsheet.file, '_blank')}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
