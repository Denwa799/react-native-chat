import styled from '@emotion/native';
import { IMainLayout } from './types';

const Layout = styled.View`
  height: 100%;
  background: green;
`;

export const MainLayout = ({ children }: IMainLayout) => {
  return <Layout>{children}</Layout>;
};
