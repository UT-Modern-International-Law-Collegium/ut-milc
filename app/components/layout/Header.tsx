'use client';

import React, { FC } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import moment from 'moment';
import { RiMenu3Fill } from 'react-icons/ri';
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  Icon,
  Link,
} from '@chakra-ui/react';

const Header: FC = () => {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const styleHeaderLinkColor = (
    path: '/' | '/about-us' | '/news' | '/join-us' | '/awards'
  ): string => {
    if (pathname === path) {
      return 'rgb(0, 255, 177, 1)';
    } else {
      return 'rgb(0,0,0,1)';
    }
  };

  const stlyeDrawerLinkColor = (
    path: '/' | '/about-us' | '/news' | '/join-us' | '/awards'
  ): string => {
    if (pathname === path) {
      return '#00FFB1';
    } else {
      return '#fff';
    }
  };

  return (
    <>
      {/* mobile */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Stack
          position={'fixed'}
          zIndex={1}
          bg={'rgb(203, 213, 224, 0.98)'}
          w={'100vw'}
          py={2}
          boxShadow={'lg'}
        >
          <IconButton
            aria-label={'hamburger-menu'}
            icon={<Icon as={RiMenu3Fill} h={7} w={7} color={'#092025'} />}
            m={'0 0 0 auto'}
            colorScheme={'whiteAlpha'}
            sx={{ background: 'none' }}
            _focus={{ background: 'none' }}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} onClose={onClose} placement={'right'}>
            <DrawerOverlay />
            <DrawerContent bg={'#092025'}>
              <DrawerCloseButton color={'white'} />
              <Box
                fontSize={24}
                fontFamily={'serif'}
                fontWeight={600}
                lineHeight={2}
                pl={14}
                pt={24}
                sx={{ a: { display: 'block' } }}
              >
                <Link
                  as={NextLink}
                  href={'/'}
                  color={stlyeDrawerLinkColor('/')}
                >
                  Top
                </Link>
                <Link
                  as={NextLink}
                  href={'/about-us'}
                  color={stlyeDrawerLinkColor('/about-us')}
                >
                  About us
                </Link>
                <Link
                  as={NextLink}
                  href={`/awards?year=${moment().year()}`}
                  color={stlyeDrawerLinkColor('/awards')}
                >
                  Awards
                </Link>
                <Link
                  as={NextLink}
                  href={'/news'}
                  color={stlyeDrawerLinkColor('/news')}
                >
                  News
                </Link>
                <Link
                  as={NextLink}
                  href={'/join-us'}
                  color={stlyeDrawerLinkColor('/join-us')}
                >
                  Join us
                </Link>
              </Box>
            </DrawerContent>
          </Drawer>
        </Stack>
      </Box>
      {/* PC */}
      <Box display={{ base: 'none', md: 'block' }}>
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
            <Link as={NextLink} href={'/'} color={styleHeaderLinkColor('/')}>
              Top
            </Link>
            <Link
              as={NextLink}
              href={'/about-us'}
              color={styleHeaderLinkColor('/about-us')}
            >
              About us
            </Link>
            <Link
              as={NextLink}
              href={`/awards?year=${moment().year()}`}
              color={styleHeaderLinkColor('/awards')}
            >
              Awards
            </Link>
            <Link
              as={NextLink}
              href={'/news'}
              color={styleHeaderLinkColor('/news')}
            >
              News
            </Link>
            <Link
              as={NextLink}
              href={'/join-us'}
              color={styleHeaderLinkColor('/join-us')}
            >
              Join us
            </Link>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
