import { AboutUsSection, Member } from './page';

export type TopRes = {
  aboutUs: string;
  awards: string;
  joinUs: string;
};

export type AboutRes = { sections: AboutUsSection[]; members: Member[] };

export type DynamicRouteObj = {
  params: {
    year: string;
  };
}[];

export type AwardYearsRes = {
  year: number;
};
