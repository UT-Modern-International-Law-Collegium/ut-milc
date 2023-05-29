'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';

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
        className="flex items-center justify-between w-full text-left text-lg md:hidden"
      >
        年度を選択する
        <MdArrowDropDown
          className={`${
            isAccordionOpen ? 'rotate-180' : ''
          } transition-all transition-duration-500 ease-in-out h-8 w-8
        `}
        />
      </button>
      {/* divider */}
      <div className="border-t w-full border-gray-300 mx-auto mt-2 mb-3 md:hidden" />
      <ul
        className={`${
          isAccordionOpen
            ? 'max-h-80 transition-all transition-duration-800 ease-in-out'
            : 'max-h-0 md:max-h-80'
        } overflow-hidden`}
      >
        {years.map((_year: number) => (
          <li key={_year} className="md:mb-2 md:break-keep">
            <Link
              href={`/awards?year=${_year}`}
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className={`${
                _year === year
                  ? 'font-semibold text-teal-500 md:text-xl'
                  : 'md:text-lg'
              }`}
            >
              {_year}年度
            </Link>
          </li>
        ))}
        {/* divider */}
        <div className="border-t w-full border-gray-300 mx-auto mt-3 mb-2 md:hidden" />
      </ul>
    </div>
  );
};
