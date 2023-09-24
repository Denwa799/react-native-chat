import styled from '@emotion/native';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/buttons/Button';

const Card = styled.View`
  padding: 10px 0;
  position: absolute;
  top: 64px;
  right: 5px;
  width: 130px;
  height: 64px;
  background: ${props => props.theme.color.background};
  border-radius: ${props => props.theme.radius.main};
  ${props => props.theme.shadow.main}
`;
const ButtonContainer = styled.View`
  height: 40px;
  background: ${props => props.theme.color.background};
`;

export const ModalCard = () => {
  return (
    <Card>
      <ButtonContainer>
        <Button isFullHeight isFullWidth isDisabledRadius>
          <Text type="subtitle">Настройки</Text>
        </Button>
      </ButtonContainer>
    </Card>
  );
};
