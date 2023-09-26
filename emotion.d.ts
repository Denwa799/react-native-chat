import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      background2: string;
      text: string;
    };
    fontSize: {
      title: string;
      subtitle: string;
      text: string;
    };
    size: {
      main: number;
      small: number;
    };
    radius: {
      main: string;
    };
    transition: {
      main: string;
    };
    shadow: {
      main: {
        shadowColor: string;
        shadowOffset: {
          width: number;
          height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
    };
  }
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react';
import { LibTheme } from 'some-lib';

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
