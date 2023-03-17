'use client';

import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import NextChakraLink from '../../components/utils/NextChakraLink';

const Page = () => {
  return (
    <Stack
      pb={{ base: 100 }}
      spacing={{ base: 3, md: 10 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
      px={{ base: 0, md: 100 }}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={{ base: 4, md: 0 }}
        pt={{ base: 20, md: 100 }}
        w={{ base: '100%' }}
        spacing={{ base: 0, md: 8 }}
      >
        <Heading
          fontFamily={'serif'}
          size={{ base: 'xl', md: '2xl' }}
          letterSpacing={2}
        >
          入会申し込み
        </Heading>
      </Stack>
      <Text
        fontSize={18}
        lineHeight={{ base: 1.5, md: 2 }}
        px={{ base: 4, md: 0 }}
      >
        2023年度は公式LINEから入会フォームに回答していただく流れになっております。入会を少しでも検討されている方は公式LINEの友達追加をお願いいたします！
      </Text>
      <Text>
        URL:
        <Link
          href="https://lin.ee/gwVPQY5"
          target="_blank"
          rel="noreferrer"
          pl={2}
          color={'teal.600'}
          textDecoration={'underline'}
        >
          https://lin.ee/gwVPQY5
        </Link>
      </Text>
      <Text>QR</Text>
      <Image
        src="/line.png"
        width={200}
        height={200}
        alt="東大国際法研の公式LINEQRコード"
      />
    </Stack>
  );
};

export default Page;
