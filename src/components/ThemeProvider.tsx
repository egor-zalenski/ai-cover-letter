'use client'

import { StorageKeys } from '@/constants/storage'
import { Maybe, Nullable } from '@/interfaces/types';
import { localStorageService } from '@/services/storage'
import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  PropsWithChildren,
} from 'react'

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Maybe<ThemeContextType>>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default function ThemeProvider({ children }: PropsWithChildren) {
  // Initialize with system default preference to avoid flash
  const [theme, setTheme] = useState<Theme>('light')
  // Remove the mounted state and use a different approach
  
  useEffect(() => {
    // Apply theme immediately on mount
    const savedTheme = localStorageService?.get(StorageKeys.THEME) as Nullable<Theme>
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.dataset.theme = savedTheme
    } else {
      // If no saved theme, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme: Theme = prefersDark ? 'dark' : 'light'
      setTheme(systemTheme)
      document.body.dataset.theme = systemTheme
      localStorageService?.set(StorageKeys.THEME, systemTheme)
    }
  }, [])

  // Update theme when it changes
  useEffect(() => {
    document.body.dataset.theme = theme
    localStorageService?.set(StorageKeys.THEME, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 