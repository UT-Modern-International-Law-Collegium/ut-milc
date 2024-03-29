import "./style.css";

import { InnerHTML } from "@/components/inner-html";
import { Separator } from "@/components/ui/separator";
import type { WelcomeData } from "@/lib/type";
import { nextPrefix } from "@/lib/url-prefix";

export default async function Page() {
  const res = await fetch(`${nextPrefix()}/welcome`, {
    cache: "no-store",
  });
  const data: { data: WelcomeData } = await res.json();
  const welcome = data.data;

  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <InnerHTML
        content={welcome.title}
        className="text-center text-4xl font-bold"
      />
      <Separator className="my-4" />
      <InnerHTML content={welcome.content} className="custom-text" />
    </div>
  );
}
