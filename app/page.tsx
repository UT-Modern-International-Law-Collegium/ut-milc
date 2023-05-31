import moment from "moment";
import Link from "next/link";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";

import AwardCard from "./_components/AwardCard";
import Firstview from "./_components/FirstView";

const dividerStyle =
  "border-t w-1/6 border-gray-500 mx-auto my-4 md:my-6 md:w-1/12 lg:w-[4em]";
const descriptionStyle =
  "leading-loose text-lg text-center md:w-[60vw] md:mx-auto lg:w-[50vw]";
const navigationButtonStyle =
  "text-lg bg-teal-500 text-white px-8 py-2 rounded-full block w-fit mx-auto font-semibold my-10 hover:bg-opacity-75";
const headingStyle = "text-4xl font-serif font-medium text-center md:text-5xl";

const Page = () => (
  <div>
    <Firstview />
    {/* about us */}
    <div className="mt-12 px-4 lg:mt-20">
      <h1 className={`${headingStyle}`}>About us</h1>
      {/* divider */}
      <div className={`${dividerStyle}`} />
      <p className={`${descriptionStyle}`}>
        東京大学現代国際法研究会は、筒井若水先生（東京大学名誉教授）が開講されていた「昭和43年度筒井ゼミナール」を前身とし、50年以上の歴史を持つサークルです。
      </p>
      <Link href="/about-us" className={`${navigationButtonStyle}`}>
        団体紹介はこちら
        <BsArrowRight className="inline-block" />
      </Link>
    </div>
    {/* awards */}
    <div className="mt-20 px-4 lg:mt-28">
      <h1 className={`${headingStyle}`}>Awards</h1>
      {/* divider */}
      <div className={`${dividerStyle}`} />
      <p className={`mb-8 ${descriptionStyle}`}>
        現代国際法研究会は、国内外の大会に数多く参加し、多くの実績を残してきています。
      </p>
      <AwardCard />
      <Link
        href={`/awards?year=${moment().year()}`}
        className={`${navigationButtonStyle}`}
      >
        活動実績はこちら
        <BsArrowRight className="inline-block" />
      </Link>
    </div>
    {/* news */}
    <div className="mt-20 px-4 lg:mt-28">
      <h1 className={`${headingStyle}`}>News</h1>
      {/* divider */}
      <div className={`${dividerStyle}`} />
      <p className={`${descriptionStyle}`}>
        現代国際法研究会は、note.comを利用した情報発信を行なっております。
      </p>
      <a
        href="https://note.com/utmilc"
        target="_blank"
        rel="noreferrer"
        className={`${navigationButtonStyle}`}
      >
        noteはこちら
        <BsArrowRight className="inline-block" />
      </a>
    </div>
    {/* 背景色黒 */}
    <div className="relative flex h-[500px] justify-center bg-night pt-[100px]">
      {/* 白抜きの逆三角形 */}
      <div className="clip-path absolute left-0 top-[-0.4px] h-[100px] w-screen bg-white" />
      {/* join us */}
      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center gap-4">
          <BsCheckCircle className="h-10 w-10 text-[#81E6D9]" />
          <h1 className={`${headingStyle} tracking-wide text-white`}>
            Join us
          </h1>
        </div>
        <p className={`w-[80vw] text-white ${descriptionStyle}`}>
          現代国際法研究会に入会を希望される方は、以下のボタンから申し込み専用ページへ進み、フォームを送信してください。
        </p>
        <Link
          href="/join-us"
          className="rounded-md bg-teal-200 px-8 py-4 text-lg font-semibold hover:bg-opacity-75"
        >
          入会のお申し込みはこちら
          <BsArrowRight className="inline-block" />
        </Link>
      </div>
    </div>
  </div>
);

export default Page;
