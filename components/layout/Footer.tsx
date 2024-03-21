"use client";

import {
  Divider,
  Grid,
  GridItem,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import NextLink from "next/link";
import { BsInstagram, BsLine, BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <Grid
      py={12}
      px={{ base: 8, lg: 40 }}
      bg={"gray.200"}
      gap={{ base: 8, md: 0 }}
    >
      <GridItem colSpan={{ base: 2, md: 1 }}>
        {/* pages */}
        <Stack textAlign={{ base: "center", md: "inherit" }} mb={10}>
          <HStack>
            <Divider borderColor={"#000"} />
            <Text>pages</Text>
            <Divider borderColor={"#000"} />
          </HStack>
          <Link as={NextLink} href={"/"}>
            Top
          </Link>
          <Link as={NextLink} href={"/about-us"}>
            About us
          </Link>
          <Link as={NextLink} href={`/awards?year=${moment().year()}`}>
            Awards
          </Link>
          <Link href={"https://note.com/utmilc"} isExternal>
            News
          </Link>
          <Link as={NextLink} href={"/join-us"}>
            Join us
          </Link>
        </Stack>
        {/* links */}
        <Stack spacing={8} mb={10}>
          <HStack>
            <Divider borderColor={"#000"} />
            <Text>links</Text>
            <Divider borderColor={"#000"} />
          </HStack>
          <HStack spacing={12} justifyContent={"center"}>
            <VStack
              as={Link}
              isExternal
              href={"https://www.instagram.com/kokusai_law"}
            >
              <Icon as={BsInstagram} h={9} w={9} />
              <Text>Instagram</Text>
            </VStack>
            <VStack
              as={Link}
              isExternal
              href={"https://twitter.com/utmilc_2024"}
            >
              <Icon as={BsTwitterX} h={9} w={9} />
              <Text>X</Text>
            </VStack>
            <VStack as={Link} isExternal href={"https://lin.ee/2k1ROo0"}>
              <Icon as={BsLine} h={9} w={9} />
              <Text>Line</Text>
            </VStack>
          </HStack>
        </Stack>
      </GridItem>
    </Grid>
  );
}
