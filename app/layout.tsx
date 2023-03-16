'use client';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from './components/layout/Layout';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider>
          <Layout>{children}</Layout>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
