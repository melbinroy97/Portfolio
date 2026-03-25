import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('HOME');

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full px-4"
    >
      <nav className="glass-nav flex items-center gap-2 px-2 py-2 rounded-full shadow-lg">
        <div className="flex items-center relative">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`px-4 py-2 text-[10px] font-bold tracking-widest transition-colors relative z-10 ${
                activeItem === item.name ? 'text-[color:var(--primary)]' : 'text-[color:var(--foreground)] hover:opacity-70'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {item.name}
              {activeItem === item.name && (
                <motion.span 
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="w-[1px] h-4 bg-white/10 mx-2" />

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative flex items-center w-12 h-6 rounded-full bg-black/10 dark:bg-white/10 p-1 cursor-pointer transition-colors"
          aria-label="Toggle theme"
        >
          <motion.div
            layout
            className="w-4 h-4 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center shadow-sm"
            animate={{ x: theme === 'dark' ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {theme === 'dark' ? <Moon size={10} className="text-white" /> : <Sun size={10} className="text-black" />}
          </motion.div>
        </button>
      </nav>
    </motion.div>
  );
}
