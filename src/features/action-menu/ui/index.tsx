import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { IconButton } from 'shared/ui/buttons/IconButton';
import { ModalCard } from './ModalCard';

export const ActionBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const onPress = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsClose(true);
  };

  const onSetVisible = (value: boolean) => {
    setIsVisible(value);
    setIsClose(false);
  };

  return (
    <>
      <IconButton name="ellipsis-vertical-outline" onPress={onPress} />
      <Modal isVisible={isVisible} onClose={onClose}>
        <ModalCard isClose={isClose} onSetVisible={onSetVisible} />
      </Modal>
    </>
  );
};
