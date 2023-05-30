import './style.css';

import { WelcomeData } from '@/lib/type/welcomeData';
import { nextPrefix } from '@/lib/nextPrefix';
import { InnerHTML } from '@/app/_components/InnerHTML';

const Page = async () => {
  const res = await fetch(`${nextPrefix()}/events/welcome`);
  const data: { data: WelcomeData } = await res.json();
  const welcome = data.data;

  return (
    <div className="w-11/12 md:w-[88vw] lg:w-[68vw] mx-auto md:py-24 py-20">
      <InnerHTML
        content={welcome.title}
        className="text-4xl text-center font-serif"
      />
      {/* divider */}
      <div className="border-t my-4" />
      <InnerHTML content={welcome.content} className="custom-text" />
    </div>
  );
};

export default Page;
