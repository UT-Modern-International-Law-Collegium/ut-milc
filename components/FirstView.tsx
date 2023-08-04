"use client";

import {
  Box,
  ChakraProvider,
  CircularProgress,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import moment from "moment";
import NextLink from "next/link";
import { FC, useEffect, useState } from "react";

import Navigation from "./layout/Navigation";

const Firstview: FC = () => {
  const [isWelcomePageExisting, setIsWelcomePageExisting] =
    useState<boolean>(false);

  useEffect(() => {
    const f = async () => {
      const res = await fetch(`/api/events/welcome`);
      if (res.status === 200) {
        setIsWelcomePageExisting(true);
      }
    };
    f();
  }, []);

  return (
    <ChakraProvider>
      <Stack
        h={"100vh"}
        bg={"#092025"}
        position={"relative"}
        overflow={"hidden"}
        zIndex={{ base: 0, md: 2 }}
        borderBottom={"4px solid"}
        borderColor={"teal.500"}
        boxSizing={"content-box"}
      >
        {/* 新歓 */}
        {isWelcomePageExisting && (
          <Stack
            as={motion.div}
            initial={{ translateY: -100 }}
            animate={{ translateY: [-80, -60, -40, -20, 0] }}
            transition={"0.6s"}
            position={"absolute"}
            w={"100%"}
            top={0}
            left={0}
            bg={"rgb(129, 230, 217, 0.9)"}
            zIndex={3}
            pt={{ base: 16, md: 0 }}
          >
            <Text
              fontSize={{ base: 18, md: 20 }}
              textAlign={"center"}
              py={{ base: 2, md: 4 }}
              fontWeight={"bold"}
              color={"gray.800"}
            >
              {`${moment().year()}年度新歓の詳細は`}
              <Link
                as={NextLink}
                href={"/events/welcome"}
                textDecoration={"underline"}
              >
                こちら
              </Link>
            </Text>
          </Stack>
        )}
        {/* ナビゲーション */}
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={"0.6s"}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Navigation />
          </Box>
        </Box>
        {/* 内側の円 */}
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={"0.8s"}
        >
          <CircularProgress
            // @ts-ignore
            size={{ base: "100px", md: "245px" }}
            thickness={"0.1px"}
            value={100}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            color={"#C9C9C9"}
          />
          {/* 外側の円 */}
          <CircularProgress
            // @ts-ignore
            size={{ base: "400px", md: "1400px" }}
            thickness={"0.01px"}
            value={100}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            color={"#C9C9C9"}
          />
        </Box>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          transition={"0.6s"}
        >
          <TopTitle />
        </Box>
      </Stack>
    </ChakraProvider>
  );
};

const TopTitle: FC = () => {
  const [titlePtValue, setTitlePtValue] = useState<number>(0);
  const [letterSpacingValue, setLetterSpacingValue] = useState<string>("0.4em");

  useEffect(() => {
    if (window.innerHeight > 667) {
      // iPhone SEより大きい
      setTitlePtValue(window.innerHeight * 0.24);
      setLetterSpacingValue("0.6em");
    } else {
      // iPhone SEより小さい
      setTitlePtValue(window.innerHeight * 0.2);
      setLetterSpacingValue("0.4em");
    }
  }, []);

  return (
    <>
      {/* mobile */}
      <Box display={{ base: "block", lg: "none" }}>
        <Heading
          as={motion.h2}
          style={{ writingMode: "vertical-rl" }}
          size={{ base: "2xl", md: "xl" }}
          pt={titlePtValue} /* ヘッダーの高さ分 */
          h={"100vh"}
          fontWeight={"normal"}
          color={"#fff"}
          fontFamily={"serif"}
          letterSpacing={letterSpacingValue}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          現代国際法研究会
        </Heading>
      </Box>
      {/* PC */}
      <Box display={{ base: "none", lg: "block" }}>
        <Heading
          as={motion.h2}
          h={"100vh"}
          color={"#fff"}
          style={{ writingMode: "vertical-rl" }}
          letterSpacing={36}
          fontSize={68}
          fontWeight={"normal"}
          fontFamily={"serif"}
          lineHeight={1.5}
          position={"absolute"}
          top={"62%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Text
            style={{
              writingMode: "vertical-rl",
            }}
            fontSize={24}
            m={0}
            lineHeight={1.8}
            pt={1}
          >
            東京大学
          </Text>
          現代国際法
          <br />
          <Text pt={300}>研究会</Text>
        </Heading>
      </Box>
    </>
  );
};

export default Firstview;
