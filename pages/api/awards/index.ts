import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const isPath: boolean = (req.query['path'] as string) === 'true';
        if (isPath) {
          const response = await excuteQuery(
            'SELECT DISTINCT year FROM awards'
          );
        } else {
          const response = await excuteQuery('SELECT * FROM awards');
          return res.status(200).json(response);
        }
      } catch (err) {
        throw new Error(`error at /api/awards: ${err}`);
      }
    default:
      throw new Error(`method can only be GET`);
  }
};

export default handler;
