import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosWpInstance } from '../../../lib/axios';
import { AwardYearsRes } from '../../../lib/type/api';
import { WpAwardRes, WpTagName } from '../../../lib/type/wp';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      // isPathはgetStaticPathsとgetStaticPropsののどちらでapiが呼び出されているかの識別子。
      const isPath: boolean = (req.query['path'] as string) === 'true';
      if (isPath) {
        const wpRes: AxiosResponse<any, any> = await axiosWpInstance.get(
          `/posts?&categories=3&_fields=id,content,title,tags`
        );
        const wpResData: WpAwardRes[] = wpRes.data;
        const tmpYears: number[] = await Promise.all(
          wpResData.map(async (data: WpAwardRes) => {
            const tmpWpYearRes: AxiosResponse<any, any> =
              await axiosWpInstance.get(`/tags/${data.tags[0]}?_fields=name`);
            const tmpWpYearResData: WpTagName = tmpWpYearRes.data;
            return Number(tmpWpYearResData.name);
          })
        );
        const years: number[] = Array.from(new Set(tmpYears));
        const awardYearsRes: AwardYearsRes[] = years.map((year: number) => ({
          year: year,
        }));
        res.status(200).json(awardYearsRes);
      } else {
        // NOTE: 使用場面がないので未実装
        return res.status(200).json({});
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(405).json({ err: 'method not allowed' });
  }
};

export default handler;
