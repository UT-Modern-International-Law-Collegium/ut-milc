import { Box, Heading, Stack, VStack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';
import { Article } from '../lib/type';

type TopPageProps = {
  data: any /* TODO: define props type */;
};

const TopPage: NextPage<TopPageProps> = ({ data }) => {
  return (
    <Stack spacing={4}>
      {/* ファーストビュー */}
      <Firstview />
      {/* ファーストビュー以下 */}
      <Stack pl={200}>
        <Stack>
          <Heading>About</Heading>
        </Stack>
        <Stack>
          <Heading>News</Heading>
        </Stack>
        <Stack>
          <Heading>Join us</Heading>
        </Stack>
        <Stack>
          <Heading>Contact</Heading>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/top');
    const data = res.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    console.error({ err });
    throw new Error(`err: ${err}`);
  }
};

export default TopPage;
