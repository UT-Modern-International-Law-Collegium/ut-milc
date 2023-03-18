'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { prefix } from '../../../lib/prefix';

const Page = ({ searchParams }: { searchParams: { year: string } }) => {
  const { year } = searchParams;

  const router = useRouter();

  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    if (!year) router.push('/');

    const f = async () => {
      const res1 = await fetch(`${prefix()}/awards2/years`);
      const data1: { data: number[] } = await res1.json();
      setYears(data1.data);
    };
    f();
  }, [year, router]);

  return <div></div>;
};

export default Page;
