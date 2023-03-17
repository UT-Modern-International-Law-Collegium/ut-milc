import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import moment from 'moment';
import { RiMenu3Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
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

import Navigation from './Navigation';
import NextChakraLink from '../utils/NextChakraLink';

const Header: FC = () => {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan992px] = useMediaQuery('(min-width:992px)');

  const styleLinkColor = (
    path: '/' | '/about-us' | '/news' | '/join-us' | '/awards/[year]'
  ): string => {
    if (pathname === path) {
      return 'rgb(0, 255, 177, 1)';
    } else {
      return 'rgb(0,0,0,1)';
    }
  };

  if (isLargerThan992px) {
    return (
      <HStack
        py={4}
        position={'fixed'}
        zIndex={pathname === '/' ? 1 : 3}
        bg={'rgb(255,255,255,0.9)'}
        w={'100vw'}
        justifyContent={'right'}
        px={100}
      >
        <HStack
          spacing={8}
          fontSize={20}
          fontFamily={'serif'}
          fontWeight={600}
          letterSpacing={1.8}
        >
          <NextChakraLink href={'/'} color={styleLinkColor('/')}>
            Top
          </NextChakraLink>
          <NextChakraLink
            href={'/about-us'}
            color={styleLinkColor('/about-us')}
          >
            About us
          </NextChakraLink>
          <NextChakraLink
            href={`/awards/${moment().year()}`}
            color={styleLinkColor('/awards/[year]')}
          >
            Awards
          </NextChakraLink>
          <NextChakraLink href={'/news'} color={styleLinkColor('/news')}>
            News
          </NextChakraLink>
          <NextChakraLink href={'/join-us'} color={styleLinkColor('/join-us')}>
            Join us
          </NextChakraLink>
        </HStack>
      </HStack>
    );
  } else {
    return (
      <Stack
        position={'fixed'}
        zIndex={1}
        bg={'rgb(203, 213, 224, 0.98)'}
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
