import styled from '@emotion/native';
import { IAvatar } from './types';

const Image = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Avatar = ({ source }: IAvatar) => {
  return <Image source={source} resizeMode="cover" />;
};
