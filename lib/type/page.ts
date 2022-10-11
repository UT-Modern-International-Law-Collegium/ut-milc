export type News = {
  id: number;
  title: string;
  content: string;
  created_at: Date | string;
  updated_at: Date | string | null;
  tag: string;
  status: 'public' | 'draft';
};

export type Award = {
  id: number;
  year: number;
  content: string;
  status: 'draft' | 'public';
  created_at: Date | string;
  updated_at: Date | string | null;
  title: string;
};

export type AboutUsSection = {
  id: number;
  title: string;
  content: string;
  created_at: Date | string;
  updated_at: Date | string | null;
  status: 'public' | 'draft';
};

export type Member = {
  id: number;
  position: string;
  name: string;
  grade: number;
};

export type Session = {
  desc: string;
  time: string;
};

export type Event = {
  name: string;
  sessions: Session[];
  comment: string;
};
