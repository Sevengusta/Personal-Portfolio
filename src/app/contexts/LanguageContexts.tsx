import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'themeContextKey';

type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem(STORAGE_KEY) || 'English' || 'Portuguese');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const contextValue: ThemeContext = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext)