import { Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import NextChakraLink from '../utils/NextChakraLink';

type Props = { years: number[] };

const YearNavigation: FC<Props> = ({ years }) => {
  const orderedYears: number[] = years.sort((a, b) => b - a);

  return (
    <Stack position={'fixed'} left={0} top={80}>
      {orderedYears.map((year) => {
        return (
          <NextChakraLink key={year} href={`/awards/${year}`}>
            {year}
          </NextChakraLink>
        );
      })}
    </Stack>
  );
};

export default YearNavigation;
