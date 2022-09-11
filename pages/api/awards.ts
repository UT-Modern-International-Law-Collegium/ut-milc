import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json({});
    default:
      throw new Error(`method can only be GET`);
  }
};

export default handler;
