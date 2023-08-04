import { ReactNode, type FC } from "react";

export const PageTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="mb-4 font-serif text-3xl font-semibold tracking-wide md:mb-8 md:text-4xl">
    {children}
  </h1>
);
