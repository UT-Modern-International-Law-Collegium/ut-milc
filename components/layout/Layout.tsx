'use client';

import React, { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import Header from './nav/Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <>
    {/* モバイル */}
    <Box display={{ base: 'block', md: 'none' }}>
      <Header />
      {children}
      <Footer />
    </Box>
    {/* PC */}
    <Box display={{ base: 'none', md: 'block' }}>
      <Header />
      <Stack position={'relative'} minH={'100vh'}>
        {children}
      </Stack>
      <Footer />
    </Box>
  </>
);

export default Layout;
