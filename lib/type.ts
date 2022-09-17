export type News = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  tag: string;
  status: 'public' | 'draft';
};

export type Award = {
  id: number;
  year: number;
  content: string;
  status: 'draft' | 'public';
  created_at: Date;
  updated_at: Date;
  title: string;
};

export type AboutUsSection = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  status: 'public' | 'draft';
};

export type Member = {
  id: number;
  position: string;
  name: string;
  grade: number;
};
