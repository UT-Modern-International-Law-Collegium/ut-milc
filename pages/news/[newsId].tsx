import React, { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextRouter, useRouter } from 'next/router';
import moment from 'moment';
import { AxiosResponse } from 'axios';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md';
import Layout from '../../components/layout/Layout';
import { axiosInstance } from '../../lib/axios';
import { News } from '../../lib/type/page';
import { NextPageWithLayout } from '../_app';
import { fakeData } from '../../lib/fakeData';

type NewsDetailPageProps = {
  data: News;
};

const NewsDetailPage: NextPageWithLayout<NewsDetailPageProps> = ({ data }) => {
  const router: NextRouter = useRouter();
  return (
    <Stack
      spacing={{ base: 4, md: 6 }}
      w={{ base: '100%', sm: '100%', md: '80%', lg: '60%' }}
      mx={'auto'}
      px={{ base: 4, md: 0 }}
      pb={{ base: 40, md: 100 }}
      pt={20}
    >
      {/* タイトルと日付とタグ */}
      <Stack
        direction={{ base: 'column' }}
        justifyContent={{ base: 'unset' }}
        spacing={{ base: 10 }}
      >
        <Heading size={'xl'}>{data.title}</Heading>
        <HStack
          spacing={{ base: 0, md: 8 }}
          width={{ base: '100%', md: 'unset' }}
          pr={{ base: 0, md: 10 }}
          justifyContent={{ base: 'space-between', md: 'unset' }}
        >
          <HStack>
            <Icon as={MdDateRange} w={18} h={18} />
            <Text fontSize={18}>
              {moment(data.created_at).format('YYYY-MM-DD')}
            </Text>
          </HStack>
          <Badge fontSize={16} colorScheme={'teal'}>
            {data.tag}
          </Badge>
        </HStack>
      </Stack>
      <Divider />
      {/* 本文 */}
      <Stack w={'100%'}>
        <Box
          fontSize={18}
          sx={{ a: { textDecoration: 'underline', color: 'blue' } }}
          lineHeight={2}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Stack>
      {/* 戻るボタン */}
      <ButtonGroup
        justifyContent={{ base: 'center', md: 'right' }}
        pr={2}
        py={8}
      >
        <Button w={200} bg={'teal.100'} onClick={() => router.push('/news')}>
          記事一覧に戻る
        </Button>
      </ButtonGroup>
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
      return { props: { data: fakeData.news[Number(params!.newsId)] } };
    } else {
      const res = await axiosInstance.get(`/api/news/${params!.newsId}`);
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticProps: ${err}`);
  }
};

export default NewsDetailPage;
