import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}
