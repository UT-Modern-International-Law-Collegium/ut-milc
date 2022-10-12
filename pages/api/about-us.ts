import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../lib/fakeData';
import { excuteQuery } from '../../lib/mysql';
import { AboutRes } from '../../lib/type/api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (process.env.ENV_VAR === 'development') {
    const aboutRes: AboutRes = fakeData.about;
    res.status(200).json(aboutRes);
  } else {
    switch (req.method) {
      case 'GET':
        try {
          const aboutSectionsRes = await excuteQuery(
            'SELECT * FROM aboutus_sections WHERE status="public"'
          );
          const membersRes = await excuteQuery(
            'SELECT position, name, grade FROM members WHERE position IS NOT NULL'
          );
          const aboutRes: AboutRes = {
            sections: aboutSectionsRes,
            members: membersRes,
          };
          res.status(200).json(aboutRes);
        } catch (err) {
          res
            .status(500)
            .json({ message: `error at /api/about-us err: ${err}` });
        }
      default:
        throw new Error('method must be only GET at /api/about-us');
    }
  }
};

export default handler;
