import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const response = await excuteQuery('SELECT about FROM api_toppagedata');
        return res.status(200).json(response);
      } catch (err) {
        throw new Error(`error at /api/top :${err}`);
      }
    default:
      throw new Error(`method must be only GET at /api/top`);
  }
};

export default handler;
