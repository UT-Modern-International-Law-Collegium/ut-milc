import { NextResponse } from 'next/server';
import { TopData } from '../../../lib/type/topData';
import { wpPrefix } from '../wpPrefix';

const wpTopPageContentSlugs: string[] = [
  'top-about-us',
  'top-awards',
  'top-join-us',
];

export const GET = async (_: Request) => {
  const wpRendereds: string[] = await Promise.all(
    wpTopPageContentSlugs.map(async (slug: string) => {
      const res = await fetch(`${wpPrefix()}/pages?slug=${slug}`);
      const data = await res.json();
      const rendered: string = data[0].content.rendered;
      return rendered;
    })
  );

  const topData: TopData = {
    aboutUs: wpRendereds[0],
    awards: wpRendereds[1],
    joinUs: wpRendereds[2],
  };

  return NextResponse.json({ data: topData });
};
