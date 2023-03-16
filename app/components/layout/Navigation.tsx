import React, { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';
import moment from 'moment';
import { Stack, StackProps, useMediaQuery } from '@chakra-ui/react';

import NextChakraLink from '../../../components/utils/NextChakraLink';

const Navigation: FC<StackProps> = ({ ...rest }) => {
  const router: NextRouter = useRouter();
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  const stlyeLinkColor = (
    path: '/' | '/about-us' | '/news' | '/join-us' | '/awards/[year]'
  ): string => {
    if (router.pathname === path) {
      return '#00FFB1';
    } else {
      if (isLargerThan768px) {
        return '#fff';
      } else {
        return '#000';
      }
    }
  };

  return (
    <Stack
      {...rest}
      display={{ base: 'flex' }}
      position={{ base: 'fixed', md: 'absolute' }}
      top={'50%'}
      left={{ base: 10, md: 100 }}
      transform={'translate(0,-50%)'}
      spacing={6}
      fontSize={{ base: 36, md: 24, lg: 36 }}
      fontFamily={'serif'}
      letterSpacing={5}
    >
      <NextChakraLink color={stlyeLinkColor('/')} href={'/'}>
        Top
      </NextChakraLink>
      <NextChakraLink color={stlyeLinkColor('/about-us')} href={'/about-us'}>
        About us
      </NextChakraLink>
      <NextChakraLink
        color={stlyeLinkColor('/awards/[year]')}
        href={`/awards/${moment().year()}`}
      >
        Awards
      </NextChakraLink>
      <NextChakraLink color={stlyeLinkColor('/news')} href={'/news'}>
        News
      </NextChakraLink>
      <NextChakraLink color={stlyeLinkColor('/join-us')} href={'/join-us'}>
        Join us
      </NextChakraLink>
    </Stack>
  );
};

export default Navigation;
