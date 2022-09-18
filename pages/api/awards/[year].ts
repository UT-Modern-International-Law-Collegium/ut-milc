import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const { year } = req.query;
        const dbQuery: string = `SELECT * FROM awards WHERE year=${year}`;
        const awardsRes = await excuteQuery(dbQuery);
        return res.status(200).json(awardsRes);
      } catch (err) {
        throw new Error(`error at /api/awards/[year]: ${err}`);
      }
    default:
      throw new Error('method must be only GET at /api/awards/[year]');
  }
};

export default handler;
