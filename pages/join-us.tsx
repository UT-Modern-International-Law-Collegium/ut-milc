import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/utils/PageTitle';
import { NextPageWithLayout } from './_app';

type JoinUsPage = {};

const JoinUsPage: NextPageWithLayout<JoinUsPage> = () => {
  return (
    <Stack
      pb={{ base: 100 }}
      spacing={{ base: 10 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
      px={{ base: 0, md: 100 }}
    >
      <PageTitle px={{ base: 10, md: 0 }}>入会申し込み</PageTitle>
      <Text fontSize={18} lineHeight={2}>
        現代国際法研究会に入会を希望される方は、以下のフォームを入力の上送信してください。
        <br />
        ※フォームの表示・入力にはECCSのグーグルアカウントでログインする必要があります。
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

JoinUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default JoinUsPage;
