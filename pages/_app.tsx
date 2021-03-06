import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import createEmotionCache from '../js/@core/createEmotionCache';
import theme from '../js/@core/theme';
import DrawerLayout from '../js/layouts/DrawerLayout';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface NextAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPage;
}

nProgress.configure({
  showSpinner: true,
  parent: '#main',
  easing: 'ease-out',
  speed: 200,
});

Router.events.on('routeChangeStart', () => {
  nProgress.start();
});
Router.events.on('routeChangeError', () => {
  nProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  nProgress.done();
});

const NextApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: NextAppProps) => {
  // Variables

  const getLayout =
    Component.getLayout || (page => <DrawerLayout>{page}</DrawerLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next App</title>
        <meta name="description" content={'Sample Next App base on MUI'} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={() => ({
            '#nprogress': {
              pointerEvents: 'none',
              '& .bar': {
                left: 0,
                top: 0,
                height: 3,
                width: '100%',
                zIndex: 2000,
                position: 'fixed',
                backgroundColor: theme.palette.primary.main,
              },
            },
          })}
        />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default NextApp;
