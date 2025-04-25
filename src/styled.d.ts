import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      secondary: string;
      danger: string;
      white: string;
    };
  }
}
