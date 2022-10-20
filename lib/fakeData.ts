import moment from 'moment';
import { AboutUsSection, Award, Member, News, Event } from './type/page';

// NOTE: fakeDataのの型は想定される使用が限定的だから、type.tsではなくここで定義する。
export type FakeData = {
  top: {
    about: string;
    award: string;
    join_us: string;
  };
  awards: Award[];
  about: { sections: AboutUsSection[]; members: Member[] };
  news: News[];
  events: Event[];
};

export const fakeData: FakeData = {
  top: {
    about: '',
    award: '',
    join_us: '',
  },
  awards: [
    {
      id: 2,
      title: 'Japan Cup',
      year: 2021,
      content:
        '<h2>Jpan cup</h2>\r\n<h3>総合結果</h3>\r\n<p>５位<br />弁論者 ：夏目俊之介、石井大智、清水海杜、赤木芙実加<br />弁論補佐人：前田悠輔、𠮷野天</p>\r\n<h3>書面結果</h3>\r\n<p>被告２位</p>\r\n<h3>個人結果</h3>\r\n<p>被告１位　赤木芙実加<br />原告７位　石井大智<br />被告９位　清水海杜</p>',
      status: 'public',
      created_at: '2022-09-17',
      updated_at: null,
    },
    {
      id: 4,
      title: 'Amity International moot court（10月28~31日開催、国際大会）',
      year: 2021,
      content:
        '<h3>総合結果</h3>\r\n<p>Semi-finalist (全国3位)<br />チームリーダー：田雨昕<br />弁論者：劉思怡、孫望舒<br />リサーチャー：李羽翯</p>\r\n<h3>個人結果</h3>\r\n<p>3rd Best Oralist：劉思怡（全国3位)</p>',
      status: 'public',
      created_at: '2022-09-18',
      updated_at: null,
    },
    {
      id: 5,
      title: '秋の国際法模擬裁判大会（11月28日開催）',
      year: 2021,
      content:
        '<h3>総合結果</h3>\r\n<p>優勝<br />チームリーダー：小林一也<br />弁論者：𠮷野天、髙木大明、新富文博、奥野壮亮</p>\r\n<h3>書面結果</h3>\r\n<p>原告1位</p>\r\n<h3>個人結果</h3>\r\n<p>原告1位　新富文博<br />被告2位　吉野天<br />被告3位　髙木大明</p>',
      status: 'public',
      created_at: '2022-09-18',
      updated_at: null,
    },
    {
      id: 6,
      title:
        '2022 Philip C. Jessup International Law Moot Court Competition National Round',
      year: 2021,
      content:
        '<h3>National Round (国内予選)</h3>\r\n<h4>総合結果</h4>\r\n<p>優勝 (国際大会進出)<br /><br />弁論者:<br />原告:清水海杜、夏目俊之介<br />被告:石井大智、田雨昕<br />チームマネージャー:小林一也</p>\r\n<h4>個人結果</h4>\r\n<p>原告1位　清水海杜<br />原告2位　夏目俊之介</p>',
      status: 'public',
      created_at: '2022-09-18',
      updated_at: null,
    },
    {
      id: 7,
      title:
        '2022 Philip C. Jessup International Law Moot Court Competition International Round',
      year: 2022,
      content:
        '<h3>International Round (世界大会)</h3>\r\n<h4>Preliminary Rounds Top50 Oralists選出</h4>\r\n<p>夏目俊之介（世界6位)<br />清水海杜（世界7位）</p>',
      status: 'public',
      created_at: '2022-09-26',
      updated_at: null,
    },
  ],
  about: {
    sections: [
      {
        id: 0,
        title: '',
        content: '',
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
      title: '',
      content: '',
      created_at: moment('2022-09-26').toString(),
      updated_at: null,
      tag: '',
      status: 'public',
    },
  ],
  events: [
    {
      name: 'Shinkan-2022-Autumn',
      sessions: [
        {
          desc: 'サークルの概要・説明・質疑応答・交流会',
          time: '9月26日 20:00-',
        },
        {
          desc: '昨年度秋入会者3名によるサークル紹介・交流会',
          time: '10月2日 20:00-',
        },
      ],
      comment: `UTbaseの新歓で目に入りました。国際法研究会といいつつさまざまな企画を実施しているのが魅力です。セメスターおきに企画が変わるので、年度頭に入らなかった人でも馴染みやすいです。イベント等の交流の機会もあるので入会時期を問わず会員とは仲良くできます。

        わたしは一年生の秋からの入会でした。半年遅れで入って知識がない分、勉強会などについていけるか不安でしたが、初心者の私にも参加しやすい企画が多く、とくにハンディキャップを感じることはありませんでした。また、既存メンバーとも親しくなることができ、充実したサークル生活を送ることができています。
        
        セメスター毎に活動が区切られていて、途中から入っても活動や交流がしやすいサークルだと思います。
        活動の内容も量も本当に調整しやすいので、少しでも興味があるならとりあえず入ってみるのがおすすめです。私は国際法という名前しか知らない状態で入りましたが、活動をとおして自分の世界が広がり、知的好奇心が湧いてくるのを感じました。
        予備知識が一切なかった私は、専門的な分会はついていけるかどうかで精一杯だったので、初めて学ぶ方は勉強会にも参加してみるのがいいのではないかと個人的には思います！`,
    },
  ],
};
