import { InnerHTML } from "@/components/InnerHTML";
import { nextPrefix } from "@/lib/nextPrefix";
import { AwardData } from "@/lib/type/awardData";
import { fetchYears } from "./fetchYears";

export const dynamic = "force-dynamic";

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
      <h2 className="my-2 text-xl font-semibold md:my-4 md:mt-0 md:text-2xl">
        {year}年度
      </h2>
      {/* divider */}
      <div className="my-2 hidden border-t border-gray-300 md:block" />
      {awards.length === 0 ? (
        <p>当該年度の活動実績はありません。</p>
      ) : (
        awards.map((award) => (
          <div
            key={award.id}
            className="my-4 rounded-md border p-4 md:border-gray-300"
          >
            <h3 className="mb-2  text-lg font-semibold">{award.title}</h3>
            <InnerHTML content={award.content} />
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
