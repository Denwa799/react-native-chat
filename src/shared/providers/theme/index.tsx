import { FC, createContext, useCallback, useMemo, useState } from 'react';
import { IThemeContext, IThemeProvider } from './types';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [appTheme, setAppTheme] = useState('light');

  const onSetTheme = useCallback((theme: string) => {
    setAppTheme(theme);
  }, []);

  const value = useMemo(
    () => ({
      appTheme,
      onSetTheme,
    }),
    [appTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
