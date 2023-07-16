import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/themes/defaultTheme';
import GlobalStyle from '../styles/themes/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
