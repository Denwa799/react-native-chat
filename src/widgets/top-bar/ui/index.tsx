import styled from '@emotion/native';
import { ActionBar } from 'features/action-menu';
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
      <Text type="title">MessageApp</Text>
      <IconsBlock>
        <IconButton name="add-outline" />
        <ActionBar />
      </IconsBlock>
    </TopBarStyled>
  );
};
