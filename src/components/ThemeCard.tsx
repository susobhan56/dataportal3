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
    <Link href={`/themes/${slug}`} prefetch={false}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full flex-1"
      >
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-100 rounded-full">
              {useImageIcon ? (
                <img src={iconPath} alt={icon} className="w-12 h-12 object-contain" />
              ) : (
                <Icon className="w-12 h-12 text-primary-600" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-blue-900">
              {name}
            </h3>
          </div>
          <p className="text-green-600 flex-1">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
