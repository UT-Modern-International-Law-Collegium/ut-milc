export type Article = {
  id: number;
  title: string;
  content: string;
  created_at: any;
  tag: string;
  status: 'public' | 'draft';
};

export type AboutPageData = {
  id: number;
  title: string;
  content: string;
  created_at: any;
  status: string;
};
