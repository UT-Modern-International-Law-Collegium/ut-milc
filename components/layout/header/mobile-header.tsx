"use client";

import moment from "moment";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

import type { Pathname } from "@/lib/type";

export const MobileHeader: FC = () => {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const linkStyle = (pathname: Pathname) =>
    `text-2xl font-serif py-4 block pl-4 ${
      currentPath === pathname ? "text-[#00ffb1]" : "text-[#fff]"
    }`;

  return (
    <div className="fixed z-[2] flex h-12 w-screen items-center justify-end bg-white pr-2 md:hidden">
      <button onClick={() => setIsOpen(true)}>
        <RiMenu3Fill className="h-6 w-6" />
      </button>
      {/* overlay */}
      <div
        className={`${
          isOpen ? "right-0" : "right-[-100vw]"
        } absolute top-0 h-screen w-screen bg-white bg-opacity-50 backdrop-blur-md transition-all ease-in-out`}
      />
      {/* drawer */}
      <div
        className={`transition-duration-1000 absolute top-0 h-screen w-5/6 bg-night transition-all ease-in-out ${
          isOpen ? "right-0" : "right-[-120vw]"
        }`}
      >
        <button>
          <MdClose
            className="absolute right-4 top-4 h-8 w-8 text-white"
            onClick={() => setIsOpen(false)}
          />
        </button>
        <Link
          href={"/"}
          onClick={() => setIsOpen(false)}
          className={`${linkStyle("/")} pt-24`}
        >
          Top
        </Link>
        <Link
          href={"/about-us"}
          onClick={() => setIsOpen(false)}
          className={`${linkStyle("/about-us")}`}
        >
          About us
        </Link>
        <Link
          href={`/awards?year=${moment().year()}`}
          onClick={() => setIsOpen(false)}
          className={`${linkStyle(`/awards`)}`}
        >
          Awards
        </Link>
        <a
          href={"https://note.com/utmilc"}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
          className={`${linkStyle("/news")}`}
        >
          News
        </a>
        <Link
          href={"/join-us"}
          onClick={() => setIsOpen(false)}
          className={`${linkStyle("/join-us")}`}
        >
          Join us
        </Link>
      </div>
    </div>
  );
};
