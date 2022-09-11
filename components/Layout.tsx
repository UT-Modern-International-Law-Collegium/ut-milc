import React, { FC } from 'react';
import { Stack, Box, useMediaQuery } from '@chakra-ui/react';
import Navigation from './nav/Navigation';

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
        <Stack h={400}></Stack>
      </Stack>
    );
  } else {
    return <Stack>{children}</Stack>;
  }
};

export default Layout;
