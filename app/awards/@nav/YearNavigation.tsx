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
        className="flex items-center justify-between w-full text-left text-lg "
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
      <div className="border-t w-full border-gray-300 mx-auto my-2" />
      <ul
        className={`${
          isAccordionOpen
            ? 'max-h-80 transition-all transition-duration-800 ease-in-out'
            : 'max-h-0'
        } overflow-hidden`}
      >
        {years.map((_year: number) => (
          <li key={_year} className="">
            <Link
              href={`/awards?year=${_year}`}
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className={`${
                _year === year ? 'font-semibold text-teal-500' : ''
              }`}
            >
              {_year}年度
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
