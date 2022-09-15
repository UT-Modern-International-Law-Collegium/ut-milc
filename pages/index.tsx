import React, { FC, useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import moment from 'moment';
import { useScroll } from 'framer-motion';
import { IconContext } from 'react-icons/lib';
import {
  BsArrowRight,
  BsFillCaretRightFill,
  BsCheckCircle,
} from 'react-icons/bs';
import {
  Heading,
  Stack,
  Text,
  Badge,
  Button,
  Center,
  useMediaQuery,
  Box,
  VStack,
  HStack,
  LinkBox,
  LinkOverlay,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';
import { Article, Award } from '../lib/type';
import SectionButton from '../components/top/SectionButton';
import { fakeData } from '../lib/fakeData';
import Layout from '../components/layout/Layout';
import NextChakraLink from '../components/utils/NextChakraLink';
import AwardPiece from '../components/top/AwardPiece';

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
        spacing={{ base: 20, md: 280 }}
        pt={{ base: 0, md: 20 }}
        pb={{ base: 0, md: 20 }}
        position={'relative'}
      >
        {/* about */}
        <Stack spacing={20} direction={'row'} px={{ lg: 82, xl: 200 }}>
          {/* タイトルとテキスト */}
          <Stack spacing={8}>
            <Heading
              fontFamily={'serif'}
              letterSpacing={2}
              size={'2xl'}
              textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
            >
              About us
            </Heading>
            <Text fontSize={18} lineHeight={2}>
              {data.top[0].about}
            </Text>
            <Center>
              <SectionButton
                pt={100}
                m={'0 0 0 auto'}
                onClick={() => router.push('/about-us')}
              >
                団体紹介はこちら
              </SectionButton>
            </Center>
          </Stack>
          {/* 画像 */}
          <Box>
            <Image
              src={
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              }
              alt={'東京大学国際法研究会HPのabout画像'}
              width={800}
              height={800}
            />
          </Box>
        </Stack>
        {/* awards */}
        <Grid
          templateAreas={`"none0 award0 none9"
                          "none1 none2 non11"
                          "award1 none4 content"
                          "none5 none6 none12"
                          "none8 award2 none10"`}
          gridTemplateColumns={'1fr 1fr 1fr'}
          gridTemplateRows={'1fr 100fr 1fr 100fr 1fr'}
          h={{ base: 400 }}
          px={{ base: 200 }}
        >
          {/* awardsの内容 */}
          {data.awards.map((award, index) => {
            return (
              <GridItem
                key={index}
                area={`award${index}`}
                position={'relative'}
                zIndex={1}
              >
                <AwardPiece award={award} />
              </GridItem>
            );
          })}
          {/* タイトルなど */}
          <GridItem area={'content'}>
            <Stack spacing={8}>
              {/* タイトルとテキスト */}
              <Stack spacing={8}>
                <Heading
                  fontFamily={'serif'}
                  letterSpacing={2}
                  size={'2xl'}
                  textAlign={'right'}
                  textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
                >
                  Awards
                </Heading>
                <Text fontSize={18}>
                  現代国際法研究会は、大会などへの積極的な参加を通じた
                </Text>
              </Stack>
              {/* リンク */}
              <NextChakraLink
                href={'/awards'}
                fontSize={18}
                textAlign={'right'}
              >
                全ての活動実績を見る
              </NextChakraLink>
            </Stack>
          </GridItem>
        </Grid>
        {/* news */}
        <Stack spacing={8} px={{ lg: 82, xl: 200 }}>
          <Heading
            fontFamily={'serif'}
            letterSpacing={2}
            size={'2xl'}
            textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
          >
            News
          </Heading>
          <HStack spacing={8}>
            {data.news.map((item: Article, index) => {
              if (index > 2) return;
              return (
                <LinkBox
                  as={Stack}
                  key={item.id}
                  p={4}
                  borderRadius={4}
                  boxShadow={'xl'}
                  sx={{ img: { transition: '0.2s' } }}
                  _hover={{
                    img: { transform: 'scale(1.1,1.1)' },
                    textDecoration: 'underline',
                  }}
                >
                  <Image
                    className="sample"
                    src={
                      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    }
                    alt={`image of ${item.title}`}
                    width={800}
                    height={600}
                  />
                  <NextLink href={`/news/${item.id}`} passHref>
                    <LinkOverlay>
                      <Text fontSize={18} fontWeight={'bold'}>
                        {item.title}
                      </Text>
                    </LinkOverlay>
                  </NextLink>
                  <HStack justifyContent={'space-between'}>
                    <Text>{moment(item.created_at).format('YYYY-MM-DD')}</Text>
                    <Badge>{item.tag}</Badge>
                  </HStack>
                </LinkBox>
              );
            })}
            <LinkBox
              as={VStack}
              minW={100}
              _hover={{ textDecoration: 'underline' }}
            >
              <IconContext.Provider value={{ size: '24px' }}>
                <NextLink href={'/news'} passHref>
                  <LinkOverlay>
                    <BsFillCaretRightFill />
                  </LinkOverlay>
                </NextLink>
              </IconContext.Provider>
              <Text>全て見る</Text>
            </LinkBox>
          </HStack>
        </Stack>
      </Stack>
      {/* part2（join us） */}
      <Stack bg={'#092025'} h={700} position={'relative'} pt={200}>
        {/* arrow */}
        <Stack
          position={'absolute'}
          bg={'#fff'}
          // NOTE: 親要素のbgが表示されないように、topをマイナスに指定している。
          top={-0.3}
          left={0}
          clipPath={'polygon(0 0, 50% 38%, 100% 0)'}
          h={200}
          w={'100vw'}
        />
        {/* join us */}
        <VStack spacing={12}>
          <HStack spacing={6}>
            <IconContext.Provider value={{ size: '42px', color: '#81E6D9' }}>
              <BsCheckCircle />
            </IconContext.Provider>
            <Heading
              fontFamily={'serif'}
              letterSpacing={2}
              size={'2xl'}
              textAlign={'center'}
              color={'#fff'}
            >
              Join us
            </Heading>
          </HStack>
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
