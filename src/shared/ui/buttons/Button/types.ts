import { ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  margin?: string;
  isDisableSound?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  isDisabledRadius?: boolean;
  onPress?: () => void;
}
