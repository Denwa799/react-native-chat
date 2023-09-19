import styled from '@emotion/native';
import { ChatCard } from 'entities/chat-card/ui';

const View = styled.View`
  margin-top: 10px;
  padding-left: 10px;
`;

export const ChatList = () => {
  return (
    <View>
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </View>
  );
};
