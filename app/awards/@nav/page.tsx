import Link from 'next/link';
import moment from 'moment';

import { fetchYears } from '../fetchYears';

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

  return (
    <div className="">
      {years.map((_year: number) => (
        <Link
          key={_year}
          href={`/awards?year=${_year}`}
          className={`block ${
            _year === Number(year) ? 'font-semibold text-teal-500' : ''
          }`}
        >
          {_year}年度
        </Link>
      ))}
    </div>
  );
};

export default Page;
