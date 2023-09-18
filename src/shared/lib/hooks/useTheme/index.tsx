import { useContext } from 'react';
import { ThemeContext } from 'shared/providers/theme';

export const useTheme = () => useContext(ThemeContext);
