'use client';

import { motion } from 'framer-motion';
import { Users, Heart, GraduationCap, PersonStanding, Move, Briefcase, Globe, LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Map icon names to Lucide icons
const IconMap: Record<string, LucideIcon> = {
  users: Users,
  heart: Heart,
  'graduation-cap': GraduationCap,
  'person-standing': PersonStanding,
  move: Move,
  briefcase: Briefcase,
  globe: Globe, // Example: add Globe icon
};

interface ThemeCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export default function ThemeCard({ id, name, description, icon, slug }: ThemeCardProps) {
  // If icon matches a file in /icons, use that image, else use Lucide icon
  const iconPath = `/icons/${icon}.gif`;
  const useImageIcon = [
    'ageing', 'demography', 'education', 'employement', 'health', 'urban'
  ].includes(icon);
  const Icon = IconMap[icon] || Users;

  return (
    <Link href="/">
      <motion.div
        whileHover={{ y: -4, scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 180, damping: 28, duration: 0.7 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="p-3 bg-primary-100 rounded-full"
              whileHover={{ rotate: 12, scale: 1.13, boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              whileTap={{ rotate: -8, scale: 0.95 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.18, duration: 0.6 }}
            >
              {useImageIcon ? (
                <img src={iconPath} alt={icon} className="w-16 h-16 object-contain" />
              ) : (
                <Icon className="w-16 h-16 text-primary-600" />
              )}
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-blue-900"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32, type: 'spring', stiffness: 120, duration: 0.5 }}
            >
              {name}
            </motion.h3>
          </div>
          <motion.p
            className="text-green-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, type: 'spring', stiffness: 100, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
}
