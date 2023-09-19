import { View } from 'react-native';
import { useTheme } from '@emotion/react';
import styled, { css } from '@emotion/native';
import { IButton } from './types';

const PressableStyle = styled.Pressable`
  padding: 5px 10px;
  border-radius: ${props => props.theme.radius.main};
`;

export const Button = ({
  children,
  margin,
  isDisableSound = true,
  isDisabled = false,
  onPress,
}: IButton) => {
  const theme = useTheme();

  const onPressHandler = () => {
    if (onPress) onPress();
  };

  return (
    <View
      style={css`
        margin: ${margin};
        border-radius: ${theme.radius.main};
      `}>
      <PressableStyle
        android_ripple={{ color: theme.color.secondary, borderless: true }}
        android_disableSound={isDisableSound}
        disabled={isDisabled}
        onPress={onPressHandler}>
        {children}
      </PressableStyle>
    </View>
  );
};
