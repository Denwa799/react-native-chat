import { Text as RNText } from 'react-native';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import { IText, StyleType } from './types';
import { useEffect, useState } from 'react';

export const Text = ({ children, type = 'text' }: IText) => {
  const theme = useTheme();

  const [style, setStyle] = useState<StyleType>({
    fontSize: theme.fontSize.text,
  });

  useEffect(() => {
    switch (type) {
      case 'text':
        setStyle(prev => {
          return { ...prev, fontSize: theme.fontSize.text };
        });
        break;
      case 'subtitle':
        setStyle(prev => {
          return { ...prev, fontSize: theme.fontSize.subtitle };
        });
        break;
      case 'title':
        setStyle(prev => {
          return { ...prev, fontSize: theme.fontSize.title };
        });
        break;
      default:
        setStyle(prev => {
          return { ...prev, fontSize: theme.fontSize.text };
        });
    }
  }, [type]);

  return (
    <RNText
      style={css`
        font-size: ${style.fontSize};
        color: ${theme.color.text};
      `}>
      {children}
    </RNText>
  );
};
