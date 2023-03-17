import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosWpInstance } from '../../../lib/axios';
import { NewsData } from '../../../lib/type/newsData';
import { WpNewsRes, WpTagName } from '../../../lib/type/wp';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      // countに値がない場合は10を代入。
      const count: string = (req.query['count'] as string) || '10';
      const wpNewsRes: AxiosResponse<any, any> = await axiosWpInstance.get(
        `/posts?per_page=${count}&categories=6&_fields=id,date,content,excerpt,title,tags`
      );
      const wpNewsResData: WpNewsRes[] = wpNewsRes.data;
      const newsRes: NewsData[] = await Promise.all(
        wpNewsResData.map(async (data: WpNewsRes) => {
          const tags: string[] = await Promise.all(
            data.tags.map(async (tag: number) => {
              const wpTagRes: AxiosResponse<any, any> =
                await axiosWpInstance.get(`/tags/${tag}?_fields=name`);
              const wpTagResData: WpTagName = wpTagRes.data;
              return wpTagResData.name;
            })
          );
          return {
            id: data.id,
            title: data.title.rendered,
            content: data.content.rendered,
            createdAt: data.date,
            tags,
          };
        })
      );
      return res.status(200).json(newsRes);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(405).json({ err: 'method not allowed' });
  }
};

export default handler;
