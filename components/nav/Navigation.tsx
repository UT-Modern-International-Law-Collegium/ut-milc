import React, { FC, useEffect, useState } from 'react';
import { Stack, StackProps, useMediaQuery } from '@chakra-ui/react';
import NextChakraLink from '../utils/NextChakraLink';
import { NextRouter, useRouter } from 'next/router';
import { useScroll } from 'framer-motion';

const Navigation: FC<StackProps> = ({ ...rest }) => {
  const router: NextRouter = useRouter();
  const [isDisplayingFirstview, setIsDisplayingFirstview] =
    useState<boolean>(true);
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!isLargerThan768px) return;
    return scrollY.onChange((latest) => {
      if (latest === 0) {
        setIsDisplayingFirstview(true);
      } else {
        setIsDisplayingFirstview(false);
      }
    });
  }, [scrollY, router, isLargerThan768px]);

  const stlyeLinkColor = (
    path: '/' | '/about' | '/news' | '/join-us' | '/awards'
  ): string => {
    if (router.pathname === path) {
      return '#00FFB1';
    } else {
      if (isLargerThan768px) {
        return router.pathname === '/' && isDisplayingFirstview
          ? '#fff'
          : '#000';
      } else {
        return '#000';
      }
    }
  };

  return (
    <Stack
      {...rest}
      position={'fixed'}
      bottom={'50%'}
      left={{ base: 10, md: 100 }}
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
