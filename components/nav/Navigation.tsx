import React, { FC, useEffect, useState } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import NextChakraLink from '../utils/NextChakraLink';
import { NextRouter, useRouter } from 'next/router';
import { useScroll } from 'framer-motion';

const Navigation: FC<StackProps> = ({ ...rest }) => {
  const router: NextRouter = useRouter();
  const [isDisplayingFirstview, setIsDisplayingFirstview] =
    useState<boolean>(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (router.pathname !== '/') return;
    return scrollY.onChange((latest) => {
      if (latest === 0) {
        setIsDisplayingFirstview(true);
      } else {
        setIsDisplayingFirstview(false);
      }
    });
  }, [scrollY, router]);

  const stlyeLinkColor = (
    path: '/' | '/about' | '/news' | '/join-us'
  ): string => {
    if (router.pathname === path) {
      return '#00FFB1';
    } else {
      return router.pathname === '/' && isDisplayingFirstview ? '#fff' : '#000';
    }
  };

  return (
    <Stack
      {...rest}
      position={'fixed'}
      bottom={'50%'}
      left={100}
      transform={'translate(0,50%)'}
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
        color={stlyeLinkColor('/about')}
        href={'/about'}
      >
        About
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
