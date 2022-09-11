import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../lib/fakeData';
import { excuteQuery } from '../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        if (process.env.ENV_VAR === 'development') {
          return res.status(200).json(fakeData.about);
        } else {
          const response = await excuteQuery(
            'SELECT * FROM api_aboutpagedata WHERE status="public"'
          );
          return res.status(200).json(response);
        }
      } catch (err) {
        return res
          .status(500)
          .json({ message: `error at /api/about err: ${err}` });
      }
    default:
      throw new Error('method must be only GET at /api/about');
  }
};

export default handler;
