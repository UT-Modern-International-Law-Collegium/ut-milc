"use client";

import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <VStack minH={"80vh"} spacing={8} maxW={"84%"} mx={"auto"}>
      <Heading size={"4xl"} pt={{ base: "40%", md: "10%" }}>
        404
      </Heading>
      <Text textAlign={"center"} fontSize={18}>
        お探しのページは、国際法に照らしても存在しないようです。お手数ですが、URLをお確かめの上もう一度アクセスしてください。
      </Text>
      <Button onClick={() => router.push("/")}>TOPページへ</Button>
    </VStack>
  );
}
