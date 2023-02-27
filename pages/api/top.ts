import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosWpInstance } from '../../lib/axios';
import { TopRes } from '../../lib/type/api';
import { WpPostContent } from '../../lib/type/wp';
import { sliceListByNumber } from '../../utils/sliceListByNumber';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      const wpRes: AxiosResponse<any, any> = await axiosWpInstance.get(
        '/pages?slug=top'
      );
      const content: string = (wpRes.data[0].content as WpPostContent).rendered;
      const splitedContent: string[] = content
        .split(/<\/h2>|<\/p>/g)
        .filter((item: string) => item.match(/<h2|<p/g));
      const tmpListGroup: string[][] = sliceListByNumber<string>(
        splitedContent,
        2
      );
      let contentListGroup: string[][] = [];
      for (const list of tmpListGroup) {
        let tmpList = [];
        for (const item of list) {
          tmpList.push(item.split(/<h2>|<p>/g)[1]);
        }
        contentListGroup.push(tmpList);
      }
      let topRes: TopRes = {} as unknown as TopRes;
      for (const list of contentListGroup) {
        let key: string = '';
        if (list[0].indexOf(' ') !== -1) {
          // 半角の空白を含む場合は、半角の空白を消した上で単語同士をキャメルケースでつなげる。
          const tmpKeyList: string[] = list[0].split(' ');
          tmpKeyList.forEach((str: string, i: number) => {
            if (i === 0) {
              // 先頭の文字を小文字にする。
              key += str.charAt(0).toLocaleLowerCase() + str.slice(1);
            } else {
              // 先頭の文字を大文字にする。
              key += str.charAt(0).toUpperCase() + str.slice(1);
            }
          });
        } else {
          // 半角の空白を含まない場合は、先頭を小文字にする。
          key = list[0].charAt(0).toLocaleLowerCase() + list[0].slice(1);
        }
        topRes[key as keyof typeof topRes] = list[1];
      }
      return res.status(200).json(topRes);
    } catch (err) {
      console.error({ err });
      return res.status(500).json(err);
    }
  } else {
    return res.status(405).json({ err: 'method not allowed.' });
  }
};

export default handler;
