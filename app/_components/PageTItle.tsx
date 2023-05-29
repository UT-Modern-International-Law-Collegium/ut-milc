import { FC, ReactNode } from 'react';

export const PageTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="font-serif text-3xl tracking-wide font-semibold md:mb-8 md:text-4xl mb-4">
    {children}
  </h1>
);
