import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import moment from 'moment';
import {
  Heading,
  Stack,
  Text,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
  Badge,
} from '@chakra-ui/react';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';
import { Article } from '../lib/type';
import SectionButton from '../components/top/SectionButton';
import NextChakraLink from '../components/utils/NextChakraLink';

type TopPageProps = {
  data: { top: any[]; news: Article[] };
};

const TopPage: NextPage<TopPageProps> = ({ data }) => {
  const router: NextRouter = useRouter();
  return (
    <Stack spacing={4}>
      {/* ファーストビュー */}
      <Firstview />
      {/* ファーストビュー以下 */}
      <Stack pl={500} pt={'100vh'}>
        {/* about */}
        {data.top.length !== 0 && (
          <Stack spacing={8} minH={400} w={'48vw'}>
            <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
              About
            </Heading>
            <Text fontSize={18} lineHeight={2}>
              {data.top[0].about}
            </Text>
            <SectionButton onClick={() => router.push('/about')}>
              団体紹介はこちら
            </SectionButton>
          </Stack>
        )}
        {/* news */}
        <Stack minH={400} maxW={'48vw'} spacing={8}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            News
          </Heading>
          {data.news.length === 0 ? (
            <Text>活動報告はありません。</Text>
          ) : (
            <TableContainer>
              <Table>
                <Tbody>
                  {data.news.map((item) => {
                    return (
                      <Tr key={item.id}>
                        <Td>{moment(item.created_at).format('YYYY-MM-DD')}</Td>
                        <Td>{item.title}</Td>
                        <Td>
                          <Badge>{item.tag}</Badge>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          )}
          <SectionButton onClick={() => router.push('/news')}>
            全て見る
          </SectionButton>
        </Stack>
        {/* join us */}
        <Stack minH={400}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            Join us
          </Heading>
        </Stack>
        {/* contact */}
        <Stack minH={400} spacing={8}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            Contact
          </Heading>
          <Text fontSize={18}>
            ※当団体に参加を希望される方は、
            <NextChakraLink href={'/join-us'} textDecoration={'underline'}>
              こちら
            </NextChakraLink>
            からご応募ください。
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const topRes = await axiosInstance.get('/api/top');
    const newsRes = await axiosInstance.get('/api/news?count=5');
    const data = {
      top: topRes.data,
      news: newsRes.data,
    };
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
