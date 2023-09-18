import { FC, createContext, useCallback, useMemo, useState } from 'react';
import { IThemeContext, IThemeProvider } from './types';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const onSetTheme = useCallback((theme: string) => {
    setTheme(theme);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      onSetTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
