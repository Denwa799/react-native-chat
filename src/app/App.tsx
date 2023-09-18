import React from 'react';
import { Providers } from 'shared/providers';
import { AppTheme } from './AppTheme';

function App() {
  return (
    <Providers>
      <AppTheme />
    </Providers>
  );
}

export default App;
