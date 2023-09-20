import { Text } from 'react-native';
import styled from '@emotion/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@emotion/react';
import { ITime } from './types';

const TimeStyled = styled.View`
  position: absolute;
  right: 0;
  height: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Time = ({ dateString }: ITime) => {
  const theme = useTheme();

  const date = new Date(dateString);
  const currentDate = new Date();
  const isToday = date.toDateString() === currentDate.toDateString();

  return (
    <TimeStyled>
      <Text>
        {isToday
          ? date.toLocaleTimeString('ru-RU')
          : date.toLocaleDateString('ru-RU')}
      </Text>
      <Ionicon
        name="chevron-forward-outline"
        size={theme.size.small}
        color={theme.color.accent}
      />
    </TimeStyled>
  );
};
