import { nextPrefix } from '@/lib/nextPrefix';
import { AwardData } from '@/lib/type/awardData';
import { fetchYears } from './fetchYears';

const fetchData = async ({ year }: { year: string }) => {
  const years = await fetchYears();
  const yearID = years.find((item) => item.year === Number(year))?.id ?? null;

  try {
    const res = await fetch(`${nextPrefix()}/awards?tag_id=${yearID}`);
    const data = await res.json();
    return data.data;
  } catch (_) {
    return [];
  }
};

const Page = async ({ searchParams }: { searchParams: { year: string } }) => {
  const { year } = searchParams;
  const awards: AwardData[] = await fetchData({ year });

  return (
    <div>
      <h2>{year}年度</h2>
      {awards.length === 0 ? (
        <p>当該年度の活動実績はありません。</p>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Page;
