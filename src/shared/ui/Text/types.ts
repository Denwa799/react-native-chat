import { ReactNode } from 'react';

export interface IText {
  children: ReactNode;
  type: 'text' | 'subtitle' | 'title';
}

export type StyleType = {
  fontSize: string;
};
