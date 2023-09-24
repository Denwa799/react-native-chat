import { Modal as RNModal } from 'react-native';
import styled from '@emotion/native';
import { IModal } from './types';

const Wrapper = styled.TouchableOpacity`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

export const Modal = ({ children, isVisible, onClose }: IModal) => {
  return (
    <RNModal visible={isVisible} transparent onRequestClose={onClose}>
      <Wrapper activeOpacity={0} onPress={onClose} />
      {children}
    </RNModal>
  );
};
