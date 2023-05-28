import { BsFillSquareFill } from 'react-icons/bs';

import { AboutUsData } from '@/lib/type/aboutUsData';
import { PageTitle } from '../_components/PageTItle';
import { pageWrapperStyle } from '@/constants/tailwind/pageWrapperStyle';

const AboutUs: AboutUsData = {
  sections: [
    {
      title: '模擬裁判',
      content:
        '模擬裁判大会では、チーム一丸となって架空の国際紛争の問題に取り組みます。実際の国際裁判と同様に、メモリアル（書面での主張）をチームとして作成し、大会前に提出します。そして大会本番では国際法の専門家の前で弁論を行い、メモリアルの特典と合わせて総合優勝を目指します。法学の知識と弁論の力が身につくことはもちろん、仲間と共に準備する時間はかけがえのないものになります！',
    },
    {
      title: '国際法勉強会',
      content:
        '国際法勉強会では、上級生による講義と模擬問題を用いたディスカッションを通して国際法の基礎を学びます。幅広い範囲を広く浅く学ぶので、国際法に初めて触れるメンバーにとっては興味を持つ分野を見つける機会です。多くの人が参加するので学年を超えた交流の機会にもなっています。',
    },
    {
      title: '分会',
      content:
        '分会はセメスター単位で実施され、各々が興味を持っている分野を選び、他のメンバーとの議論を通じて学ぶ勉強会です。国際法勉強会とは逆に、特定のテーマについて狭く深く学ぶ機会になっています。また、国際法に限らず国政政治の分野についての分会も開催されるなど、活動範囲が広がっています。',
    },
    {
      title: '沿革',
      content:
        '東京大学現代国際法研究会は、筒井若水先生（東京大学名誉教授）が開講されていた「昭和43年度筒井ゼミナール」を前身とし、50年以上の歴史を持つサークルです。活動は模擬裁判大会への参加と勉強会の実施の二つの柱からなり、現在100名を超えるメンバーが在籍しています。模擬裁判大会では数十年に渡り優秀な成績を国内外で残しており、勉強会では国際法を初めて学ぶ人がほとんどの中で、充実した議論が行われています。',
    },
  ],
  members: [
    ['学生代表幹事', '小渕 朝陽（2年）'],
    ['副代表幹事', '結城 佳穂（2年）'],
    ['会計幹事　', 'キム ギュリ（2年）'],
    ['渉外幹事', '白戸 晋司（2年）'],
    ['広報幹事', '鈴木 馨子（2年）'],
    ['副広報幹事', '田沼 和樹（2年）'],
  ],
};

const Page = () => (
  <div className={`${pageWrapperStyle}`}>
    <PageTitle>団体紹介</PageTitle>
    {AboutUs.sections.map((section, index) => (
      <div key={index} className="w-full">
        <div className="flex items-center gap-2">
          <BsFillSquareFill className="text-[#4A5568]" />
          <h2 className="text-2xl font-semibold">{section.title}</h2>
        </div>
        <p className="text-lg leading-loose md:border-l md:border-gray-300 md:pl-5 my-4">
          {section.content}
        </p>
      </div>
    ))}
    {/* 役員紹介 */}
    <div className="flex items-center gap-2">
      <BsFillSquareFill className="text-[#4A5568]" />
      <h2 className="text-2xl font-semibold">2023年度役員紹介</h2>
    </div>
    <table className="w-full mt-4">
      <tbody>
        {AboutUs.members.map((member: string[], index: number) => (
          <tr key={index}>
            <th className="bg-gray-50 text-lg py-2 pl-2 text-left border-b border-white border-4">
              {member[0]}
            </th>
            <td className="text-lg py-2 pl-2 border-b border-gray-100">
              {member[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Page;
