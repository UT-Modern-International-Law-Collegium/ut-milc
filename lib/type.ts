export type Article = {
  id: number;
  title: string;
  content: string;
  created_at: any;
  tag: string;
  status: 'public' | 'draft';
};
