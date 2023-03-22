'use client';

import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

type Props = { year: string; years: { [key: string]: { id: number } } };

export const YearNavigation: FC<Props> = ({ year, years: _years }) => {
  const years: number[] = Object.keys(_years)
    .map((y) => Number(y))
    .sort((a, b) => b - a);

  return (
    <Box minW={'20%'} px={{ base: 1, md: 0 }}>
      {years.map((y) => (
        <Link
          as={NextLink}
          key={y}
          href={`/awards2?year=${y}`}
          display={'block'}
          lineHeight={2}
          fontWeight={y === Number(year) ? 'bold' : ''}
          fontSize={20}
        >
          {`${y}年度`}
        </Link>
      ))}
    </Box>
  );
};
