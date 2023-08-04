"use client";

import moment from "moment";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Pathname } from "@/lib/type/utils";

export const DesktopHeader = () => {
  const currentPath = usePathname();

  const linkStyle = (pathname: Pathname) =>
    `md:text-xl lg:text-2xl font-serif leading-loose block ${
      currentPath === pathname ? "text-[#00ffb1]" : "text-[#000000]"
    }`;

  return (
    <div className="hidden md:fixed md:z-[2] md:flex md:w-screen md:justify-end md:gap-8 md:bg-white md:bg-opacity-75 md:py-2 md:pr-12">
      <Link href={"/"} className={`${linkStyle("/")}`}>
        Top
      </Link>
      <Link href={"/about-us"} className={`${linkStyle("/about-us")}`}>
        About us
      </Link>
      <Link
        href={`/awards?year=${moment().year()}`}
        className={`${linkStyle(`/awards`)}`}
      >
        Awards
      </Link>
      <a
        href={"https://note.com/utmilc"}
        target="_blank"
        rel="noreferrer"
        className={`${linkStyle("/news")}`}
      >
        News
      </a>
      <Link href={"/join-us"} className={`${linkStyle("/join-us")}`}>
        Join us
      </Link>
    </div>
  );
};
