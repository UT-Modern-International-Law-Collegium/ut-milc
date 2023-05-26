import { nextPrefix } from '@/lib/nextPrefix';
import { Awards } from './Awards';

const fetchYears = async () => {
  const res = await fetch(`${nextPrefix()}/awards/years`);
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

  return years;
};

const Page = async ({ searchParams }: { searchParams: { year: string } }) => {
  const { year } = searchParams;

  const years = await fetchYears();

  // @ts-ignore
  return <Awards year={year} years={years} />;
};

export default Page;
