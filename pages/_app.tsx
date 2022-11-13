import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import GA4 from '../components/head/GA4';
import SEO from '../components/head/SEO';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getlayout: (page: ReactElement) => ReactNode =
    Component.getLayout ?? ((page) => page);

  return (
    <>
      <GA4 />
      <SEO />
      <ChakraProvider>{getlayout(<Component {...pageProps} />)}</ChakraProvider>
    </>
  );
};

export default MyApp;
