import React, { FC } from 'react';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import Header from './nav/Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  if (isLargerThan768px) {
    return (
      <>
        <Header />
        <Stack position={'relative'} minH={'100vh'}>
          {children}
        </Stack>
        <Footer />
      </>
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
