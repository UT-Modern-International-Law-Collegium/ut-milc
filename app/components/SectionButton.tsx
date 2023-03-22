'use client';

import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Button, ButtonProps, Center, Icon } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const SectionButton: FC<Props & ButtonProps> = ({ children, ...rest }) => (
  <Center>
    <Button
      transition={{ md: '0.2s' }}
      rightIcon={
        <Icon as={BsArrowRight} w={6} h={6} transition={{ md: '0.2s' }} />
      }
      pl={6}
      bg={'none'}
      fontWeight={'normal'}
      fontSize={18}
      textDecoration={'underline'}
      borderRadius={'none'}
      {...rest}
    >
      {children}
    </Button>
  </Center>
);
export default SectionButton;
