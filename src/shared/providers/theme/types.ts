import { ReactNode } from 'react';

export interface IThemeProvider {
  children: ReactNode;
}

export interface IThemeContext {
  theme: string;
  onSetTheme: (value: string) => void;
}
