import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('#####/api/awards/index.ts#####');
  switch (req.method) {
    case 'GET':
      try {
        const isPath: boolean = (req.query['path'] as string) === 'true';
        if (isPath) {
          console.log('isPath has passed.');
          const response = await excuteQuery(
            'SELECT DISTINCT year FROM awards'
          );
          console.log('#########################');
          console.log({ response });
          console.log('#########################');
          return res.status(200).json(response);
        } else {
          const response = await excuteQuery('SELECT * FROM awards');
          console.log('##################');
          console.log({ response });
          console.log('##################');

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
