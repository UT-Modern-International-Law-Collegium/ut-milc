import React, { FC } from 'react';
import {
  Divider,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import NextChakraLink from '../utils/NextChakraLink';

const Footer: FC = () => {
  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      py={12}
      px={{ base: 20, md: 40 }}
      bg={'gray.200'}
      gap={{ base: 8, md: 0 }}
    >
      <GridItem colSpan={{ base: 2, md: 1 }} px={{ base: 0, md: 10 }}>
        <Stack textAlign={{ base: 'center', md: 'inherit' }}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>pages</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <NextChakraLink href={'/'}>Top</NextChakraLink>
          <NextChakraLink href={'/about-us'}>About us</NextChakraLink>
          <NextChakraLink href={'/awards'}>Awards</NextChakraLink>
          <NextChakraLink href={'/news'}>News</NextChakraLink>
          <NextChakraLink href={'/join-us'}>Join us</NextChakraLink>
        </Stack>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }} px={{ base: 0, md: 10 }}>
        <Stack spacing={8}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>links</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <HStack spacing={12} justifyContent={'center'}>
            <IconContext.Provider value={{ size: '36px' }}>
              <VStack>
                <IconButton
                  aria-label="instagram"
                  icon={<BsInstagram />}
                  bg={'none'}
                />
                <Text>instagram</Text>
              </VStack>
              <VStack>
                <IconButton
                  aria-label="twitter"
                  icon={<BsTwitter />}
                  bg={'none'}
                />
                <Text>twitter</Text>
              </VStack>
            </IconContext.Provider>
          </HStack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
