"use client";

import { ChakraProvider, Link, Stack } from "@chakra-ui/react";
import moment from "moment";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";

const Navigation: FC = () => {
  const pathname = usePathname();

  const stlyeLinkColor = (
    path: "/" | "/about-us" | "/news" | "/join-us" | "/awards"
  ): string => {
    if (pathname === path) {
      return "#00FFB1";
    } else {
      return "#fff";
    }
  };

  return (
    <ChakraProvider>
      <Stack
        zIndex={2}
        display={{ base: "flex" }}
        position={{ base: "fixed", md: "absolute" }}
        top={"50%"}
        left={{ base: 10, md: 100 }}
        transform={"translate(0,-50%)"}
        spacing={6}
        fontSize={{ base: 36, md: 24, lg: 36 }}
        fontFamily={"serif"}
        letterSpacing={5}
      >
        <Link as={NextLink} color={stlyeLinkColor("/")} href={"/"}>
          Top
        </Link>
        <Link
          as={NextLink}
          color={stlyeLinkColor("/about-us")}
          href={"/about-us"}
        >
          About us
        </Link>
        <Link
          as={NextLink}
          color={stlyeLinkColor("/awards")}
          href={`/awards?year=${moment().year()}`}
        >
          Awards
        </Link>
        <Link
          color={stlyeLinkColor("/news")}
          href={"https://note.com/utmilc"}
          isExternal
        >
          News
        </Link>
        <Link
          as={NextLink}
          color={stlyeLinkColor("/join-us")}
          href={"/join-us"}
        >
          Join us
        </Link>
      </Stack>
    </ChakraProvider>
  );
};

export default Navigation;
