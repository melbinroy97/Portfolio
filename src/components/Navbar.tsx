import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeItem, setActiveItem] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full px-4"
    >
      <nav className="glass-nav flex items-center gap-2 px-2 py-2 rounded-full shadow-lg relative">
        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center relative">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative flex items-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X size={16} className="text-[color:var(--foreground)]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Menu size={16} className="text-[color:var(--foreground)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-4 left-4 right-4 md:hidden glass-nav rounded-2xl shadow-xl p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`px-4 py-3 text-sm font-bold tracking-widest transition-colors rounded-xl ${
                    activeItem === item.name 
                      ? 'text-[color:var(--primary)] bg-black/5 dark:bg-white/10' 
                      : 'text-[color:var(--foreground)] hover:opacity-70 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
