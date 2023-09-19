import React from 'react';
import { useTheme } from '@emotion/react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './Bottom';

export const AppNavigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: theme.color.primary,
          background: theme.color.background,
          text: theme.color.text,
          border: theme.color.secondary,
        },
      }}>
      <BottomNavigation />
    </NavigationContainer>
  );
};
