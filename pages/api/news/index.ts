import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('#####/api/news/index.ts#####');
  switch (req.method) {
    case 'GET':
      try {
        console.log('trying');
        const count: string = req.query['count'] as string;
        let dbQuery: string;
        if (count) {
          dbQuery = `SELECT * FROM news WHERE status="public" LIMIT ${count}`;
        } else {
          dbQuery = `SELECT * FROM news WHERE status="public"`;
        }
        const news = await excuteQuery(dbQuery);
        console.log('#########################');
        console.log({ news });
        console.log('#########################');
        return res.status(200).json(news);
      } catch (err) {
        throw new Error(`error at /api/news :${err}`);
      }
    default:
      throw new Error(`method must be only GET at /api/news`);
  }
};

export default handler;
