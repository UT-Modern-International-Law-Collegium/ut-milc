'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Center,
  Divider,
  Heading,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';

import { prefix } from '../../../lib/prefix';
import { AwardData } from '../../../lib/type/awardData';
import { YearNavigation } from './YearNavigation';

type Props = {
  year: string;
  years: { [key: string]: { id: number } };
};

export const Awards: FC<Props> = ({ year, years }) => {
  const router = useRouter();

  const [awards, setAwards] = useState<AwardData[]>();

  useEffect(() => {
    if (!year) {
      router.push('/');
      return;
    }

    // yearをnameに持つtagが存在しない場合。
    if (!years[year]) {
      setAwards([]);
      return;
    }

    const f = async () => {
      const res = await fetch(`${prefix()}/awards?tag_id=${years[year].id}`);
      if (res.status === 404) {
        setAwards([]);
      }

      const data = await res.json();
      setAwards(data.data);
    };
    f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  if (!awards) {
    return (
      <Center minH={'100vh'}>
        <Spinner color={'teal'} h={24} w={24} />
      </Center>
    );
  }

  if (awards.length === 0) {
    return (
      <Box
        px={{ base: 4, md: 100 }}
        pb={{ base: 100 }}
        w={{ base: '100%', md: '80%' }}
        mx={'auto'}
        minH={'100vh'}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          pt={{ base: 20, md: 100 }}
          w={{ base: '100%' }}
          spacing={{ base: 0, md: 8 }}
        >
          <Heading
            fontFamily={'serif'}
            size={{ base: 'xl', md: '2xl' }}
            letterSpacing={2}
          >
            活動実績
          </Heading>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} pt={6}>
          <YearNavigation year={year} years={years} />
          <Text pt={1}>{`${year}年度の活動実績は現在掲載準備中です。`}</Text>
        </Stack>
      </Box>
    );
  }

  return (
    <Box
      px={{ base: 4, md: 100 }}
      pb={{ base: 100 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={{ base: 20, md: 100 }}
        w={{ base: '100%' }}
        spacing={{ base: 0, md: 8 }}
      >
        <Heading
          fontFamily={'serif'}
          size={{ base: 'xl', md: '2xl' }}
          letterSpacing={2}
        >
          活動実績
        </Heading>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} pt={6}>
        <YearNavigation year={year} years={years} />
        <Box>
          {awards.map((award) => (
            <Stack
              key={award.id}
              mb={10}
              border={'1px solid'}
              borderColor={'gray.100'}
              borderRadius={8}
              boxShadow={{ base: '0px 0px 10px #ccc', md: 'lg' }}
              minH={200}
              p={4}
            >
              <Heading
                px={{ base: 2, md: 4 }}
                fontWeight={600}
                size={{ base: 'md', md: 'lg' }}
              >
                {award.title}
              </Heading>
              <Divider
                borderColor={{ base: 'gray.400', md: 'gray.300' }}
                w={'90%'}
              />
              <Box
                dangerouslySetInnerHTML={{ __html: award.content }}
                px={{ base: 2, md: 8 }}
                pb={{ base: 4, md: 6 }}
                fontSize={18}
              />
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};
