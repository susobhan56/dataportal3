'use client';

import { motion } from 'framer-motion';
import ContentCard from '@/components/ContentCard';
import { Users, Heart, GraduationCap, PersonStanding, Move, Briefcase } from 'lucide-react';
import type { Theme } from '@/types/theme';
import type { Content, ContentType } from '@/types/content';

// Map theme IDs to their respective Lucide icons
const ThemeIcons = {
  'demography': Users,
  'health': Heart,
  'education': GraduationCap,
  'ageing': PersonStanding,
  'migration': Move,
  'employment': Briefcase,
} as const;

interface ThemeContentProps {
  theme: Theme;
  content: Content[];
}

export default function ThemeContent({ theme, content }: ThemeContentProps) {
  const ThemeIcon = ThemeIcons[theme.id as keyof typeof ThemeIcons] || Users;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-primary-100 rounded-full"
          >
            <ThemeIcon className="w-8 h-8 text-primary-600" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme.name}
          </motion.h1>
        </div>
        
        <motion.p 
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {theme.description}
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {content.map((item) => (
          <ContentCard
            key={item.id}
            id={item.id}
            title={item.title}
            theme={item.theme}
            abstract={item.abstract}
            thumbnail={item.thumbnail}
            type={item.type as ContentType}
            lastUpdated={item.lastUpdated}
          />
        ))}
        
        {content.length === 0 && (
          <motion.p 
            className="col-span-full text-center text-gray-600 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No content available for this theme yet.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
