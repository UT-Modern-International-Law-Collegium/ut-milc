import { NextApiRequest, NextApiResponse } from 'next';
import { excuteQuery } from '../../lib/mysql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const aboutSectionsRes = await excuteQuery(
          'SELECT * FROM aboutus_sections WHERE status="public"'
        );
        const membersRes = await excuteQuery(
          'SELECT position, name, grade FROM members WHERE position IS NOT NULL'
        );
        return res
          .status(200)
      } catch (err) {
        return res
          .status(500)
      }
    default:
      throw new Error('method must be only GET at /api/events');
  }
};

export default handler;