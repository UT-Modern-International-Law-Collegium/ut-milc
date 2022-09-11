import { Stack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';

type Props = {
  data: any[];
};

const AchivmentPage: NextPage<Props> = ({ data }) => {
  return (
    <Stack>
      <Stack pl={400} spacing={10}>
        <PageTitle minW={200}>活動実績</PageTitle>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { data: {} } };
};

export default AchivmentPage;
