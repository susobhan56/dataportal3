'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { usePathname } from 'next/navigation';

interface Theme {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

interface SidebarProps {
  themes: Theme[];
  currentTheme: string;
}

export default function Sidebar({ themes, currentTheme }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Themes</h2>
        <nav className="space-y-2">
          {themes.map((theme) => {
            const Icon = Icons[theme.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            const isActive = theme.slug === currentTheme;

            return (
              <Link key={theme.id} href={`/themes/${theme.slug}`}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{theme.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-indicator"
                      className="w-1 h-full absolute right-0 bg-indigo-600"
                      animate
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Filters Section */}
      <div className="border-t border-gray-100 p-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Filter By</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Content Type</label>
            <div className="mt-2 space-y-2">
              {['Charts', 'Reports', 'Datasets'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Time Period</label>
            <div className="mt-2 space-y-2">
              {['Last 30 days', 'Last 3 months', 'Last year'].map((period) => (
                <label key={period} className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{period}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
