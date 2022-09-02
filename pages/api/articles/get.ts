import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const articles = await excuteQuery('SELECT * FROM api_article');
    res.status(200).json({ articles: articles });
  } catch (err) {
    console.error(`error at /api/articles/post err: ${err}`);
    res.status(500).json({ message: err });
  }
};

export default handler;
