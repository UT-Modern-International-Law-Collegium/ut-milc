import React, { FC } from 'react';
import { Box, Stack } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    {/* mobile */}
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
