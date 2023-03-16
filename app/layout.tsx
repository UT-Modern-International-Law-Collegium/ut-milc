'use client';

import { ChakraProvider } from '@chakra-ui/react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
