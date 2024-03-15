import "react-image-gallery/styles/css/image-gallery.css";

import { BsFillSquareFill } from "react-icons/bs";

import { PageTitle } from "@/components/page-tItle";
import { data } from "./data";

import { CustomImageGallery } from "@/components/image-gallery";
import AboutUs1 from "@/public/about-us-1.jpg";
import AboutUs2 from "@/public/about-us-2.jpg";
import AboutUs3 from "@/public/about-us-3.jpg";
import AboutUs4 from "@/public/about-us-4.jpg";

export const dynamic = "force-dynamic";

const images = [
  {
    original: AboutUs1.src,
    thumbnail: AboutUs1.src,
  },
  {
    original: AboutUs2.src,
    thumbnail: AboutUs2.src,
  },
  {
    original: AboutUs3.src,
    thumbnail: AboutUs3.src,
  },
  {
    original: AboutUs4.src,
    thumbnail: AboutUs4.src,
  },
];

export default function Page() {
  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <PageTitle>団体紹介</PageTitle>
      <CustomImageGallery images={images} />
      {data.sections.map((section, index) => (
        <div key={index} className="my-12 w-full">
          <div className="flex items-center gap-2">
            <BsFillSquareFill className="text-[#4A5568]" />
            <h2 className="text-2xl font-semibold">{section.title}</h2>
          </div>
          <p className="my-4 text-lg leading-loose md:border-l md:border-gray-300 md:pl-5">
            {section.content}
          </p>
        </div>
      ))}
      {/* 役員紹介 */}
      <div className="flex items-center gap-2">
        <BsFillSquareFill className="text-[#4A5568]" />
        <h2 className="text-2xl font-semibold">2023年度役員紹介</h2>
      </div>
      <table className="mt-4 w-full">
        <tbody>
          {data.members.map((member: string[], index: number) => (
            <tr key={index}>
              <th className="border-4 border-b border-white bg-gray-50 py-2 pl-2 text-left text-lg">
                {member[0]}
              </th>
              <td className="border-b border-gray-100 py-2 pl-2 text-lg">
                {member[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
