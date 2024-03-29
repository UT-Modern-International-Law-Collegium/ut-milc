import { NextResponse } from "next/server";

import { wpPrefix } from "@/lib/url-prefix";

export const GET = async () => {
  const res = await fetch(`${wpPrefix()}/pages?slug=welcome`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.length === 0) {
    return new Response("no welcome page.", {
      status: 404,
    });
  }

  const title = data[0].title.rendered;
  const content = data[0].content.rendered;

  return NextResponse.json({
    data: {
      title,
      content,
    },
  });
};
