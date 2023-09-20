import styled from '@emotion/native';
import { Button } from 'shared/ui/buttons/Button';
import { Avatar } from 'shared/ui/Avatar';
import { TextContent } from './TextContent';
import { Time } from './Time';

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

export const ChatCard = () => {
  return (
    <ChatCardStyled>
      <Button isFullHeight isFullWidth isDisabledRadius>
        <Content>
          <Avatar
            source={{
              uri: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            }}
          />
          <TextContent
            title="lorem Lorem ipsum dolor Lorem ipsum dolor"
            text="Lorem Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Dolorem est
          vel "
          />
          <Time dateString="2021-09-20T18:21:32.854Z" />
        </Content>
      </Button>
    </ChatCardStyled>
  );
};
