import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const response = await excuteQuery('SELECT * FROM awards');
      return res.status(200).json(response);
    default:
      throw new Error(`method can only be GET`);
  }
};

export default handler;
