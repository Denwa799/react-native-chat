import { ReactNode } from 'react';

export interface IThemeProvider {
  children: ReactNode;
}

export interface IThemeContext {
  appTheme: string;
  onSetTheme: (value: string) => void;
}
