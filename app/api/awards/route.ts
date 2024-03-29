import { NextResponse } from "next/server";

import type { AwardData } from "@/lib/type";
import { wpPrefix } from "@/lib/url-prefix";

type AwardRes = {
  id: number;
  title: { rendered: string };
  content: {
    rendered: string;
    protected: boolean;
  };
  tags: number[];
};

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const tagId: string | null = searchParams.get("tag_id");

  const res = await fetch(
    `${wpPrefix()}/posts?&categories=3&tags=${tagId}&_fields=id,content,title,tags`,
    { next: { revalidate: 0 } }
  );
  const data: AwardRes[] = await res.json();

  if (data.length === 0) {
    return new Response("no posts found", { status: 404 });
  }

  const awards: AwardData[] = await Promise.all(
    data.map(async (award) => {
      const _res = await fetch(
        `${wpPrefix()}/tags/${award.tags[0]}?_fields=name`
      );
      const _data: { name: string } = await _res.json();

      return {
        id: award.id,
        title: award.title.rendered,
        content: award.content.rendered,
        year: Number(_data.name),
      };
    })
  );

  return NextResponse.json({ data: awards });
};
