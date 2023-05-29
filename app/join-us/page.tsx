import Image from 'next/image';

import { PageTitle } from '../_components/PageTItle';

const Page = () => (
  <div className="w-11/12 md:w-[88vw] lg:w-[68vw] mx-auto md:py-24 py-20">
    <PageTitle>入会申し込み</PageTitle>
    <p className="text-lg leading-loose">
      2023年度は公式LINEから入会フォームに回答していただく流れになっております。入会を少しでも検討されている方は公式LINEの友達追加をお願いいたします！
    </p>
    <p>
      URL:
      <a
        href="https://lin.ee/gwVPQY5"
        target="_blank"
        rel="noreferrer"
        className="underline text-blue-700"
      >
        https://lin.ee/gwVPQY5
      </a>
    </p>
    <p>QR: </p>
    <Image
      src="/line.png"
      width={200}
      height={200}
      alt="東大国際法研の公式LINEQRコード"
    />
  </div>
);

export default Page;
