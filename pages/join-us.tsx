import { Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/utils/PageTitle';
import { NextPageWithLayout } from './_app';

type JoinUsPage = {};

const JoinUsPage: NextPageWithLayout<JoinUsPage> = () => {
  return (
    <Stack
      px={{ base: 10, md: 100 }}
      pb={{ base: 100 }}
      spacing={{ base: 10 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <PageTitle>入会申し込み</PageTitle>
    </Stack>
  );
};

JoinUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default JoinUsPage;
