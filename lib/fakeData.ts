import moment from 'moment';
import { AboutUsSection, Award, Member, News } from './type';

type FakeData = {
  top: {
    about: string;
    award: string;
    join_us: string;
  };
  awards: Award[];
  about: { sections: AboutUsSection[]; members: Member[] };
  news: News[];
};

export const fakeData: FakeData = {
  top: {
    about:
      '東京大学現代国際法研究会は、筒井若水先生（東京大学名誉教授）が開講されていた「昭和43年度筒井ゼミナール」を前身とし、50年以上の歴史を持つ東京大学法学部公認サークルです。',
    award:
      '現代国際法研究会は、国内外の大会に数多く参加し、多くの実績を残してきています。',
    join_us:
      '現代国際法研究会に入会を希望される方は、以下のボタンから申し込み専用ページへ進み、フォームを送信してください。',
  },
  awards: [
    {
      id: 2,
      title: 'Japan Cup',
      year: 2021,
      content:
        '<h2 data-mce-style="padding-left: 40px;" style="padding-left: 40px;">総合結果</h2><ul><li style="list-style-type: none;"><ul><li style="">5位<ul><li style="">弁論者 ：夏目俊之介、石井大智、清水海杜、赤木芙実加</li><li style="">弁論補佐人：前田悠輔、𠮷野天<br data-mce-bogus="1"></li></ul></li></ul></li></ul><h2 data-mce-style="padding-left: 40px;" style="padding-left: 40px;">書面結果</h2><ul><li style="list-style-type: none;"><ul><li style="">被告2位<br data-mce-bogus="1"></li></ul></li></ul><h2 data-mce-style="padding-left: 40px;" style="padding-left: 40px;">個人結果</h2><ul><li style="list-style-type: none;"><ul><li>被告１位　赤木芙実加</li><li>原告７位　石井大智</li><li>被告９位　清水海杜</li></ul></li></ul>',
      status: 'public',
      created_at: '2022-09-17',
      updated_at: null,
    },
  ],
  about: {
    sections: [
      {
        id: 0,
        title: '模擬裁判',
        content:
          '模擬裁判大会では、チーム一丸となって架空の国際紛争の問題に取り組みます。実際の国際裁判と同様に、メモリアル（書面での主張）をチームとして作成し、大会前に提出します。そして大会本番では国際法の専門家の前で弁論を行い、メモリアルの特典と合わせて総合優勝を目指します。法学の知識と弁論の力が身につくことはもちろん、仲間と共に準備する時間はかけがえのないものになります！',
        created_at: '',
        updated_at: null,
        status: 'public',
      },
      {
        id: 1,
        title: '国際法勉強会',
        content:
          '国際法勉強会では、上級生による講義と模擬問題を用いたディスカッションを通して国際法の基礎を学びます。幅広い範囲を広く浅く学ぶので、国際法に初めて触れるメンバーにとっては興味を持つ分野を見つける機会です。多くの人が参加するので学年を超えた交流の機会にもなっています。',
        created_at: '',
        updated_at: null,
        status: 'public',
      },
      {
        id: 2,
        title: '分会',
        content:
          '分会はセメスター単位で実施され、各々が興味を持っている分野を選び、他のメンバーとの議論を通じて学ぶ勉強会です。国際法勉強会とは逆に、特定のテーマについて狭く深く学ぶ機会になっています。また、国際法に限らず国政政治の分野についての分会も開催されるなど、活動範囲が広がっています。',
        created_at: '',
        updated_at: null,
        status: 'public',
      },
      {
        id: 3,
        title: '沿革',
        content:
          '東京大学現代国際法研究会は、筒井若水先生（東京大学名誉教授）が開講されていた「昭和43年度筒井ゼミナール」を前身とし、50年以上の歴史を持つサークルです。活動は模擬裁判大会への参加と勉強会の実施の二つの柱からなり、現在100名を超えるメンバーが在籍しています。模擬裁判大会では数十年に渡り優秀な成績を国内外で残しており、勉強会では国際法を初めて学ぶ人がほとんどの中で、充実した議論が行われています。',
        created_at: '',
        updated_at: null,
        status: 'public',
      },
    ],
    members: [
      { id: 0, position: '代表幹事', name: '清水 海杜', grade: 2 },
      { id: 1, position: '副代表幹事', name: '𠮷野 天', grade: 2 },
      { id: 2, position: '副代表幹事', name: '夏目 俊之介', grade: 2 },
      { id: 3, position: '副代表幹事', name: '上田 淳央', grade: 2 },
      { id: 4, position: '会計', name: '金澤 伶', grade: 2 },
      { id: 5, position: '広報', name: '鈴木 栄里花', grade: 2 },
      { id: 6, position: '副広報', name: '髙木 大明', grade: 2 },
    ],
  },
  news: [
    {
      id: 0,
      title: '今日はこれをしました。',
      content: '今日はこれをしました。',
      created_at: moment().toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
    {
      id: 1,
      title: '昨日はこれをしました。',
      content: '昨日はこれをしました。',
      created_at: moment().add(-1, 'd').toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
    {
      id: 2,
      title: 'おとといはこれをしました。',
      content: 'おとといはこれをしました。',
      created_at: moment().add(-2, 'd').toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
    {
      id: 3,
      title: '3日前はこれをしました。',
      content: '3日前はこれをしました。',
      created_at: moment().add(-3, 'd').toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
    {
      id: 4,
      title: '4日前はこれをしました。',
      content: '4日前はこれをしました。',
      created_at: moment().add(-4, 'd').toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
    {
      id: 5,
      title: '今日はこれをしました。',
      content: '今日はこれをしました。',
      created_at: moment().add(-5, 'd').toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
    {
      id: 6,
      title: '今日はこれをしました。',
      content: '今日はこれをしました。',
      created_at: moment().add(-6, 'd').toString(),
      updated_at: null,
      tag: 'テストデータ',
      status: 'public',
    },
  ],
};
