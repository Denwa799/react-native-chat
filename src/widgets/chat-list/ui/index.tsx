import { FlatList } from 'react-native';
import styled from '@emotion/native';
import { ChatCard } from 'entities/chat-card/ui';
import { data } from './data';

const View = styled.View`
  margin-top: 10px;
  padding-left: 10px;
`;

export const ChatList = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatCard
            id={item.id}
            title={item.title}
            text={item.text}
            avatar={item.avatar}
            dateString={item.dateString}
          />
        )}
      />
    </View>
  );
};
