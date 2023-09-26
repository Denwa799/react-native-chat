import { FC, useEffect } from 'react';
import styled from '@emotion/native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/buttons/Button';

import { IModalCard } from './types';

const Card = styled.View`
  padding: 10px 0;
  width: 130px;
  height: 64px;
  background: ${props => props.theme.color.background2};
  border-radius: ${props => props.theme.radius.main};
  ${props => props.theme.shadow.main}
`;
const ButtonContainer = styled.View`
  height: 40px;
  background: ${props => props.theme.color.background2};
`;

export const ModalCard: FC<IModalCard> = ({ isClose, onSetVisible }) => {
  const height = useSharedValue(0);
  const duration = 100;

  useEffect(() => {
    height.value = withTiming(64, {
      duration,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, []);

  useEffect(() => {
    if (isClose) {
      height.value = withTiming(0, {
        duration,
        easing: Easing.inOut(Easing.quad),
      });

      const timer = setTimeout(() => {
        onSetVisible(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isClose]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 64,
        right: 5,
        width: 130,
        overflow: 'hidden',
        height,
      }}>
      <Card>
        <ButtonContainer>
          <Button isFullHeight isFullWidth isDisabledRadius>
            <Text type="subtitle">Настройки</Text>
          </Button>
        </ButtonContainer>
      </Card>
    </Animated.View>
  );
};
