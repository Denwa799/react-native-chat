import styled from '@emotion/native';
import { Button } from 'shared/ui/buttons/Button';
import { Avatar } from 'shared/ui/Avatar';

const ChatCardStyled = styled.View`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid ${props => props.theme.color.secondary};
  border-top-width: 1px;
  border-left-width: 0;
  border-bottom-width: 0;
  border-right-width: 0;
`;

export const ChatCard = () => {
  return (
    <ChatCardStyled>
      <Button isFullHeight isFullWidth isDisabledRadius>
        <Avatar
          source={{
            uri: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          }}
        />
      </Button>
    </ChatCardStyled>
  );
};
