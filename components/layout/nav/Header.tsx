import React, { FC, useEffect } from 'react';
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Navigation from './Navigation';
import { NextRouter, useRouter } from 'next/router';
import NextChakraLink from '../../utils/NextChakraLink';

const Header: FC = () => {
  const router: NextRouter = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan992px] = useMediaQuery('(min-width:992px)');

  useEffect(() => {
    if (router.isReady) {
      return onClose;
    }
  }, [router, onClose]);

  const styleLinkColor = (
    path: '/' | '/about-us' | '/news' | '/join-us' | '/awards'
  ): string => {
    if (router.pathname === path) {
      return '#00FFB1';
    } else {
      return '#000';
    }
  };

  if (isLargerThan992px) {
    return (
      <HStack
        spacing={8}
        mx={'auto'}
        py={6}
        fontSize={20}
        fontFamily={'serif'}
        fontWeight={600}
        letterSpacing={1.8}
        position={'fixed'}
        right={0}
        pr={200}
        zIndex={2}
      >
        <NextChakraLink href={'/'} color={styleLinkColor('/')}>
          Top
        </NextChakraLink>
        <NextChakraLink href={'/about-us'} color={styleLinkColor('/about-us')}>
          About us
        </NextChakraLink>
        <NextChakraLink href={'/awards'} color={styleLinkColor('/awards')}>
          Awards
        </NextChakraLink>
        <NextChakraLink href={'/news'} color={styleLinkColor('/news')}>
          news
        </NextChakraLink>
        <NextChakraLink href={'/join-us'} color={styleLinkColor('/join-us')}>
          Join us
        </NextChakraLink>
      </HStack>
    );
  } else {
    return (
      <Stack
        position={'fixed'}
        zIndex={1}
        bg={'gray.300'}
        w={'100vw'}
        py={2}
        boxShadow={'lg'}
      >
        <IconContext.Provider value={{ size: '28px', color: '#092025' }}>
          <IconButton
            aria-label={'hamburger-menu'}
            icon={<RiMenu3Fill />}
            m={'0 0 0 auto'}
            colorScheme={'whiteAlpha'}
            sx={{ background: 'none' }}
            _focus={{ background: 'none' }}
            onClick={onOpen}
          />
        </IconContext.Provider>
        <Drawer isOpen={isOpen} onClose={onClose} placement={'right'}>
          <DrawerOverlay />
          <DrawerContent bg={'gray.100'}>
            <DrawerCloseButton />
            <Navigation />
          </DrawerContent>
        </Drawer>
      </Stack>
    );
  }
};

export default Header;
