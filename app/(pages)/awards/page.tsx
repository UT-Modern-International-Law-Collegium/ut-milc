import { prefix } from '../../../lib/prefix';
import { Awards } from './Awards';

const fetchYears = async () => {
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

  return years;
};

const Page = async ({ searchParams }: { searchParams: { year: string } }) => {
  // const { year } = searchParams;

  // const years = await fetchYears();

  // return <Awards year={year} years={years} />;
  return <div></div>;
};

export default Page;
