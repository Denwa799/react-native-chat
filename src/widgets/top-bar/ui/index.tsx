import styled from '@emotion/native';
import { Text } from 'shared/ui/Text';
import { IconButton } from 'shared/ui/buttons/IconButton';

const TopBarStyled = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const IconsBlock = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TopBar = () => {
  return (
    <TopBarStyled>
      <Text isTitle>MessageApp</Text>
      <IconsBlock>
        <IconButton name="add-outline" />
        <IconButton name="ellipsis-vertical-outline" margin="0 0 0 10px" />
      </IconsBlock>
    </TopBarStyled>
  );
};
