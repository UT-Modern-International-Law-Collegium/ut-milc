'use client';

import './globals.css';

import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './_components/layout/Layout';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <title>東京大学現代国際法研究会</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
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
      </head>
      <body>
        <ChakraProvider>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
