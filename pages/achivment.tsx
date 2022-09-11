import { Stack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';

type Props = {
  data: any[];
};

const AchivmentPage: NextPage<Props> = ({ data }) => {
  return <Stack></Stack>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { data: {} } };
};

export default AchivmentPage;
