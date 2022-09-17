import { Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';
import { fakeData } from '../lib/fakeData';
import { Award } from '../lib/type';
import { NextPageWithLayout } from './_app';

type Props = {
  data: Award[];
};

const AwardsPage: NextPageWithLayout<Props> = ({ data }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  return (
    <Stack
      px={{ base: 10, md: 100 }}
      pb={{ base: 100 }}
      spacing={{ base: 10 }}
      w={{ base: '100%', md: '80%' }}
      mx={'auto'}
    >
      <PageTitle minW={200}>活動実績</PageTitle>
      <Stack direction={{ base: 'column', md: 'row' }}>
        {/* サイドバー */}
        <Stack w={'30%'}></Stack>
        {/* アコーディオン */}
        {/* 活動実績 */}
        <Stack w={{ base: '100%', md: '70%' }}></Stack>
      </Stack>
    </Stack>
  );
};

AwardsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.ENV_VAR === 'developmen') {
    return { props: { data: fakeData.awards } };
  } else {
    const res = await axiosInstance.get('/api/awards');
    console.log(res.data);
    return { props: { data: res.data } };
  }
};

export default AwardsPage;
