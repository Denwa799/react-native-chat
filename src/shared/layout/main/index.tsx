import styled from '@emotion/native';
import { IMainLayout } from './types';

const Layout = styled.View`
  padding-top: 20px;
  height: 100%;
  background-color: ${props => props.theme.color.background};
`;

export const MainLayout = ({ children }: IMainLayout) => {
  return <Layout>{children}</Layout>;
};
