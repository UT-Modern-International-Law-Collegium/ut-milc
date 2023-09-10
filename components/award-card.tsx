"use client";

import {
  ChakraProvider,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { type FC } from "react";
import { BsAward } from "react-icons/bs";

const AwardCard: FC = () => (
  <ChakraProvider>
    <VStack
      w={{ base: "none", md: "60%" }}
      spacing={{ base: 2, md: 4 }}
      py={{ base: 4, md: 8 }}
      px={4}
      mx={"auto"}
      borderRadius={8}
      border={"solid"}
      borderColor={"gray.100"}
      position={"relative"}
      boxShadow={"2xl"}
    >
      <Icon
        as={BsAward}
        position={"absolute"}
        top={-6}
        left={-8}
        color={"yellow.400"}
        opacity={0.6}
        w={{ base: 100, md: 140 }}
        h={{ base: 100, md: 140 }}
      />
      <Heading
        fontWeight={"light"}
        textAlign={"center"}
        fontSize={{ base: 22, md: 30 }}
        zIndex={1}
      >
        2022 Philip C. Jessup International Law Moot Court Competition National
        Round
      </Heading>
      <Text fontSize={{ base: 18, md: 20 }}>~ NationalRound（国内予選） ~</Text>
      <HStack alignItems={"baseline"}>
        <Text fontSize={{ base: 18, md: 20 }}>総合結果</Text>
        <Text fontSize={{ base: 24, md: 32 }} pl={{ base: 2, md: 4 }}>
          優勝
        </Text>
        <Text as="span" fontSize={{ base: 18, md: 20 }}>
          （国際大会進出）
        </Text>
      </HStack>
    </VStack>
  </ChakraProvider>
);

export default AwardCard;
