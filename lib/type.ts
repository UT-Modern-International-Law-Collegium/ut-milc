export type Article = {
  id: number;
  title: string;
  content: string;
  created_at: any;
  tag: string;
  status: 'public' | 'draft';
};

export type AboutPageData = {
  body: Array<{
    id: number;
    title: string;
    content: string;
    created_at: any;
    status: string;
  }>;
  members: string[][];
};

export type Award = {
  name: string;
  detail: string[];
};
