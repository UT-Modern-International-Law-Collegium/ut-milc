import { nextPrefix } from '@/lib/nextPrefix';
import { AwardData } from '@/lib/type/awardData';
import { InnerHTML } from '../_components/InnerHTML';
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
    <div className="md:w-5/6 lg:w-10/12">
      <h2 className="text-xl font-semibold my-2 md:my-4 md:mt-0 md:text-2xl">
        {year}年度
      </h2>
      {/* divider */}
      <div className="hidden md:block border-t my-2 border-gray-300" />
      {awards.length === 0 ? (
        <p>当該年度の活動実績はありません。</p>
      ) : (
        awards.map((award) => (
          <div
            key={award.id}
            className="border p-4 rounded-md my-4 md:border-gray-300"
          >
            <h3 className="text-lg  font-semibold mb-2">{award.title}</h3>
            <InnerHTML content={award.content} />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
