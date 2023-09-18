import { ReactElement } from 'react';

export interface IProviders {
  children: ReactElement;
}

export interface IProviderComposer {
  providers: any[];
  children: ReactElement;
}
