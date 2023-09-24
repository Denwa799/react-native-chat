import { View, Pressable } from 'react-native';
import { useTheme } from '@emotion/react';
import { css } from '@emotion/native';
import { IButton } from './types';

export const Button = ({
  children,
  margin,
  isDisableSound = true,
  isDisabled = false,
  isFullWidth = false,
  isFullHeight = false,
  isDisabledRadius = false,
  onPress,
}: IButton) => {
  const theme = useTheme();

  const onPressHandler = () => {
    if (onPress) onPress();
  };

  return (
    <View
      style={css`
        width: ${isFullWidth && '100%'};
        height: ${isFullHeight && '100%'};
        margin: ${margin};
        border-radius: ${isDisabledRadius ? 0 : theme.radius.main};
      `}>
      <Pressable
        android_ripple={{ color: theme.color.secondary, borderless: true }}
        android_disableSound={isDisableSound}
        disabled={isDisabled}
        style={css`
          padding: 5px 10px;
          display: flex;
          justify-content: center;
          // border-radius: ${isDisabledRadius ? 0 : theme.radius.main};
          width: ${isFullWidth && '100%'};
          height: ${isFullHeight && '100%'};
        `}
        onPress={onPressHandler}>
        {children}
      </Pressable>
    </View>
  );
};
