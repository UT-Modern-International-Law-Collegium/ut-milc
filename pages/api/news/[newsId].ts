import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../../lib/fakeData';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        if (process.env.ENV_VAR === 'development') {
          const { newsId } = req.query;
          return res.status(200).json([fakeData.news[Number(newsId)]]);
        } else {
          const { newsId } = req.query;
          const dbQuery: string = `SELECT * FROM api_article WHERE status="public" AND id=${newsId}`;
          const news = await excuteQuery(dbQuery);
          return res.status(200).json(news);
        }
      } catch (err) {
        throw new Error(`error at /api/news :${err}`);
      }
    default:
      throw new Error(`method must be only GET at /api/news`);
  }
};

export default handler;
