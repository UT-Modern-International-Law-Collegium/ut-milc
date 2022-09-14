import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getlayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider>{getlayout(<Component {...pageProps} />)}</ChakraProvider>
  );
};

export default MyApp;
