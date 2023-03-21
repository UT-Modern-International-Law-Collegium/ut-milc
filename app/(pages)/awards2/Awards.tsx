'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Center, Spinner, Text } from '@chakra-ui/react';

import { prefix } from '../../../lib/prefix';
import { AwardData } from '../../../lib/type/awardData';

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
      const res = await fetch(`${prefix()}/awards2?tag_id=${years[year].id}`);
      if (res.status === 404) {
        setAwards([]);
      }

      const data = await res.json();
      setAwards(data);
    };
    f();
  }, [year, years, router]);

  if (!awards) {
    return (
      <Center minH={'100vh'}>
        <Spinner color={'teal'} h={24} w={24} />
      </Center>
    );
  }

  if (awards.length === 0) {
    return (
      <Box py={24}>
        <Text>現在掲載準備中です。</Text>
      </Box>
    );
  }

  return <Box></Box>;
};
