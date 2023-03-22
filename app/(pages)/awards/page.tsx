'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Center, Spinner } from '@chakra-ui/react';

import { prefix } from '../../../lib/prefix';
import { Awards } from './Awards';

const Page = () => {
  const searchParams = useSearchParams();

  const year = searchParams?.get('year');

  const [years, setYears] = useState<{ [key: string]: { id: number } }>();

  useEffect(() => {
    const f = async () => {
      const res = await fetch(`${prefix()}/awards/years`);
      const data: {
        data: {
          year: number;
          id: number;
        }[];
      } = await res.json();

      let years: { [key: string]: { id: number } } = {};
      data.data.forEach((item) => {
        years[item.year] = { id: item.id };
      });

      setYears(years);
    };
    f();
  }, []);

  if (!years) {
    return (
      <Center minH={'100vh'}>
        <Spinner color="teal" h={24} w={24} />
      </Center>
    );
  }

  // @ts-ignore
  return <Awards year={year} years={years} />;
};

export default Page;
