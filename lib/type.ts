export type AboutUsData = {
  sections: { title: string; content: string }[];
  members: string[][];
};

export type AwardData = {
  id: number;
  year: number;
  content: string;
  title: string;
};

export type NewsData = {
  id: number;
  title: string;
  content: string;
  createdAt: Date | string;
  tags: string[];
};

export type TopData = {
  aboutUs: string;
  awards: string;
  joinUs: string;
};

export type Pathname = "/" | "/about-us" | "/news" | "/join-us" | "/awards";

export type WelcomeData = {
  title: string;
  content: string;
};

export type WpPostContent = {
  rendered: string;
  protected: boolean;
};

export type WpPostExcerpt = {
  rendered: string;
  protected: boolean;
};

export type WpPostTitle = {
  rendered: string;
};

export type WpNewsRes = {
  id: number;
  date: string;
  title: WpPostTitle;
  content: WpPostContent;
  excerpt: WpPostExcerpt;
  tags: number[];
};

export type WpTagName = {
  name: string;
};

export type WpAwardYearRes = {
  id: number;
  title: WpPostTitle;
  content: WpPostContent;
  tags: number[];
};

export type WpAwardRes = {
  id: number;
  content: WpPostContent;
  title: WpPostTitle;
};

export type WpAboutRes = {
  id: number;
  date: string;
  modified: string;
  content: WpPostContent;
};
