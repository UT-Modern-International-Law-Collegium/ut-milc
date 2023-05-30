'use client';

import React, { FC } from 'react';
import Link from 'next/link';
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
    return '#00ffb1';
  } else {
    return '#000000';
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

const linkStyle = ({
  isMobile,
  pathname,
  currentPath,
}: {
  isMobile: boolean;
  pathname: Pathname;
  currentPath: string;
}) => {
  if (isMobile) {
    return `text-[${stlyeDrawerLinkColor({
      path: pathname,
      currentPath,
    })}] block leading-loose`;
  } else {
    return `text-[${styleHeaderLinkColor({
      path: pathname,
      currentPath,
    })}] text-xl font-serif leading-loose`;
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
              >
                <Link
                  href={'/'}
                  className={`${linkStyle({
                    isMobile: true,
                    pathname: '/',
                    currentPath: pathname,
                  })}]`}
                  onClick={onClose}
                >
                  Top
                </Link>
                <Link
                  href={'/about-us'}
                  className={`${linkStyle({
                    isMobile: true,
                    pathname: '/about-us',
                    currentPath: pathname,
                  })}]`}
                  onClick={onClose}
                >
                  About us
                </Link>
                <Link
                  href={`/awards?year=${moment().year()}`}
                  className={`${linkStyle({
                    isMobile: true,
                    pathname: '/awards',
                    currentPath: pathname,
                  })}]`}
                  onClick={onClose}
                >
                  Awards
                </Link>
                <a
                  href={'https://note.com/utmilc'}
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkStyle({
                    isMobile: true,
                    pathname: '/news',
                    currentPath: pathname,
                  })}]`}
                >
                  News
                </a>
                <Link
                  href={'/join-us'}
                  className={`${linkStyle({
                    isMobile: true,
                    pathname: '/join-us',
                    currentPath: pathname,
                  })}]`}
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
          <HStack spacing={8}>
            <Link
              href={'/'}
              className={`${linkStyle({
                isMobile: false,
                pathname: '/',
                currentPath: pathname,
              })}]`}
            >
              Top
            </Link>
            <Link
              href={'/about-us'}
              className={`${linkStyle({
                isMobile: false,
                pathname: '/about-us',
                currentPath: pathname,
              })}]`}
            >
              About us
            </Link>
            <Link
              href={`/awards?year=${moment().year()}`}
              className={`${linkStyle({
                isMobile: false,
                pathname: '/awards',
                currentPath: pathname,
              })}]`}
            >
              Awards
            </Link>
            <a
              href={'https://note.com/utmilc'}
              target="_blank"
              rel="noreferrer"
              className={`${linkStyle({
                isMobile: false,
                pathname: '/news',
                currentPath: pathname,
              })}]`}
            >
              News
            </a>
            <Link
              href={'/join-us'}
              className={`${linkStyle({
                isMobile: false,
                pathname: '/join-us',
                currentPath: pathname,
              })}]`}
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
