import React, { FC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import NextChakraLink from '../utils/NextChakraLink';
import { NextRouter, useRouter } from 'next/router';

const Navigation: FC<StackProps> = ({ ...rest }) => {
  const router: NextRouter = useRouter();

  const stlyeLinkColor = (
    path: '/' | '/about' | '/news' | '/join-us'
  ): string => {
    if (router.pathname === path) {
      return '#00FFB1';
    } else {
      return 'Inherit';
    }
  };

  return (
    <Stack {...rest} position={'fixed'} bottom={200} left={100} spacing={6}>
      <NextChakraLink fontSize={30} color={stlyeLinkColor('/')} href={'/'}>
        Top
      </NextChakraLink>
      <NextChakraLink
        fontSize={30}
        color={stlyeLinkColor('/about')}
        href={'/about'}
      >
        About
      </NextChakraLink>
      <NextChakraLink
        fontSize={30}
        color={stlyeLinkColor('/news')}
        href={'/news'}
      >
        News
      </NextChakraLink>
      <NextChakraLink
        fontSize={30}
        color={stlyeLinkColor('/join-us')}
        href={'/join-us'}
      >
        Join us
      </NextChakraLink>
    </Stack>
  );
};

export default Navigation;
