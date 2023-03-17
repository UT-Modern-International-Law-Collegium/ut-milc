import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosWpInstance } from '../../../lib/axios';
import { NewsData } from '../../../lib/type/newsData';
import { WpNewsRes, WpTagName } from '../../../lib/type/wp';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { newsId } = req.query;
    try {
      const wpRes: AxiosResponse<any, any> = await axiosWpInstance.get(
        `/posts/${newsId}?_fields=id,date,content,excerpt,title,tags`
      );
      const wpResData: WpNewsRes = wpRes.data;
      const tags: string[] = await Promise.all(
        wpResData.tags.map(async (tag: number) => {
          const wpTagRes: AxiosResponse<any, any> = await axiosWpInstance.get(
            `/tags/${tag}?_fields=name`
          );
          const wpTagResData: WpTagName = wpTagRes.data;
          return wpTagResData.name;
        })
      );
      const newsRes: NewsData = {
        id: wpResData.id,
        title: wpResData.title.rendered,
        content: wpResData.content.rendered,
        createdAt: wpResData.date,
        tags,
      };
      return res.status(200).json(newsRes);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(405).json({ err: 'method not allowed' });
  }
};

export default handler;
