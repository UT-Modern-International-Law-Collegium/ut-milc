'use client';

import React, { FC } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { LinkProps as ChakraLinkProps, Link } from '@chakra-ui/react';

type NextChakraLink = {
  children: React.ReactNode;
};

const NextChakraLink: FC<NextChakraLink & LinkProps & ChakraLinkProps> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <Link as={NextLink} href={href} {...rest}>
      {children}
    </Link>
  );
};

export default NextChakraLink;
