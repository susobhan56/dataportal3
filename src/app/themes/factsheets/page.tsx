'use client'

import Layout from '@/components/Layout';
import { factsheets } from '@/data/factsheets';
import FactsheetCard from '@/components/FactsheetCard';
import FileViewer from '@/components/FileViewer';
import { useState } from 'react';

export default function FactsheetsPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewType, setPreviewType] = useState<'pdf' | null>(null);

  const handleView = (file: string) => {
    setPreviewUrl(file);
    setPreviewType('pdf');
  };
  const handleClose = () => {
    setPreviewUrl(null);
    setPreviewType(null);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Factsheets</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {factsheets.map((item) => (
            <FactsheetCard
              key={item.id}
              id={item.id}
              title={item.title}
              abstract={item.abstract}
              thumbnail={item.thumbnail}
              lastUpdated={item.lastUpdated}
              onView={() => handleView(item.pdf)}
              onDownload={() => window.open(item.pdf, '_blank')}
            />
          ))}
        </div>
        {previewUrl && previewType === 'pdf' && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full relative">
              <button onClick={handleClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
              <FileViewer url={previewUrl} type="pdf" />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
