'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

type Props = { year: string; years: { [key: string]: { id: number } } };

export const YearNavigation: FC<Props> = ({ year, years }) => {
  return (
    <Box
      minW={'20%'}
      sx={{ a: { display: 'block', fontSize: 20, lineHeight: 2 } }}
    >
      {Object.keys(years).map((y) => (
        <Link key={y} href={`/awards2?year=${y}`}>
          {`${y}年度`}
        </Link>
      ))}
    </Box>
  );
};
