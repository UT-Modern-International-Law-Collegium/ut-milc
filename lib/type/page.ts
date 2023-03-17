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

export type Session = {
  desc: string;
  time: string;
};

export type Event = {
  name: string;
  sessions: Session[];
  comment: string;
};
