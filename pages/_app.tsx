import '../styles/globals.css';
import type { AppProps } from 'next/app';
import createEmotionCache from '../@core/createEmotionCache';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from '../@core/theme';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

interface NextAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const NextApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: NextAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default NextApp;
