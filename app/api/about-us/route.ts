import { NextResponse } from "next/server";

import type { AboutUsData } from "@/lib/type";
import { wpPrefix } from "@/lib/url-prefix";
import { sliceListByNumber } from "@/lib/utils";

export const GET = async () => {
  const res = await fetch(
    `${wpPrefix()}/pages?slug=about-us&_fields=id,date,modified,content`
  );
  const data = (await res.json())[0];
  const rendered: string = data.content.rendered;

  // まずwp-block-tableで分割
  const tmpSplited: string[] = rendered.split("wp-block-table");

  // 段階紹介と幹部紹介を分けて取り出す
  const aboutUs: string = tmpSplited[0];
  const members: string = tmpSplited[1];

  // -----------------
  // about-usの処理
  // -----------------

  // aboutUsをh2あるいはpタグの綴じタグを起点に分割する
  const splited: string[] = aboutUs.split(/<\/h2>|<\/p>/g);

  /**
   * 上で分割したaboutUsの要素のうち、h2あるいはpタグで始まるものを要素の単位としてフィルタリング
   * ->結果、filteredは以下のような配列となる。h2タグとpタグが交互に来ることに注目。
   *  [
          "<h2>aaa...",
          "<p>bbb...",
          "<h2>ccc...",
          "<p>ddd...",
      ]
   */
  const filtered: string[] = splited.filter((item: string) =>
    item.match(/<h2|<p/g)
  );

  // filteredは連続した2つの要素で1セット（h2タグから始まるものとpタグから始まるもの）
  const aboutUsBlocks = sliceListByNumber<string>(filtered, 2);
  console.info({ aboutUsBlocks }); // <- この出力を見れば、何がやりたいかわかるはず

  // 以下の処理では、aboutUsBlocksからh2タグとpタグを取り除いている（ex: "<h2>sample..." -> "sample..."）
  let aboutUsBlocksWithoutHTML: string[][] = [];
  for (const list of aboutUsBlocks) {
    let tmpList = [];
    for (const item of list) {
      // itemには"<h2>sample..."や"<p>sample..."などの文字列が相当
      const _splited: string = item.split(/<h2>|<p>/g)[1]; // <- <h2>あるいは<p>を起点に分割し、タグで囲まれた文字列を取得
      console.info({ _splited });
      tmpList.push(_splited);
    }
    aboutUsBlocksWithoutHTML.push(tmpList);
  }
  console.info({ aboutUsBlocksWithoutHTML });

  // 以下では、aboutUsBlocksWithoutHTMLを{ title: ..., content: ... } の形に整形している
  let aboutUsObjList: Pick<AboutUsData, "sections">["sections"] = [];
  for (const list of aboutUsBlocksWithoutHTML) {
    const tmpAboutUs: { title: string; content: string } = {
      title: list[0],
      content: list[1],
    };
    aboutUsObjList.push(tmpAboutUs);
  }

  // -----------------
  // membersの処理
  // -----------------

  // membersは表であることに留意。まず、trタグを起点に分割。
  const membersSplitedByTr: string[] = members.split("tr");

  let splitedMembers: Pick<AboutUsData, "members">["members"] = [];
  for (const item of membersSplitedByTr) {
    if (item.indexOf("</td><td>") !== -1) {
      const tmpItem: string[] = item
        .split("</td><td>")
        .map((str: string) => str.replace(/><td>|<\/td><\//g, ""));
      splitedMembers.push(tmpItem);
    }
  }

  return NextResponse.json({
    data: {
      sections: aboutUsObjList,
      members: splitedMembers,
    },
  });
};
