import moment from "moment";

import { YearNavigation } from "@/components/awards/year-navigation";
import { fetchYears } from "@/lib/awards/fetch-years";

const fetchData = async () => {
  const data = await fetchYears();

  // dataから年度のみ取得し、今年度がない場合は加え、年度順に並び替えて配列として返す。
  const years = data.map((item) => item.year);
  if (!years.includes(moment().year())) years.push(moment().year());
  years.sort((a, b) => b - a);

  return years;
};

const Page = async ({
  searchParams,
}: {
  searchParams: {
    year: string;
  };
}) => {
  const { year } = searchParams || moment().year().toString();
  const years = await fetchData();

  return <YearNavigation years={years} year={Number(year)} />;
};

export default Page;
