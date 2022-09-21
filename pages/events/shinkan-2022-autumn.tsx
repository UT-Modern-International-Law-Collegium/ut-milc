import React, { ReactElement } from "react"
import { GetStaticProps } from "next"
import {
    Box,
    Center,
} from "@chakra-ui/react"
import { NextPageWithLayout } from "../_app"
import Layout from "../../components/layout/Layout"
import { fakeData } from "../../lib/fakeData"
import { axiosInstance } from "../../lib/axios"
import { Event } from "../../lib/type"
import Image from "next/image"
import tsuka from "../../lib/images/tsuka.png"
import sara from "../../lib/images/sara.png"
import { motion } from "framer-motion"

type ShinkanPage2022AutumnProps = {
    data: Event[]
}

const ShinkanPage2022Autumn: NextPageWithLayout<ShinkanPage2022AutumnProps> = ({ data }) => {
    return (
        <Box>
            <Center>
                <motion.div
                    animate={{ x: 100 }}>
                    <Image src={sara} width={200} height={200} />
                </motion.div>
                <Image src={tsuka} width={400} height={400} />
                <Image src={sara} width={200} height={200} />
            </Center>
        </Box>
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