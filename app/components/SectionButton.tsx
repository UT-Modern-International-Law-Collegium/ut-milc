'use client';

import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Button, HStack, Icon, LinkBox, LinkOverlay } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  onClick?: any;
  isExternal?: boolean;
  href?: string;
};

const SectionButton: FC<Props> = ({ children, onClick, isExternal, href }) =>
  isExternal ? (
    <LinkBox
      as={Button}
      my={14}
      borderRadius={40}
      bg={'teal.400'}
      fontSize={18}
      px={8}
      py={6}
      color={'#fff'}
      fontWeight={'normal'}
    >
      <HStack>
        <LinkOverlay href={href} isExternal>
          {children}
        </LinkOverlay>
        <Icon as={BsArrowRight} />
      </HStack>
    </LinkBox>
  ) : (
    <Button
      rightIcon={<Icon as={BsArrowRight} />}
      my={14}
      borderRadius={40}
      bg={'teal.400'}
      fontSize={18}
      px={8}
      py={6}
      color={'#fff'}
      fontWeight={'normal'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
export default SectionButton;
