import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosWpInstance } from '../../../lib/axios';
import { AwardData } from '../../../lib/type/awardData';
import { WpAwardRes } from '../../../lib/type/wp';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { year } = req.query;
  if (req.method === 'GET') {
    const tagId: string = req.query['tagId'] as string;
    const wpRes: AxiosResponse<any, any> = await axiosWpInstance.get(
      `/posts?tags=${tagId}&_fields=id,content,title`
    );
    const wpResData: WpAwardRes[] = wpRes.data;
    const awardRes: AwardData[] = wpResData.map((item: WpAwardRes) => {
      return {
        id: item.id,
        year: Number(year),
        content: item.content.rendered,
        title: item.title.rendered,
      };
    });
    return res.status(200).json(awardRes);
  } else {
    return res.status(405).json({ err: 'method not allowed.' });
  }
};

export default handler;
