import { Stack, useMediaQuery, useMouseDownRef } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';

type Props = {
  data: any[];
};

const AchivmentPage: NextPage<Props> = ({ data }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack>
      <Stack
        pl={isLargerThan768px ? 400 : 10}
        pr={isLargerThan768px ? 0 : 10}
        spacing={10}
      >
        <PageTitle minW={200}>活動実績</PageTitle>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { data: {} } };
};

export default AchivmentPage;
