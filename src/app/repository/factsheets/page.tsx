'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import FactsheetCard from '@/components/FactsheetCard';
import FileViewer from '@/components/FileViewer';
import { factsheets } from '@/data/factsheets';
import { AnimatePresence, motion } from 'framer-motion';

export default function FactsheetsPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = (pdfUrl: string) => {
    setPreviewUrl(pdfUrl);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setPreviewUrl(null);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Factsheets</h1>
          <p className="text-lg text-gray-600">Download and preview key factsheets for Odisha</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {factsheets.map(f => (
            <FactsheetCard
              key={f.id}
              id={f.id}
              title={f.title}
              abstract={f.abstract}
              thumbnail={f.thumbnail}
              lastUpdated={f.lastUpdated}
              onView={() => handleView(f.pdf)}
              onDownload={() => window.open(f.pdf, '_blank')}
            />
          ))}
        </div>
        <AnimatePresence>
          {modalOpen && previewUrl && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full relative"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={e => e.stopPropagation()}
              >
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleClose}>&times;</button>
                <FileViewer url={previewUrl} type="pdf" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
}