import { Badge, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ReactElement } from 'react';
import Layout from '../../components/layout/Layout';
import { axiosInstance } from '../../lib/axios';
import { fakeData } from '../../lib/fakeData';
import { News } from '../../lib/type';
import { NextPageWithLayout } from '../_app';

type NewsDetailPageProps = {
  data: News[];
};

const NewsDetailPage: NextPageWithLayout<NewsDetailPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack pt={{ base: 20 }} px={{ base: 10, md: 10 }} spacing={{ base: 10 }}>
        {/* タイトルと日付とタグ */}
        <Stack
          maxW={850}
          w={'70%'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'end'}
        >
          <Heading size={'2xl'}>{data[0].title}</Heading>
          <HStack spacing={4}>
            <Text fontSize={18}>
              {moment(data[0].created_at).format('YYYY-MM-DD')}
            </Text>
            <Badge fontSize={16} colorScheme={'teal'}>
              {data[0].tag}
            </Badge>
          </HStack>
        </Stack>
        <Divider maxW={850} />
        {/* 本文 */}
        <HStack maxW={850} w={'80%'}>
          <Text fontSize={18}>{data[0].content}</Text>
        </HStack>
      </Stack>
    </Stack>
  );
};

NewsDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    let data: any;
    if (process.env.ENV_VAR === 'development') {
      data = fakeData.news;
    } else {
      const res: AxiosResponse<any, any> = await axiosInstance.get('/api/news');
      data = res.data;
    }
    const paths = data.map((item: News) => ({
      params: { newsId: item.id.toString() },
    }));
    return { paths, fallback: false };
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticPaths: ${err}`);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (process.env.ENV_VAR === 'development') {
      return { props: { data: [fakeData.news[Number(params!.newsId)]] } };
    } else {
      const res = await axiosInstance.get(`/api/news/${params!.newsId}`);
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticProps: ${err}`);
  }
};

export default NewsDetailPage;
