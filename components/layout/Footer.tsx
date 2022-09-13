import React, { FC } from 'react';
import { Heading, HStack, IconButton, Stack, VStack } from '@chakra-ui/react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer: FC = () => {
  return (
    <VStack bg={'gray.200'} py={8} minH={300}>
      <Heading
        size={'lg'}
        fontWeight={'thin'}
        fontFamily={'serif'}
        letterSpacing={2}
      >
        現代国際法研究会
      </Heading>
      <HStack>
        <IconButton
          aria-label={'instagram'}
          icon={<BsInstagram />}
          bg={'none'}
        />
        <IconButton aria-label={'twitter'} icon={<BsTwitter />} bg={'none'} />
      </HStack>
    </VStack>
  );
};

export default Footer;
