import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getlayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>東京大学現代国際法研究会</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo
        defaultTitle={'東京大学現代国際法研究会'}
        description={'東京大学現代国際法研究会のホームページです。'}
        openGraph={{
          type: 'website',
          title: '東京大学現代国際法研究会',
          description: '東京大学現代国際法研究会のホームページです。',
          locale: 'ja_JP',
          url: 'https://utmilc.com/',
          site_name: '東京大学現代国際法研究会のホームページ',
          images: [
            {
              // TODO: replace this image with valid one.
              url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
              width: 500,
              height: 500,
              alt: '東京大学現代国際法研究会ホームページのプレビュー画像',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <ChakraProvider>{getlayout(<Component {...pageProps} />)}</ChakraProvider>
    </>
  );
};

export default MyApp;
