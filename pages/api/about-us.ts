import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const response = await excuteQuery(
          'SELECT * FROM api_aboutpagedata WHERE status="public"'
        );
        return res.status(200).json(response);
      } catch (err) {
        return res
          .status(500)
          .json({ message: `error at /api/about-us err: ${err}` });
      }
    default:
      throw new Error('method must be only GET at /api/about-us');
  }
};

export default handler;
