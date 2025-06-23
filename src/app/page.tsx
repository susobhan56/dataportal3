'use client';

import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import ContentCard from '@/components/ContentCard';
import { recentContent } from '@/data/contents.json';
import { motion, AnimatePresence } from 'framer-motion';
import type { Content, ContentType } from '@/types/content';
import { Bell } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  // Animation variants for staggered content appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Sort by lastUpdated descending and take only the 6 most recent
  const sortedContent = [...recentContent].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
  const typedContent = sortedContent.slice(0, 6).map(content => ({
    ...content,
    type: content.type as ContentType
  }));

  // Notification count: number of articles updated in the last 3 days
  const now = new Date();
  const notificationCount = recentContent.filter(content => {
    const updated = new Date(content.lastUpdated);
    const diff = (now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 3;
  }).length;

  // Search state and handler
  const [searchResults, setSearchResults] = useState<typeof typedContent | null>(null);

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchResults(null);
      return;
    }
    const lower = query.toLowerCase();
    const filtered = sortedContent.filter(content =>
      content.title.toLowerCase().includes(lower) ||
      content.abstract.toLowerCase().includes(lower) ||
      content.theme.toLowerCase().includes(lower)
    ).map(content => ({
      ...content,
      type: content.type as ContentType
    }));
    setSearchResults(filtered);
  };

  return (
    <Layout>
      <Banner onSearch={handleSearch} />
      
      {/* Recent Content Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recently Updated Content
          <span className="relative inline-block group">
            <motion.span
              whileHover={{ rotate: [0, -20, 20, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Bell className="w-7 h-7 text-primary-500" />
            </motion.span>
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {notificationCount}
              </span>
            )}
          </span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {(searchResults !== null ? searchResults : typedContent).map(content => (
            <ContentCard
              key={content.id}
              id={content.id}
              title={content.title}
              theme={content.theme}
              abstract={content.abstract}
              thumbnail={content.thumbnail}
              type={content.type}
              lastUpdated={content.lastUpdated}
            />
          ))}
        </motion.div>

        {searchResults !== null && searchResults.length === 0 && (
          <div className="text-center text-gray-500 mt-8">No results found.</div>
        )}
      </section>
    </Layout>
  );
}
