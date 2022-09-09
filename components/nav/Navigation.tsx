import React, { FC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import NextChakraLink from '../utils/NextChakraLink';

const Navigation: FC<StackProps> = ({ ...rest }) => {
  return (
    <Stack {...rest}>
      <NextChakraLink href={'/'}>Top</NextChakraLink>
      <NextChakraLink href={'/about'}>About</NextChakraLink>
      <NextChakraLink href={'/news'}>News</NextChakraLink>
      <NextChakraLink href={'/join-us'}>Join us</NextChakraLink>
    </Stack>
  );
};

export default Navigation;
