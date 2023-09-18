import styled from '@emotion/native';
import { IContainer } from './types';

const Layout = styled.View`
  padding: 0 10px;
`;

export const Container = ({ children }: IContainer) => {
  return <Layout>{children}</Layout>;
};
