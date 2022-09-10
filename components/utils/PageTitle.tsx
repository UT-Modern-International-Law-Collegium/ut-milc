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
      pt={100}
      w={'80%'}
      spacing={8}
    >
      <Divider orientation={'horizontal'} opacity={1} borderColor={'#000'} />
      <Heading fontFamily={'serif'} size={'2xl'} letterSpacing={2} {...rest}>
        {children}
      </Heading>
      <Divider orientation={'horizontal'} opacity={1} borderColor={'#000'} />
    </Stack>
  );
};

export default PageTitle;
