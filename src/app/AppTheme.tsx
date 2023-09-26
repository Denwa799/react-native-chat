import { useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useAppTheme } from 'shared/lib/hooks/useAppTheme';
import { AppNavigation } from './navigation';

const lightTheme = {
  color: {
    primary: '#2e9ffb',
    secondary: '#e5e6ea',
    accent: '#a1a1a1',
    background: '#fff',
    background2: '#f6f6f6',
    text: '#000',
  },
  fontSize: {
    title: '24px',
    subtitle: '18px',
    text: '14px',
  },
  size: {
    main: 24,
    small: 18,
  },
  radius: {
    main: '6px',
  },
  transition: {
    main: '0.3s',
  },
  shadow: {
    main: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 3,
    },
  },
};

const darkTheme = {
  color: {
    primary: '#2e9ffb',
    secondary: '#e5e6ea',
    accent: '#a1a1a1',
    background: '#111113',
    background2: '#111113',
    text: '#f1f1f1',
  },
  fontSize: {
    title: '24px',
    subtitle: '18px',
    text: '14px',
  },
  size: {
    main: 24,
    small: 18,
  },
  radius: {
    main: '6px',
  },
  transition: {
    main: '0.3s',
  },
  shadow: {
    main: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 10,
      elevation: 3,
    },
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
