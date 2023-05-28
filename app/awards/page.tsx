import { Awards } from './Awards';
import { fetchYears } from './fetchYears';

const fetchData = async ({ year }: { year: string }) => {
  const years = await fetchYears();

  const yearID = years.find((item) => item.year === Number(year))?.id ?? null;

  return yearID;
};

const Page = async ({ searchParams }: { searchParams: { year: string } }) => {
  const { year } = searchParams;
  const yearID = await fetchData({ year });

  /* @ts-expect-error Server Component */
  return <Awards yearID={yearID} />;
};

export default Page;
