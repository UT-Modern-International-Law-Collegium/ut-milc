import {
  Badge,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';
import Layout from '../../components/layout/Layout';
import NewsCard from '../../components/news/NewsCard';
import PageTitle from '../../components/utils/PageTitle';
import { axiosInstance } from '../../lib/axios';
import { fakeData } from '../../lib/fakeData';
import { NextPageWithLayout } from '../_app';
import moment from 'moment';
import { News } from '../../lib/type';
import { restrictStringCount } from '../../utils/restrictStringCount';

type NewsPageProps = {
  data: News[];
};

const NewsPage: NextPageWithLayout<NewsPageProps> = ({ data }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack
      spacing={{ base: 2, md: 10 }}
      w={{ base: '100%', md: '70%' }}
      mx={'auto'}
      px={{ base: 4, md: 0 }}
      pb={{ base: 40, md: 100 }}
    >
      <PageTitle pl={4}>活動報告</PageTitle>
      <Grid
        templateColumns={{ base: '', md: 'repeat(3, 1fr)' }}
        gap={{ base: 4, md: 12 }}
      >
        {data.map((item, index) => {
          if (index === 0) {
            if (isLargerThan768px) {
              const tmpParsedContent: string = item.content.replace(
                /<("[^"]*"|'[^']*'|[^'">])*>/g,
                ''
              );
              const parsedContent: string = restrictStringCount(
                tmpParsedContent,
                140
              );
              return (
                <GridItem key={item.id} colSpan={3} p={4}>
                  <Divider mb={4} borderColor={'blackAlpha.800'} />
                  <LinkBox
                    as={HStack}
                    spacing={12}
                    alignItems={'unset'}
                    verticalAlign={'top'}
                    sx={{ img: { transition: '0.2s' } }}
                    _hover={{
                      img: { transform: 'scale(1.1,1.1)' },
                      h2: { color: 'teal.400' },
                    }}
                  >
                    <Image
                      src={
                        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                      }
                      alt={`image of ${item.title}`}
                      width={400}
                      height={300}
                    />
                    <Stack w={'100%'}>
                      {/* タイトル */}
                      <Heading size={'lg'}>
                        <NextLink href={`/news/${item.id}`} passHref>
                          <LinkOverlay>{item.title}</LinkOverlay>
                        </NextLink>
                      </Heading>
                      {/* 日付とタグ */}
                      <HStack justifyContent={'space-between'}>
                        <Text fontSize={18}>
                          {moment(item.created_at).format('YYYY-MM-DD')}
                        </Text>
                        <HStack>
                          <Badge fontSize={16} borderRadius={4}>
                            {item.tag}
                          </Badge>
                          <Badge
                            fontSize={16}
                            borderRadius={4}
                            colorScheme={'teal'}
                          >
                            最新記事
                          </Badge>
                        </HStack>
                      </HStack>
                      <Divider />
                      <Text>{parsedContent}</Text>
                    </Stack>
                  </LinkBox>
                  <Divider mt={4} borderColor={'blackAlpha.800'} />
                </GridItem>
              );
            } else {
              return (
                <GridItem key={item.id} colSpan={1}>
                  <NewsCard item={item} isLatest={true} />
                </GridItem>
              );
            }
          } else {
            return (
              <GridItem key={item.id} colSpan={1}>
                <NewsCard item={item} />
              </GridItem>
            );
          }
        })}
      </Grid>
    </Stack>
  );
};

NewsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
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
