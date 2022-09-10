import React, { FC } from 'react';
import { Stack, Box } from '@chakra-ui/react';
import Navigation from './nav/Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Stack position={'relative'}>
      {children}
      <Navigation />
      {/* フッター */}
      <Stack h={400}></Stack>
    </Stack>
  );
};

export default Layout;
