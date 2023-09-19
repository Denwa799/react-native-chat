import { Text as RNText } from 'react-native';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import { IText } from './types';

export const Text = ({ children, isTitle = false }: IText) => {
  const theme = useTheme();

  return (
    <RNText
      style={css`
        font-size: ${isTitle ? theme.fontSize.title : theme.fontSize.text};
        color: ${theme.color.text};
      `}>
      {children}
    </RNText>
  );
};
