import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../lib/fakeData';
import { excuteQuery } from '../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        if (process.env.NODE_ENV === 'development') {
          return res.status(200).json(fakeData.top);
        } else {
          const response = await excuteQuery(
            'SELECT about FROM api_toppagedata'
          );
          return res.status(200).json(response);
        }
      } catch (err) {
        throw new Error(`error at /api/top :${err}`);
      }
    default:
      throw new Error(`method must be only GET at /api/top`);
  }
};

export default handler;
