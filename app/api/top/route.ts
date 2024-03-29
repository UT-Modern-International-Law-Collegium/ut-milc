import { NextResponse } from "next/server";

import type { TopData } from "@/lib/type";
import { wpPrefix } from "@/lib/url-prefix";

const wpTopPageContentSlugs: string[] = [
  "top-about-us",
  "top-awards",
  "top-join-us",
];

export const GET = async (_: Request) => {
  const wpRendereds: string[] = await Promise.all(
    wpTopPageContentSlugs.map(async (slug: string) => {
      const res = await fetch(`${wpPrefix()}/pages?slug=${slug}`);
      const data = await res.json();
      const content: string = data[0].content.rendered;
      return content;
    })
  );

  const topData: TopData = {
    aboutUs: wpRendereds[0],
    awards: wpRendereds[1],
    joinUs: wpRendereds[2],
  };

  return NextResponse.json({ data: topData });
};
