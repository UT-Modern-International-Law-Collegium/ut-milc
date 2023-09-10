import "./style.css";

import { InnerHTML } from "@/components/InnerHTML";
import type { WelcomeData } from "@/lib/type";
import { nextPrefix } from "@/lib/url-prefix";

const Page = async () => {
  const res = await fetch(`${nextPrefix()}/events/welcome`);
  const data: { data: WelcomeData } = await res.json();
  const welcome = data.data;

  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <InnerHTML
        content={welcome.title}
        className="text-center font-serif text-4xl"
      />
      {/* divider */}
      <div className="my-4 border-t" />
      <InnerHTML content={welcome.content} className="custom-text" />
    </div>
  );
};

export default Page;
