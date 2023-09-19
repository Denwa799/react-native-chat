import { useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useAppTheme } from 'shared/lib/hooks/useAppTheme';
import { AppNavigation } from './navigation';

const lightTheme = {
  color: {
    primary: '#2e9ffb',
    secondary: '#e5e6ea',
    background: '#fff',
    text: '#000',
  },
  fontSize: {
    title: '24px',
    text: '14px',
  },
  size: {
    main: 24,
  },
  radius: {
    main: '6px',
  },
};

const darkTheme = {
  color: {
    primary: '#2e9ffb',
    secondary: '#e5e6ea',
    background: '#111113',
    text: '#f1f1f1',
  },
  fontSize: {
    title: '24px',
    text: '14px',
  },
  size: {
    main: 24,
  },
  radius: {
    main: '6px',
  },
};

export const AppTheme = () => {
  const { appTheme } = useAppTheme();
  const currentTheme = useMemo(() => {
    switch (appTheme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  }, [appTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <AppNavigation />
    </ThemeProvider>
  );
};
