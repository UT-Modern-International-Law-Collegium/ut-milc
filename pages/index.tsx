import React, { FC, useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import moment from 'moment';
import { useScroll } from 'framer-motion';
import { IconContext } from 'react-icons/lib';
import { BsArrowRight } from 'react-icons/bs';
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
  Button,
  Center,
  useMediaQuery,
  Box,
  SimpleGrid,
  UnorderedList,
  ListItem,
  VStack,
} from '@chakra-ui/react';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';
import { Article, Award } from '../lib/type';
import SectionButton from '../components/top/SectionButton';
import { fakeData } from '../lib/fakeData';
import Layout from '../components/layout/Layout';
import { restrictStringCount } from '../utils/restrictStringCount';

type TopPageProps = {
  data: { top: any[]; news: Article[]; awards: Award[] };
};

const TopPage: NextPage<TopPageProps> = ({ data }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  if (isLargerThan768px) {
    return (
      <Layout>
        <DesktopContent data={data} />;
      </Layout>
    );
  } else {
    return (
      <Layout>
        <MobileContent data={data} />
      </Layout>
    );
  }
};

const MobileContent: FC<TopPageProps> = ({ data }) => {
  return <Stack></Stack>;
};

const DesktopContent: FC<TopPageProps> = ({ data }) => {
  const router: NextRouter = useRouter();
  const [isDisplayingFirstview, setIsDisplayingFirstview] =
    useState<boolean>(true);
  const [isLargerThan1280px] =
    useMediaQuery(
      '(min-width:1280px)'
    ); /* NOTE: animationは1280px以上の時に限る。 */
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!isLargerThan1280px) return;
    return scrollY.onChange((latest: number) => {
      if (latest === 0) {
        setIsDisplayingFirstview(true);
      } else {
        setIsDisplayingFirstview(false);
      }
    });
  }, [scrollY, isLargerThan1280px]);

  return (
    <Stack spacing={{ base: 0, md: 4 }}>
      {/* ファーストビュー */}
      <Firstview />
      {/* ファーストビュー以下part1 */}
      <Stack
        spacing={{ base: 20, md: 28 }}
        pt={{ base: 0, md: 20 }}
        px={200}
        position={'relative'}
      >
        {/* about */}
        <Stack spacing={20} direction={'row'}>
          {/* 画像 */}
          <Box>
            <Image
              src={
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              }
              alt={''}
              width={800}
              height={800}
            />
          </Box>
          {/* タイトルとテキスト */}
          <Stack spacing={8}>
            <Heading
              fontFamily={'serif'}
              letterSpacing={2}
              size={'2xl'}
              textAlign={'right'}
              textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
            >
              About us
            </Heading>
            <Text fontSize={18} lineHeight={2}>
              {data.top[0].about}
            </Text>
            <SectionButton
              pt={100}
              m={'0 0 0 auto'}
              onClick={() => router.push('/about-us')}
            >
              団体紹介はこちら
            </SectionButton>
          </Stack>
        </Stack>
        {/* awards */}
        <Stack spacing={8}>
          <Heading
            fontFamily={'serif'}
            letterSpacing={2}
            size={'2xl'}
            textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
          >
            Awards
          </Heading>
          {/* コンテンツ */}
          <SimpleGrid columns={3} spacing={10}>
            {data.awards.map((award: Award, index) => {
              return (
                <Stack
                  key={index}
                  p={4}
                  borderRight={index === 2 ? 'none' : '1px'}
                >
                  <Heading size={'md'} textAlign={'center'}>
                    {restrictStringCount(award.name, 12)}
                  </Heading>
                  <UnorderedList pl={4}>
                    {award.detail.map((item, index) => {
                      return <ListItem key={index}>{item}</ListItem>;
                    })}
                  </UnorderedList>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Stack>
        {/* news */}
        <Stack spacing={8}>
          <Heading
            fontFamily={'serif'}
            letterSpacing={2}
            size={'2xl'}
            textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
          >
            News
          </Heading>
          <TableContainer>
            <Table>
              <Tbody>
                {data.news.map((item, index) => {
                  if (index > 4) return;
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
          <SectionButton onClick={() => router.push('/news')}>
            全て見る
          </SectionButton>
        </Stack>
      </Stack>
      {/* part2（join us） */}
      <Stack bg={'#092025'} h={700} position={'relative'}>
        {/* arrow */}
        <Stack
          bg={'#fff'}
          clipPath={'polygon(0 0, 50% 38%, 100% 0)'}
          h={200}
          top={0}
          zIndex={3}
        />
        {/* join us */}
        <VStack spacing={12}>
          <Heading
            fontFamily={'serif'}
            letterSpacing={2}
            size={'2xl'}
            textAlign={'center'}
            color={'#fff'}
          >
            Join us
          </Heading>
          <Text fontSize={18} color={'#fff'} w={'40%'} textAlign={'center'}>
            現代国際法研究会に入会を希望される方は、以下のボタンから申し込み専用ページへ進み、フォームを送信してください。
          </Text>
          <Center>
            <IconContext.Provider value={{ size: '20px' }}>
              <Button
                bg={'teal.200'}
                fontSize={18}
                py={7}
                pl={7}
                pr={8}
                rightIcon={<BsArrowRight />}
                onClick={() => router.push('/join-us')}
              >
                入会のお申し込みはこちら
              </Button>
            </IconContext.Provider>
          </Center>
        </VStack>
      </Stack>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    if (process.env.ENV_VAR === 'development') {
      return {
        props: {
          data: {
            top: fakeData.top,
            news: fakeData.news,
            awards: fakeData.awards,
          },
        },
      };
    } else {
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
    }
  } catch (err) {
    console.error({ err });
    throw new Error(`err: ${err}`);
  }
};

export default TopPage;
