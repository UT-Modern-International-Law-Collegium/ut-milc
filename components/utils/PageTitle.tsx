import React, { FC } from 'react';
import { Stack, Divider, Heading, HeadingProps } from '@chakra-ui/react';

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle: FC<PageTitleProps & HeadingProps> = ({
  children,
  ...rest
}) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      pt={{ base: 20, md: 100 }}
      w={{ base: '100%', md: '80%' }}
      spacing={{ base: 0, md: 8 }}
    >
      <Divider
        orientation={'horizontal'}
        opacity={1}
        borderColor={'#000'}
        w={{ base: 10, md: 230 }}
      />
      <Heading
        fontFamily={'serif'}
        size={{ base: 'xl', md: '2xl' }}
        letterSpacing={2}
      >
        {children}
      </Heading>
      <Divider
        orientation={'horizontal'}
        opacity={1}
        borderColor={'#000'}
        w={{ base: 10, md: 230 }}
      />
    </Stack>
  );
};

export default PageTitle;
