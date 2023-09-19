import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IBottomButton } from './types';

export const BottomButton = ({ iconName, routeName }: IBottomButton) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const isFocused = navigation.isFocused();

  const onPress = () => {
    navigation?.navigate(routeName as never);
  };

  return (
    <View
      style={css`
        width: 50%;
        height: 100%;
      `}>
      <Pressable
        android_ripple={{ color: theme.color.secondary, borderless: true }}
        android_disableSound
        style={css`
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        `}
        onPress={onPress}>
        <Ionicon
          name={iconName}
          size={theme.size.main}
          color={isFocused ? theme.color.primary : theme.color.text}
        />
      </Pressable>
    </View>
  );
};
