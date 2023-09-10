"use client";

import Link from "next/link";
import { type FC } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const YearLinks: FC<{ years: number[]; year: number; className?: string }> = ({
  years,
  year,
  className,
}) => {
  return (
    <ul className={cn(className)}>
      {years.map((_year: number) => (
        <li key={_year} className="md:mb-2 md:break-keep">
          <Link
            href={`/awards?year=${_year}`}
            className={cn(
              _year === year
                ? "font-semibold text-teal-500 md:text-xl"
                : "md:text-lg"
            )}
          >
            {_year}年度
          </Link>
        </li>
      ))}
    </ul>
  );
};

type Props = {
  years: number[];
  year: number;
};

export const YearNavigation: FC<Props> = ({ years, year }) => (
  <>
    {/* mobile時はアコーディオン */}
    <Accordion type="single" collapsible className="md:hidden">
      <AccordionItem value="item-1">
        <AccordionTrigger>年度を選択する</AccordionTrigger>
        <AccordionContent>
          <YearLinks years={years} year={year} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* PCでは普通に年度のリンク表示 */}
    <YearLinks years={years} year={year} className="hidden md:block" />
  </>
);
