import { BsFillSquareFill } from "react-icons/bs";

import { PageTitle } from "@/components/page-tItle";
import { data } from "./data";

export default function Page() {
  return (
    <div className="mx-auto w-11/12 py-20 md:w-[88vw] md:py-24 lg:w-[68vw]">
      <PageTitle>団体紹介</PageTitle>
      {data.sections.map((section, index) => (
        <div key={index} className="w-full">
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
