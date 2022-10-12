import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../../lib/fakeData';
import { excuteQuery } from '../../../lib/mysql';
import { News } from '../../../lib/type/page';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { newsId } = req.query;
  if (process.env.ENV_VAR === 'development') {
    let newsRes: News;
    for (const news of fakeData.news) {
      if (news.id === Number(newsId)) newsRes = news;
    }
    res.status(200).json(newsRes!);
  } else {
    switch (req.method) {
      case 'GET':
        try {
          const dbQuery: string = `SELECT * FROM news WHERE status="public" AND id=${newsId}`;
          const response = await excuteQuery(dbQuery);
          const newsRes: News = response[0];
          res.status(200).json(newsRes);
        } catch (err) {
          throw new Error(`error at /api/news :${err}`);
        }
      default:
        throw new Error(`method must be only GET at /api/news`);
    }
  }
};

export default handler;
