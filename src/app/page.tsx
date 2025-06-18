'use client';

import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import ContentCard from '@/components/ContentCard';
import { recentContent } from '@/data/contents.json';
import { motion, AnimatePresence } from 'framer-motion';
import type { Content, ContentType } from '@/types/content';

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

  const typedContent = recentContent.map(content => ({
    ...content,
    type: content.type as ContentType
  }));

  return (
    <Layout>
      <Banner />
      
      {/* Recent Content Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recently Updated Content
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
