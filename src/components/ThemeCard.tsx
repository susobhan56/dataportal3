'use client';

import { motion } from 'framer-motion';
import { Users, Heart, GraduationCap, PersonStanding, Move, Briefcase, LucideIcon } from 'lucide-react';
import Link from 'next/link';

// Map theme IDs to their respective Lucide icons
const ThemeIcons: Record<string, LucideIcon> = {
  demography: Users,
  health: Heart,
  education: GraduationCap,
  ageing: PersonStanding,
  migration: Move,
  employment: Briefcase,
};

interface ThemeCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export default function ThemeCard({ id, name, description, icon, slug }: ThemeCardProps) {
  const Icon = ThemeIcons[id] || Users; // Fallback to Users icon if not found

  return (
    <Link href={`/themes/${slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-100 rounded-full">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {name}
            </h3>
          </div>
          
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
