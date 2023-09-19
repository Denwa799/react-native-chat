import { SafeAreaView } from 'react-native';
import { TopBar } from 'widgets/top-bar';
import { ChatList } from 'widgets/chat-list';
import { Container } from 'shared/layout/container';
import { MainLayout } from 'shared/layout/main';

export const MainScreen = () => {
  return (
    <MainLayout>
      <SafeAreaView>
        <Container>
          <TopBar />
        </Container>
        <ChatList />
      </SafeAreaView>
    </MainLayout>
  );
};
