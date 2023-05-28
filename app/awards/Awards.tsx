import { AwardData } from '@/lib/type/awardData';
import { nextPrefix } from '@/lib/nextPrefix';

type Props = {
  yearID: number | null;
};

const fetchData = async ({ yearID }: { yearID: number }) => {
  try {
    const res = await fetch(`${nextPrefix()}/awards?tag_id=${yearID}`);
    const data = await res.json();
    return data.data;
  } catch (_) {
    return [];
  }
};

export const Awards = async ({ yearID }: Props) => {
  // yearIDがnullの場合は当該年度のデータが存在しないということ。
  if (!yearID)
    return (
      <div>
        <p>当該年度の活動実績はありません。</p>
      </div>
    );

  const awards: AwardData[] = await fetchData({ yearID });
  return <div></div>;
};
