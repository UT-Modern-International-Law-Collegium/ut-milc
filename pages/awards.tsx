import { Stack, useMediaQuery } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/utils/PageTitle';
import { NextPageWithLayout } from './_app';

type Props = {
  data: any[];
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
    </Stack>
  );
};

AwardsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { data: {} } };
};

export default AwardsPage;
