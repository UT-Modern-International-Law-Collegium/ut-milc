import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const count: string = req.query['count'] as string;
        let dbQuery: string;
        if (count) {
          dbQuery = `SELECT * FROM api_article WHERE status="public" LIMIT ${count}`;
        } else {
          dbQuery = `SELECT * FROM api_article WHERE status="public"`;
        }
        const news = await excuteQuery(dbQuery);
        return res.status(200).json(news);
      } catch (err) {
        throw new Error(`error at /api/news :${err}`);
      }
    default:
      throw new Error(`method must be only GET at /api/news`);
  }
};

export default handler;
