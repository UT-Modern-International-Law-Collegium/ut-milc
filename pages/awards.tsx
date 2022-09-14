import { Stack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/utils/PageTitle';
import { NextPageWithLayout } from './_app';

type Props = {
  data: any[];
};

const AwardsPage: NextPageWithLayout<Props> = ({ data }) => {
  return (
    <Stack>
      <Stack px={{ base: 10, md: 10 }} spacing={{ base: 10 }}>
        <PageTitle minW={200}>活動実績</PageTitle>
      </Stack>
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
