import { Button, ButtonProps, Center } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IconContext } from 'react-icons/lib';
import { BsArrowRight } from 'react-icons/bs';

type SectionButtonProps = {
  children: React.ReactNode;
};

const SectionButton: FC<SectionButtonProps & ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Center>
      <IconContext.Provider value={{ size: '20px' }}>
        <Button rightIcon={<BsArrowRight />} pl={6} {...rest}>
          {children}
        </Button>
      </IconContext.Provider>
    </Center>
  );
};

export default SectionButton;
