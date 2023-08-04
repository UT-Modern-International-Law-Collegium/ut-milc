import { NextResponse } from "next/server";

import { wpPrefix } from "../../../wpPrefix";

export const GET = async () => {
  // category=3（awards）の投稿から、タグを取得
  const res = await fetch(`${wpPrefix()}/posts?&categories=3&_fields=tags`, {
    next: { revalidate: 0 },
  });
  const data: { tags: number[] }[] = await res.json();

  // tagIdの配列を作る（idの重複は削除）
  let tagIds: number[] = [];
  for (const item of data) {
    const including: boolean = tagIds.includes(item.tags[0]);
    if (!including) {
      tagIds.push(item.tags[0]);
    }
  }

  // tagIdからtagの名前を取得
  const years: {
    year: number;
    id: number;
  }[] = await Promise.all(
    tagIds.map(async (id: number) => {
      const _res = await fetch(`${wpPrefix()}/tags/${id}?_fields=name`);
      const _data: { name: string } = await _res.json();
      return { year: Number(_data.name), id };
    })
  );

  return NextResponse.json({ data: years });
};
