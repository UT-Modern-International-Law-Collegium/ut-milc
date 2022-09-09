import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        // TODO: mysqlにaboutテーブル作って、そこからコンテンツを引っ張ってくる。
        res.status(200).json({});
      } catch (err) {
        res.status(500).json({ message: `error at /api/about err: ${err}` });
      }
    default:
      throw new Error('method must be only GET at /api/about');
  }
};

export default handler;