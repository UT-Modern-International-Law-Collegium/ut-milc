import React, { FC } from 'react';
import { Stack, Heading, HeadingProps } from '@chakra-ui/react';

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
      w={{ base: '100%' }}
      spacing={{ base: 0, md: 8 }}
      {...rest}
    >
      <Heading
        fontFamily={'serif'}
        size={{ base: 'xl', md: '2xl' }}
        letterSpacing={2}
      >
        {children}
      </Heading>
    </Stack>
  );
};

export default PageTitle;
