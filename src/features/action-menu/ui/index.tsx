import { useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { IconButton } from 'shared/ui/buttons/IconButton';
import { ModalCard } from './ModalCard';

export const ActionBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onPress = () => {
    setIsVisible(true);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <IconButton name="ellipsis-vertical-outline" onPress={onPress} />
      <Modal isVisible={isVisible} onClose={onClose}>
        <ModalCard />
      </Modal>
    </>
  );
};
