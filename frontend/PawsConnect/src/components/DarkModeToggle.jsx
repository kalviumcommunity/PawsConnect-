import React from 'react';
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from '../components/context/DarkModeContext';

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="theme-controls">
      {/* Simple toggle using just a button */}
      <button 
        onClick={toggleDarkMode} 
        className="dark-mode-btn flex items-center gap-2 px-3 py-2 rounded-md bg-opacity-15 transition-all"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <>
            <Sun className="h-4 w-4" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
};