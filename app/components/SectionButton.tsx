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
    <LinkBox as="button">
      <HStack>
        <LinkOverlay
          href={href}
          isExternal
          my={14}
          borderRadius={0}
          bg={'none'}
        >
          {children}
        </LinkOverlay>
        <Icon as={BsArrowRight} />
      </HStack>
    </LinkBox>
  ) : (
    <Button
      my={14}
      borderRadius={0}
      bg={'none'}
      rightIcon={<Icon as={BsArrowRight} />}
      onClick={onClick}
    >
      {children}
    </Button>
  );
export default SectionButton;
