import Image from "next/image";

import { PageTitle } from "@/components/PageTItle";

export default function Page() {
  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
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
          className="text-blue-700 underline"
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
}
