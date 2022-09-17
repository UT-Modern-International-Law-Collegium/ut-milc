import React, { FC } from 'react';
import {
  Button,
  ButtonProps,
  Center,
  Icon,
  useMediaQuery,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

type SectionButtonProps = {
  children: React.ReactNode;
};

const SectionButton: FC<SectionButtonProps & ButtonProps> = ({
  children,
  ...rest
}) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  return (
    <Center>
      <Button
        sx={isLargerThan768px ? { '.btn-arrow': { opacity: 0 } } : {}}
        _hover={
          isLargerThan768px ? { '.btn-arrow': { opacity: 1 }, pl: -10 } : {}
        }
        transition={{ md: '0.2s' }}
        rightIcon={
          <Icon
            as={BsArrowRight}
            w={6}
            h={6}
            className={'btn-arrow'}
            transition={{ md: '0.2s' }}
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
