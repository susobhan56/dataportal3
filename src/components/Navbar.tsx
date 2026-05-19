'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/themes', label: 'Themes' },
  { href: '/repository', label: 'Repository' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-lg md:text-2xl font-bold text-indigo-600">
              Odisha Data Portal
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span className={`text-sm font-medium ${
                    isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                      animate
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-medium px-2 py-1 rounded-md ${
                        isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
