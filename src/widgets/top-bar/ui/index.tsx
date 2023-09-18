import { Text } from 'react-native';
import styled from '@emotion/native';

const TopBarStyled = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TopBar = () => {
  return (
    <TopBarStyled>
      <Text>Main</Text>
      <Text>Main</Text>
    </TopBarStyled>
  );
};
