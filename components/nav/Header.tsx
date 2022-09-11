import React, { FC } from 'react';
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu3Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Navigation from './Navigation';

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      position={'fixed'}
      zIndex={1}
      bg={'rgb(255, 255, 255, 0.8)'}
      w={'100vw'}
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
        <DrawerContent>
          <DrawerCloseButton />
          <Navigation />
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Header;
