import { Badge, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { axiosInstance } from '../../lib/axios';
import { Article } from '../../lib/type';

type NewsDetailPageProps = {
  data: Article[];
};

const NewsDetailPage: NextPage<NewsDetailPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack pl={400} pt={20} spacing={10}>
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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await axiosInstance.get('/api/news');
    const paths = res.data.map((item: Article) => ({
      params: { newsId: item.id.toString() },
    }));
    return { paths, fallback: false };
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticPaths: ${err}`);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await axiosInstance.get(`/api/news/${params!.newsId}`);
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`error at [newsId].tsx getStaticProps: ${err}`);
  }
};

export default NewsDetailPage;
