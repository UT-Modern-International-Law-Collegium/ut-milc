import { Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';

type NewsPageProps = {
  data: any;
};

const NewsPage: NextPage<NewsPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack pl={400}>
        <PageTitle minW={192}>活動報告</PageTitle>
      </Stack>
    </Stack>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/news');
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`error at news page: ${err}`);
  }
};

export default NewsPage;
