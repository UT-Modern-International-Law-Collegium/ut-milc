import Image from "next/image";

import { PageTitle } from "@/components/page-tItle";

export default function Page() {
  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <PageTitle>入会申し込み</PageTitle>
      <p>
        入会を希望される方は各種SNS、あるいはGoogleフォームを通じてお問い合わせください！
      </p>
      <div className="my-4 flex flex-col space-y-4">
        <div>
          <h2 className="text-xl font-bold">Line</h2>
          <Image
            src="/line.png"
            width={400}
            height={400}
            alt="東大国際法研の公式LINEQRコード"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">X</h2>
          <Image
            src="/x.png"
            width={400}
            height={400}
            alt="東大国際法研のXQRコード"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">Instagram</h2>
          <Image
            src="/instagram.png"
            width={400}
            height={400}
            alt="東大国際法研のInstagramQRコード"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">Googleフォーム</h2>
          <Image
            src="/google-form.png"
            width={400}
            height={400}
            alt="東大国際法研のGoogleFormQRコード"
          />
        </div>
      </div>
    </div>
  );
}
