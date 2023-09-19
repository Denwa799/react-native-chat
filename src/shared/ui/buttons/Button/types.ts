import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  margin?: string;
  isDisableSound?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}
