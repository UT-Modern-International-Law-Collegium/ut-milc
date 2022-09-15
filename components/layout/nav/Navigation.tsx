import React, { FC } from 'react';
import { Stack, StackProps, useMediaQuery } from '@chakra-ui/react';
import NextChakraLink from '../../utils/NextChakraLink';
import { NextRouter, useRouter } from 'next/router';

const Navigation: FC<StackProps> = ({ ...rest }) => {
  const router: NextRouter = useRouter();
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  const stlyeLinkColor = (
    path: '/' | '/about-us' | '/news' | '/join-us' | '/awards'
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
    >
      <NextChakraLink
        fontFamily={'serif'}
        letterSpacing={5}
        fontSize={36}
        color={stlyeLinkColor('/')}
        href={'/'}
      >
        Top
      </NextChakraLink>
      <NextChakraLink
        fontFamily={'serif'}
        letterSpacing={5}
        fontSize={36}
        color={stlyeLinkColor('/about-us')}
        href={'/about-us'}
      >
        About us
      </NextChakraLink>
      <NextChakraLink
        fontFamily={'serif'}
        letterSpacing={5}
        fontSize={36}
        color={stlyeLinkColor('/awards')}
        href={'/awards'}
      >
        Awards
      </NextChakraLink>
      <NextChakraLink
        fontFamily={'serif'}
        letterSpacing={5}
        fontSize={36}
        color={stlyeLinkColor('/news')}
        href={'/news'}
      >
        News
      </NextChakraLink>
      <NextChakraLink
        fontFamily={'serif'}
        letterSpacing={5}
        fontSize={36}
        color={stlyeLinkColor('/join-us')}
        href={'/join-us'}
      >
        Join us
      </NextChakraLink>
    </Stack>
  );
};

export default Navigation;
