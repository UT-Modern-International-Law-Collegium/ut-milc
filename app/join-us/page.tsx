import Image from "next/image";

import { PageTitle } from "@/components/page-tItle";

export default function Page() {
  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <PageTitle>入会申し込み</PageTitle>
      <div className="my-8 flex flex-col space-y-12">
        <div className="flex flex-col space-y-4">
          <p className="text-xl">
            入会を希望される方はLINE追加、またはGoogleフォームからお申し込みください。
          </p>
          <div className="flex space-x-8">
            <div>
              <h2 className="text-xl font-bold">Line</h2>
              <Image
                src="/line.png"
                width={200}
                height={200}
                alt="東大国際法研の公式LINEQRコード"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Googleフォーム</h2>
              <Image
                src="/google-form.png"
                width={200}
                height={200}
                alt="東大国際法研のGoogleFormQRコード"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-xl">
            また、新歓イベント日程等の最新情報はX、Instagramからご確認いただけます。ぜひご登録ください！
          </p>
          <div className="flex space-x-8">
            <div>
              <h2 className="text-xl font-bold">X</h2>
              <Image
                src="/x.png"
                width={200}
                height={200}
                alt="東大国際法研のXQRコード"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Instagram</h2>
              <Image
                src="/instagram.png"
                width={200}
                height={200}
                alt="東大国際法研のInstagramQRコード"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
