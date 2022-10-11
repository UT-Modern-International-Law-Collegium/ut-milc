import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../../lib/fakeData';
import { excuteQuery } from '../../../lib/mysql';
import { AwardYearsRes } from '../../../lib/type/api';
import { Award } from '../../../lib/type/page';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // isPathはgetStaticPathsとgetStaticPropsののどちらでapiが呼び出されているかの識別子。
  const isPath: boolean = (req.query['path'] as string) === 'true';
  if (process.env.ENV_VAR === 'development') {
    if (isPath) {
      const awards: Award[] = fakeData.awards;
      const tmpYears: number[] = awards.map((award: Award) => award.year);
      const years: number[] = Array.from(new Set(tmpYears));
      let awardYearsRes: AwardYearsRes = years.map((year: number) => ({
        year: year,
      }));
      return res.status(200).json(awardYearsRes);
    } else {
      // NOTE: 使用場面がないので未実装
    }
  } else {
    switch (req.method) {
      case 'GET':
        try {
          if (isPath) {
            const awardYearsRes: AwardYearsRes = await excuteQuery(
              'SELECT DISTINCT year FROM awards'
            );
            return res.status(200).json(awardYearsRes);
          } else {
            /**  NOTE: 使用場面がないので未実装
             * const response = await excuteQuery('SELECT * FROM awards');
             * ↑このように全件取得するのがapi的に妥当だと思われる。
             */
          }
        } catch (err) {
          throw new Error(`error at /api/awards: ${err}`);
        }
      default:
        throw new Error(`method can only be GET`);
    }
  }
};

export default handler;
