import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../../lib/fakeData';
import { excuteQuery } from '../../../lib/mysql';
import { News } from '../../../lib/type/page';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (process.env.ENV_VAR === 'development') {
    const newsListRes: News[] = fakeData.news;
    res.status(200).json(newsListRes);
  } else {
    if (req.method === 'GET') {
      try {
        const count: string = req.query['count'] as string;
        let dbQuery: string;
        if (count) {
          dbQuery = `SELECT * FROM news WHERE status="public" LIMIT ${count}`;
        } else {
          dbQuery = `SELECT * FROM news WHERE status="public"`;
        }
        const response = await excuteQuery(dbQuery);
        const newsListRes: News[] = response;
        res.status(200).json(newsListRes);
      } catch (err) {
        throw new Error(`error at /api/news :${err}`);
      }
    } else {
      throw new Error(`method must be only GET at /api/news`);
    }
  }
};

export default handler;
