'use client';

import { Heading, Stack, Text } from '@chakra-ui/react';

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
        現代国際法研究会に入会を希望される方は、以下のフォームを入力の上送信してください。
        <br />
        ※フォームの表示・入力にはECCSのグーグルアカウントでログインする必要があります。
        <br />
        ※フォームが表示されない場合は、
        <NextChakraLink
          href={'https://forms.gle/35kzG9g1yVxsFFiy5'}
          textDecoration={'underline'}
        >
          こちら
        </NextChakraLink>
        からフォームの入力・送信をお願いします。
      </Text>
      <Stack
        bg={'purple.50'}
        px={{ base: 2, md: 0 }}
        sx={{
          iframe: {
            w: '100%',
            h: '100vh',
          },
        }}
      >
        <iframe src={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL}>
          読み込んでいます…
        </iframe>
      </Stack>
    </Stack>
  );
};

export default Page;
