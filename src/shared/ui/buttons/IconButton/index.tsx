import { useTheme } from '@emotion/react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'shared/ui/buttons/Button';
import { IIconButton } from './types';

export const IconButton = ({ name, margin, onPress }: IIconButton) => {
  const theme = useTheme();

  return (
    <Button margin={margin} onPress={onPress}>
      <Ionicon name={name} size={theme.size.main} color={theme.color.primary} />
    </Button>
  );
};
