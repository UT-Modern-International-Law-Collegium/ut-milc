import { FC, ReactNode } from 'react';

export const PageTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="font-serif text-4xl tracking-wide font-semibold">
    {children}
  </h1>
);
