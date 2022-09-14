import React, { FC } from 'react';
import { Stack, Box, useMediaQuery } from '@chakra-ui/react';
import Navigation from './nav/Navigation';
import Header from './nav/Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  if (isLargerThan768px) {
    return (
      <Stack position={'relative'}>
        {children}
        <Navigation />
        {/* フッター */}
        <Footer />
      </Stack>
    );
  } else {
    return (
      <Stack>
        <Header />
        {children}
        <Footer />
      </Stack>
    );
  }
};

export default Layout;
