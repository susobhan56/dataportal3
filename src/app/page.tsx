'use client';

import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import ContentCard from '@/components/ContentCard';
import { recentContent } from '@/data/contents.json';
import { motion, AnimatePresence } from 'framer-motion';
import type { Content, ContentType } from '@/types/content';
import { Bell } from 'lucide-react';

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

  return (
    <Layout>
      <Banner />
      
      {/* Recent Content Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recently Updated Content
          <span className="relative inline-block">
            <Bell className="w-7 h-7 text-primary-500" />
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
          {typedContent.map((content) => (
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
      </section>
    </Layout>
  );
}
