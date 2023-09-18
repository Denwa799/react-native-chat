import { FC } from 'react';
import { IProviderComposer, IProviders } from './types';
import { ThemeProvider } from './theme';

const provider = (item: any, props = {}) => [item, props];

const ProviderComposer: FC<IProviderComposer> = ({ providers, children }) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }
  return children;
};

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ProviderComposer providers={[provider(ThemeProvider)]}>
      {children}
    </ProviderComposer>
  );
};
