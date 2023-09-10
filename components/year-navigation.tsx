"use client";

import Link from "next/link";
import { useState, type FC } from "react";
import { MdArrowDropDown } from "react-icons/md";

import { Separator } from "@/components/ui/separator";

type Props = {
  years: number[];
  year: number;
};

export const YearNavigation: FC<Props> = ({ years, year }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        className="flex w-full items-center justify-between text-left text-lg md:hidden"
      >
        年度を選択する
        <MdArrowDropDown
          className={`${
            isAccordionOpen ? "rotate-180" : ""
          } transition-duration-500 h-8 w-8 transition-all ease-in-out
        `}
        />
      </button>
      <Separator className="block bg-gray-300 md:hidden" />
      <ul
        className={`${
          isAccordionOpen
            ? "transition-duration-800 max-h-80 transition-all ease-in-out"
            : "max-h-0 md:max-h-80"
        } overflow-hidden`}
      >
        {years.map((_year: number) => (
          <li key={_year} className="md:mb-2 md:break-keep">
            <Link
              href={`/awards?year=${_year}`}
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className={`${
                _year === year
                  ? "font-semibold text-teal-500 md:text-xl"
                  : "md:text-lg"
              }`}
            >
              {_year}年度
            </Link>
          </li>
        ))}
        {/* divider */}
        <div className="mx-auto mb-2 mt-3 w-full border-t border-gray-300 md:hidden" />
      </ul>
    </div>
  );
};
