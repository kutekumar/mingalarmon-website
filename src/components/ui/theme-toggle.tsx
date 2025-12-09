import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: isDark ? '#8A0707' : '#000000' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: isDark ? '#000000' : '#8A0707' }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="relative z-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-white" />
          ) : (
            <Sun className="w-5 h-5 text-white" />
          )}
        </motion.div>
      </div>
    </motion.button>
  );
};