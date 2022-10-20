import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../lib/fakeData';
import { excuteQuery } from '../../lib/mysql';
import { TopRes } from '../../lib/type/api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // 本番環境においてはdbからデータを取得。
  if (req.method === 'GET') {
    try {
      const response = await excuteQuery(
        'SELECT about, award, join_us FROM top_content ORDER BY id DESC LIMIT 1'
      );
      const topRes: TopRes = response[0];
      res.status(200).json(topRes);
    } catch (err) {
      throw new Error(`error at /api/top :${err}`);
    }
  } else {
    throw new Error(`method must be only GET at /api/top: ${req.method}`);
  }
};

export default handler;
