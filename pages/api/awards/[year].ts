import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../../lib/fakeData';
import { excuteQuery } from '../../../lib/mysql';
import { Award } from '../../../lib/type/page';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { year } = req.query;
  if (process.env.ENV_VAR === 'development') {
    const awardsRes: Award[] = fakeData.awards.filter(
      (award: Award) => award.year === Number(year)
    );
    res.status(200).json(awardsRes);
  } else {
    switch (req.method) {
      case 'GET':
        try {
          const dbQuery: string = `SELECT * FROM awards WHERE year=${year}`;
          const awardsRes: Award[] = await excuteQuery(dbQuery);
          res.status(200).json(awardsRes);
        } catch (err) {
          throw new Error(`error at /api/awards/[year]: ${err}`);
        }
      default:
        throw new Error('method must be only GET at /api/awards/[year]');
    }
  }
};

export default handler;
