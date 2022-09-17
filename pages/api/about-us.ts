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
          .json({ sections: aboutSectionsRes, members: membersRes });
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
