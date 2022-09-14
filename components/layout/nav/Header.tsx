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

  if (isLargerThan992px) {
    return (
      <HStack
        spacing={8}
        justifyContent={'right'}
        w={'80%'}
        mx={'auto'}
        py={6}
        fontSize={20}
        fontFamily={'serif'}
        fontWeight={600}
        letterSpacing={1.8}
      >
        <NextChakraLink href={'/'}>Top</NextChakraLink>
        <NextChakraLink href={'/about-us'}>About us</NextChakraLink>
        <NextChakraLink href={'/awards'}>Awards</NextChakraLink>
        <NextChakraLink href={'/news'}>news</NextChakraLink>
        <NextChakraLink href={'/join-us'}>Join us</NextChakraLink>
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
