import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      black: string;
      white: string;
      transparent: string;
      background: string;
      blue: string;
      lightblue: string;
      lighterblue: string;
      lightestblue: string;
      gray: string;
      darkgray: string;
      red: string;
    };
  }
}
