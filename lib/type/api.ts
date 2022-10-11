import { AboutUsSection, Member } from './page';

export type TopRes = {
  about: string;
  award: string;
  join_us: string;
};

export type AboutRes = { sections: AboutUsSection[]; members: Member[] };

export type DynamicRouteObj = {
  params: {
    year: string;
  };
}[];

export type AwardYearsRes = {
  [key: string]: number;
}[];
