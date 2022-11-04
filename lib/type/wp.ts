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
