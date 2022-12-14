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
