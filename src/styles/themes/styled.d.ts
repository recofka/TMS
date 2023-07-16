import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      black: string;
      white: string;
      transparent: string;
      blue: string;
      darkblue: string;
      lighterblue: string;
      gray: string;
      darkgray: string;
      purple: string;
      red: string;
      green: string;
    };
  }
}
