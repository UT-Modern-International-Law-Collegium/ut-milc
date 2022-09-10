import { Stack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import PageTitle from '../../components/utils/PageTitle';
import { axiosInstance } from '../../lib/axios';
import { Article } from '../../lib/type';

type NewsPageProps = {
  data: Article[];
};

const NewsPage: NextPage<NewsPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack pl={400}>
        <PageTitle minW={200}>活動報告</PageTitle>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/news');
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`error at news page: ${err}`);
  }
};

export default NewsPage;
