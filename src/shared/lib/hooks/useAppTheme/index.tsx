import { useContext } from 'react';
import { ThemeContext } from 'shared/providers/theme';

export const useAppTheme = () => useContext(ThemeContext);
