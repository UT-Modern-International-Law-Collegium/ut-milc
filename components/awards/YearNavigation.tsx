import { HStack, Stack, Text } from '@chakra-ui/react';
import { NextRouter, useRouter } from 'next/router';
import React, { FC } from 'react';
import NextChakraLink from '../utils/NextChakraLink';
import PageTitle from '../utils/PageTitle';

type Props = { years: number[] };

const YearNavigation: FC<Props> = ({ years }) => {
  const orderedYears: number[] = years.sort((a, b) => b - a);
  const router: NextRouter = useRouter();
  const isCurrentPage = (year: string) => {
    return (router.query['year'] as string) === year;
  };

  return (
    <Stack position={'sticky'} left={0} top={0} spacing={8} pb={100} zIndex={2}>
      <PageTitle pl={{ md: 18, lg: 100 }}>活動実績</PageTitle>
      <Stack spacing={3}>
        {orderedYears.map((year) => {
          return (
            <HStack key={year}>
              <NextChakraLink
                href={`/awards/${year}`}
                fontSize={24}
                pl={{ md: 25, lg: 110 }}
                fontWeight={isCurrentPage(year.toString()) ? 'bold' : 'inherit'}
              >
                {`${year}年度`}
              </NextChakraLink>
            </HStack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default YearNavigation;
