import React, { FC } from 'react';
import {
  Stack,
  Divider,
  Heading,
  HeadingProps,
  useMediaQuery,
} from '@chakra-ui/react';

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle: FC<PageTitleProps & HeadingProps> = ({
  children,
  ...rest
}) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      pt={isLargerThan768px ? 100 : 20}
      w={isLargerThan768px ? '80%' : '100%'}
      spacing={isLargerThan768px ? 8 : 0}
    >
      <Divider
        orientation={'horizontal'}
        opacity={1}
        borderColor={'#000'}
        w={isLargerThan768px ? 230 : 10}
      />
      <Heading fontFamily={'serif'} size={'2xl'} letterSpacing={2}>
        {children}
      </Heading>
      <Divider
        orientation={'horizontal'}
        opacity={1}
        borderColor={'#000'}
        w={isLargerThan768px ? 230 : 10}
      />
    </Stack>
  );
};

export default PageTitle;
