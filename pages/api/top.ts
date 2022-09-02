import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        // TODO: トップページのデータ取得
        res.status(200).json({});
      } catch (err) {
        throw new Error(`error at /api/top :${err}`);
      }
    default:
      throw new Error(`method must be only GET at /api/top`);
  }
};

export default handler;
