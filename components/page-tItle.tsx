import { type FC, type ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

export const PageTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mb-4 flex w-full flex-col items-center space-y-4">
    <h1 className="text-center font-serif text-3xl font-semibold tracking-wide md:text-4xl">
      {children}
    </h1>
    <Separator className="bg-gray-400" />
  </div>
);
