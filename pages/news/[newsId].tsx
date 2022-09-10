import { Stack } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { axiosInstance } from '../../lib/axios';
import { Article } from '../../lib/type';

type NewsDetailPageProps = {
  data: Article;
};

const NewsDetailPage: NextPage<NewsDetailPageProps> = ({ data }) => {
  return <Stack></Stack>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await axiosInstance.get('/api/news');
    const paths = res.data.map((item: Article) => ({
      params: { id: item.id.toString() },
    }));
    return { paths, fallback: false };
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticPaths: ${err}`);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await axiosInstance.get(`/api/news/${params!.id}`);
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticProps: ${err}`);
  }
};

export default NewsDetailPage;
