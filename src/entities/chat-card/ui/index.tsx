import styled from '@emotion/native';
import { Button } from 'shared/ui/buttons/Button';
import { Avatar } from 'shared/ui/Avatar';
import { TextContent } from './TextContent';
import { Time } from './Time';
import { IChatCard } from './types';

const ChatCardStyled = styled.View`
  position: relative;
  height: 74px;
  border: solid ${props => props.theme.color.secondary};
  border-top-width: 1px;
  border-left-width: 0;
  border-bottom-width: 0;
  border-right-width: 0;
`;
const Content = styled.View`
  flex-direction: row;
`;

export const ChatCard = ({
  id,
  title,
  text,
  avatar,
  dateString,
}: IChatCard) => {
  const onPress = () => {
    console.log('chat press');
  };

  return (
    <ChatCardStyled>
      <Button isFullHeight isFullWidth isDisabledRadius onPress={onPress}>
        <Content>
          <Avatar
            source={{
              uri: avatar,
            }}
          />
          <TextContent title={title} text={text} />
          <Time dateString={dateString} />
        </Content>
      </Button>
    </ChatCardStyled>
  );
};
