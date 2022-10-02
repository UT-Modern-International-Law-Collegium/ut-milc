import React, { isValidElement, ReactElement, useState } from "react"
import { GetStaticProps } from "next"
import {
  chakra,
  Box,
  Center,
  VStack,
  Text,
  keyframes,
  usePrefersReducedMotion,
  Flex,
  HStack,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react"
import { NextPageWithLayout } from "../_app"
import Layout from "../../components/layout/Layout"
import { fakeData } from "../../lib/fakeData"
import { axiosInstance } from "../../lib/axios"
import { Event } from "../../lib/type"
import Image from "next/image"
import { motion, isValidMotionProp } from "framer-motion"
import {
  GiScales
} from "react-icons/gi"
import {
  FaBalanceScale,
  FaBalanceScaleLeft,
  FaBalanceScaleRight,
} from "react-icons/fa"

const ChakraBox = chakra(motion.div, { shouldForwardProp: isValidMotionProp })

type ShinkanPage2022AutumnProps = {
  data: Event
}

const ShinkanPage2022Autumn: NextPageWithLayout<ShinkanPage2022AutumnProps> = ({ data }) => {
  return (
    <Box backgroundColor="black" textColor="white" overflow="hidden" width="100%" position="relative">
      <Box marginTop={["45vh", "15vh"]} marginBottom={100} fontFamily="serif">
        <Center>
          <Text
            zIndex={2}
            fontSize={["3xl", "6xl"]}
            fontWeight="bold">
            ふと、<br />「世界に<span style={{ color: "#81E6D9" }}>挑</span>んでやろう」<br />と思ったあなたへ。
          </Text>
        </Center>
        <Center>
          <Text marginTop={10} fontSize="3xl">- Zoom説明会 -</Text>
        </Center>
        <Center>
          <Box marginTop={6} marginX={10} fontSize={["xl", "2xl"]}>
            {data.sessions.map((elem, idx) =>
              <Box key={idx} marginBottom={5}>
                <Center>
                  <Text>{elem.time}</Text>
                </Center>
                <Center>
                  <Text align="center">{elem.desc}</Text>
                </Center>
              </Box>)}
          </Box>
        </Center>
      </Box>
      <UTMilcIcon />
      <Box>
        <Center>
          <Text fontSize="3xl" fontFamily="serif">昨年度秋入会者の声</Text>
        </Center>
        <Center>
          <Box marginX={10} marginBottom={20}>
            {data.comment.split("\n").map((elem, idx) => <Text key={idx} marginTop={5}>{elem}</Text>)}
          </Box>
        </Center>
      </Box>
    </Box >
  )
}

const UTMilcIcon: React.FC = () => {
  let icon_size = useBreakpointValue([300, 500])
  if (icon_size === undefined) {
    icon_size = 300
  }
  const half_icon_size = icon_size / 2
  let scale_size = useBreakpointValue([200, 300])
  if (scale_size === undefined) {
    scale_size = 200
  }
  const text_string: string = "University of Tokyo Modern International Law College "
  const text_array = Array.from(text_string)
  const text_length = text_array.length

  return (
    <Box overflowX="hidden">
      <Box width={icon_size} height={icon_size} opacity={[0.8, 0.3]} position="absolute" left={["calc(50vw - " + (50 + scale_size / 2) + "px)","calc(50vw - " + (100 + scale_size / 2) + "px)"]} top={["calc(15vh - 50px)", "calc(-13vh - " + (100 - scale_size) + "px)"]}>
        <motion.div
          animate={{
            rotate: [0, 180, 360]
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}>
          <Box
            fontSize="2xl"
            width={icon_size}
            height={icon_size}
            textAlign="center"
            textColor="white">
            {text_array.map((elem, idx) =>
              <Box
                position="absolute"
                left=""
                width={icon_size}
                height={half_icon_size}
                transformOrigin="center bottom"
                transform={"rotate(" + (idx * 360 / text_length) + "deg)"}
                key={idx}>{elem}</Box>)}
          </Box>
        </motion.div>
      </Box>
      <Box position="absolute" left={"calc(50vw - " + scale_size / 2 + "px)"} top={["15vh", "calc(-13vh + " + scale_size + "px)"]} opacity={[0.9, 0.2]} >
        <motion.div>
          <GiScales color="white" size={scale_size} />
        </motion.div>
      </Box>
    </Box>
  )
}

const Door: React.FC<{ onClick: () => void, transform: string, children: React.ReactNode }> = ({ onClick, transform, children }) => {
  return (
    <Box
      onClick={onClick}
      top={0}
      left={0}
      backgroundColor="gray.600"
      width={200}
      height="50vh"
      transformOrigin="left"
      transition={"all 0.5s ease-in-out"}
      transform={transform}>
      {children
      }</Box>
  )
}

ShinkanPage2022Autumn.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    if (process.env.ENV_VAR = "development") {
      return {
        props: {
          data: fakeData.events.find((e) => e.name === "Shinkan-2022-Autumn")
        }
      }
    } else {
      const res = await axiosInstance.get("/api/events")
      return {
        props: {
          data: {
            name: res.data.name,
            sessions: res.data.sessions,
            comment: res.data.comment,
          }
        }
      }
    }
  }
  catch (err) {
    throw new Error("error at about page: ${err}")
  }
}

export default ShinkanPage2022Autumn;