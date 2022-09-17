import React, { FC } from 'react';
import { Button, ButtonProps, Center, Icon } from '@chakra-ui/react';
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
      <Button
        sx={{ '.btn-arrow': { opacity: 0 } }}
        _hover={{ '.btn-arrow': { opacity: 1 }, pl: -10 }}
        transition={'0.2s'}
        rightIcon={
          <Icon
            as={BsArrowRight}
            w={6}
            h={6}
            className={'btn-arrow'}
            transition={'0.2s'}
          />
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
};

export default SectionButton;
