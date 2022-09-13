import { Divider, Stack } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import NewsRow from '../../components/news/NewsRow';
import PageTitle from '../../components/utils/PageTitle';
import { axiosInstance } from '../../lib/axios';
import { fakeData } from '../../lib/fakeData';
import { Article } from '../../lib/type';

type NewsPageProps = {
  data: Article[];
};

const NewsPage: NextPage<NewsPageProps> = ({ data }) => {
  return (
    <Stack
      pl={{ base: 10, md: 400 }}
      pr={{ base: 10, md: 0 }}
      spacing={{ base: 10 }}
    >
      <PageTitle minW={200}>活動報告</PageTitle>
      <Stack divider={<Divider />} spacing={4}>
        {data.map((item) => {
          return <NewsRow key={item.id} news={item} />;
        })}
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    if (process.env.ENV_VAR === 'development') {
      return { props: { data: fakeData.news } };
    } else {
      const res = await axiosInstance.get('/api/news');
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`error at news page: ${err}`);
  }
};

export default NewsPage;
