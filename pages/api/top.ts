import { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from '../../lib/fakeData';
import { excuteQuery } from '../../lib/mysql';
import { TopRes } from '../../lib/type/api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // NOTE: 開発の便宜上この出力は残しておく。
  if (process.env.ENV_VAR === 'development') {
    // 開発環境においてはfakeDataを返す。
    const topRes: TopRes = {
      about: fakeData.top.about,
      award: fakeData.top.award,
      join_us: fakeData.top.join_us,
    };
    res.status(200).json(topRes);
    res.end();
  } else {
    // 本番環境においてはdbからデータを取得。
    if (req.method === 'GET') {
      try {
        const response: any[] = await excuteQuery(
          'SELECT about, award, join_us FROM top_content ORDER BY id DESC LIMIT 1'
        );
        const topRes: TopRes = response[0];
        res.status(200).json(topRes);
        res.end();
      } catch (err) {
        throw new Error(`error at /api/top :${err}`);
      }
    } else {
      throw new Error(`method must be only GET at /api/top: ${req.method}`);
    }
  }
};

export default handler;
