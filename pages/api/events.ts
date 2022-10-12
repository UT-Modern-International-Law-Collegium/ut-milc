import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        res.status(200);
      } catch (err) {
        res.status(500);
      }
    default:
      throw new Error('method must be only GET at /api/events');
  }
};

export default handler;
