export type News = {
  id: number;
  title: string;
  content: string;
  createdAt: Date | string;
  tags: string[];
};

export type Award = {
  id: number;
  year: number;
  content: string;
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
