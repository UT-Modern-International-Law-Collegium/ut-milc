import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { axiosWpInstance } from '../../lib/axios';
import { AboutRes } from '../../lib/type/api';
import { WpAboutRes } from '../../lib/type/wp';
import { sliceListByNumber } from '../../utils/sliceListByNumber';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    const wpRes: AxiosResponse<any, any> = await axiosWpInstance.get(
      `/pages?slug=about-us&_fields=id,date,modified,content`
    );
    const wpResData: WpAboutRes = wpRes.data[0];
    const content: string = wpResData.content.rendered;
    const tmpSplitedContent: string[] = content.split('wp-block-table');
    const aboutUs: string = tmpSplitedContent[0];
    const members: string = tmpSplitedContent[1];
    // about us
    const contents: string[] = aboutUs
      .split(/<\/h2>|<\/p>/g)
      .filter((item: string) => item.match(/<h2|<p/g));
    const tmpListGroup: string[][] = sliceListByNumber<string>(contents, 2);
    let contentListGroup: string[][] = [];
    for (const list of tmpListGroup) {
      let tmpList = [];
      for (const item of list) {
        tmpList.push(item.split(/<h2>|<p>/g)[1]);
      }
      contentListGroup.push(tmpList);
    }
    let splitedAboutUs: { title: string; content: string }[] = [];
    for (const list of contentListGroup) {
      const tmpAboutUs: { title: string; content: string } = {
        title: list[0],
        content: list[1],
      };
      splitedAboutUs.push(tmpAboutUs);
    }
    // members
    const membersSplitedByTr: string[] = members.split('tr');
    let splitedMembers: string[][] = [];
    for (const item of membersSplitedByTr) {
      if (item.indexOf('</td><td>') !== -1) {
        const tmpItem: string[] = item
          .split('</td><td>')
          .map((str: string) => str.replace(/><td>|<\/td><\//g, ''));
        splitedMembers.push(tmpItem);
      }
    }
    const aboutUsRes: AboutRes = {
      sections: splitedAboutUs,
      members: splitedMembers,
    };
    return res.status(200).json(aboutUsRes);
  } else {
    return res.status(500).json({ err: 'method not allowed' });
  }
};

export default handler;
