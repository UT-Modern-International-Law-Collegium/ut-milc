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
} from "@chakra-ui/react"
import { NextPageWithLayout } from "../_app"
import Layout from "../../components/layout/Layout"
import { fakeData } from "../../lib/fakeData"
import { axiosInstance } from "../../lib/axios"
import { Event } from "../../lib/type"
import Image from "next/image"
import tsuka from "../../lib/images/tsuka.png"
import sara from "../../lib/images/sara.png"
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
    data: Event[]
}

const ShinkanPage2022Autumn: NextPageWithLayout<ShinkanPage2022AutumnProps> = ({ data }) => {
    const [transform, setTransform] = useState(false)

    return (
        <Box bgColor="black" height="100vh" width="100xw" textAlign="center">
            <Box marginTop="40vh" textColor="white" fontFamily="serif" zIndex={100}>
                <Text fontSize="6xl" fontWeight="bold">世界へ挑む者よ、来たれ。</Text>
                <Box marginTop="5vh">
                    <Text fontSize="2xl">日程：いつ？</Text>
                    <Text fontSize="2xl">場所：どこ？</Text>
                </Box>
            </Box>
            <UTMilcIcon />
        </Box >
    )
}

const UTMilcIcon: React.FC = () => {
    const icon_size = 500
    const scale_size = 300
    const text_string: string = "University  of  Tokyo  Modern  International  Law  College  "
    const text_array = Array.from(text_string)
    const text_length = text_array.length
    return (
        <Box>
            <Box marginTop="-50vh" marginLeft={"calc(50vw - " + (icon_size / 2) + "px)"} width={icon_size} height={icon_size} opacity={0.5}>
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
                                height={icon_size / 2}
                                transformOrigin="center bottom"
                                transform={"rotate(" + (idx * 360 / text_length) + "deg)"}
                                key={idx}>{elem}</Box>)}
                    </Box>
                </motion.div>
            </Box>
            <Box position="absolute" left={"calc(50vw - "+scale_size/2+"px)"} top={"calc(-13vh + "+scale_size+"px)"}>
                <motion.div>
                    <GiScales color="white" size={scale_size}  opacity={0.5}/>
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
            return { props: { data: fakeData.events.find((e) => e.name === "Shinkan-2022-Autumn") } }
        } else {
            const res = await axiosInstance.get("what?")
            return {
                props: {
                    data: {
                        name: res.data.name,
                        content: res.data.content,
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