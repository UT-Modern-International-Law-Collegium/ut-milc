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
  ChakraProvider,
} from '@chakra-ui/react';

import { Pathname } from '@/lib/type/utils';

const styleHeaderLinkColor = ({
  path,
  currentPath,
}: {
  path: Pathname;
  currentPath: string;
}) => {
  if (currentPath === path) {
    return 'rgb(0, 255, 177, 1)';
  } else {
    return 'rgb(0,0,0,1)';
  }
};

const stlyeDrawerLinkColor = ({
  path,
  currentPath,
}: {
  path: Pathname;
  currentPath: string;
}): string => {
  if (currentPath === path) {
    return '#00FFB1';
  } else {
    return '#fff';
  }
};

const Header: FC = () => {
  const pathname = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      {/* mobile */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Stack
          position={'fixed'}
          zIndex={1}
          bg={'white'}
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
                sx={{ a: { display: 'block', letterSpacing: 2 } }}
              >
                <Link
                  as={NextLink}
                  href={'/'}
                  color={stlyeDrawerLinkColor({
                    path: '/',
                    currentPath: pathname,
                  })}
                  onClick={onClose}
                >
                  Top
                </Link>
                <Link
                  as={NextLink}
                  href={'/about-us'}
                  color={stlyeDrawerLinkColor({
                    path: '/about-us',
                    currentPath: pathname,
                  })}
                  onClick={onClose}
                >
                  About us
                </Link>
                <Link
                  as={NextLink}
                  href={`/awards?year=${moment().year()}`}
                  color={stlyeDrawerLinkColor({
                    path: '/awards',
                    currentPath: pathname,
                  })}
                  onClick={onClose}
                >
                  Awards
                </Link>
                <Link
                  href={'https://note.com/utmilc'}
                  isExternal
                  color={stlyeDrawerLinkColor({
                    path: '/news',
                    currentPath: pathname,
                  })}
                  onClick={onClose}
                >
                  News
                </Link>
                <Link
                  as={NextLink}
                  href={'/join-us'}
                  color={stlyeDrawerLinkColor({
                    path: '/join-us',
                    currentPath: pathname,
                  })}
                  onClick={onClose}
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
            <Link
              as={NextLink}
              href={'/'}
              color={styleHeaderLinkColor({ path: '/', currentPath: pathname })}
            >
              Top
            </Link>
            <Link
              as={NextLink}
              href={'/about-us'}
              color={styleHeaderLinkColor({
                path: '/about-us',
                currentPath: pathname,
              })}
            >
              About us
            </Link>
            <Link
              as={NextLink}
              href={`/awards?year=${moment().year()}`}
              color={styleHeaderLinkColor({
                path: '/awards',
                currentPath: pathname,
              })}
            >
              Awards
            </Link>
            <Link
              href={'https://note.com/utmilc'}
              isExternal
              color={styleHeaderLinkColor({
                path: '/news',
                currentPath: pathname,
              })}
            >
              News
            </Link>
            <Link
              as={NextLink}
              href={'/join-us'}
              color={styleHeaderLinkColor({
                path: '/join-us',
                currentPath: pathname,
              })}
            >
              Join us
            </Link>
          </HStack>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default Header;
