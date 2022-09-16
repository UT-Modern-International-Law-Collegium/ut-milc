import React, { FC } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import moment from 'moment';
import { IconContext } from 'react-icons/lib';
import {
  BsArrowRight,
  BsFillCaretRightFill,
  BsCheckCircle,
  BsArrowRightShort,
  BsAward,
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
  IconButton,
  Icon,
} from '@chakra-ui/react';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';
import { Article, Award } from '../lib/type';
import SectionButton from '../components/top/SectionButton';
import { fakeData } from '../lib/fakeData';
import Layout from '../components/layout/Layout';
import NewsCard from '../components/news/NewsCard';

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
  const router: NextRouter = useRouter();
  return (
    <Stack spacing={{ base: 12 }}>
      <Firstview />
      {/* about us ~ news */}
      <Stack
        sx={{ h2: { fontFamily: 'serif', letterSpacing: 2 } }}
        px={'5%'}
        spacing={12}
        pb={16}
      >
        {/* about */}
        <Stack>
          <Heading size={'2xl'}>About us</Heading>
          <Text fontSize={18} lineHeight={2} px={4}>
            {data.top[0].about}
          </Text>
          <Center>
            <SectionButton>団体紹介はこちら</SectionButton>
          </Center>
        </Stack>
        {/* awards */}
        <Stack>
          <Heading size={'2xl'}>Awards</Heading>
          <Center>
            <SectionButton>全ての活動実績を見る</SectionButton>
          </Center>
        </Stack>
        {/* news */}
        <Stack>
          <Heading size={'2xl'}>News</Heading>
          <HStack overflowX={'scroll'}>
            {data.news.map((item: Article, index) => {
              if (index > 4) return;
              return <NewsCard key={item.id} item={item} />;
            })}
            <IconContext.Provider value={{ size: '36px' }}>
              <IconButton
                aria-label="news"
                icon={<BsArrowRightShort />}
                bg={'none'}
                onClick={() => router.push('/news')}
              />
            </IconContext.Provider>
          </HStack>
        </Stack>
      </Stack>
      {/* join us ~ footer */}
      <Stack bg={'#0d2c32'} h={500} position={'relative'} pt={100}>
        {/* arrow */}
        <Stack
          position={'absolute'}
          bg={'#fff'}
          // NOTE: 親要素のbgが表示されないように、topをマイナスに指定している。
          top={-0.4}
          left={0}
          clipPath={'polygon(0 0, 50% 38%, 100% 0)'}
          h={100}
          w={'100%'}
        />
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
          <Text
            fontSize={18}
            color={'#fff'}
            w={'40%'}
            textAlign={'center'}
            minW={'80%'}
          >
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

const DesktopContent: FC<TopPageProps> = ({ data }) => {
  const router: NextRouter = useRouter();

  return (
    <Stack spacing={{ base: 0, md: 4 }}>
      {/* ファーストビュー */}
      <Firstview />
      {/* ファーストビュー以下part1 */}
      <Stack
        spacing={{ base: 20, md: 140 }}
        pt={{ base: 0, md: 20 }}
        pb={{ base: 0, md: 20 }}
        position={'relative'}
      >
        {/* about */}
        <Stack
          spacing={20}
          direction={'row'}
          px={{ lg: 82, xl: 200 }}
          position={'relative'}
        >
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
            <SectionButton
              position={'absolute'}
              bottom={0}
              onClick={() => router.push('/about-us')}
            >
              団体紹介はこちら
            </SectionButton>
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
        <Stack
          px={{ lg: 82, xl: 200 }}
          direction={'row'}
          justifyContent={'space-between'}
          spacing={20}
        >
          <VStack
            w={'60%'}
            spacing={4}
            py={8}
            px={4}
            borderRadius={8}
            border={'solid'}
            borderColor={'gray.300'}
            position={'relative'}
          >
            <Icon
              as={BsAward}
              position={'absolute'}
              top={-6}
              left={-8}
              color={'yellow.300'}
              opacity={0.6}
              w={140}
              h={140}
            />
            <Heading
              fontWeight={'light'}
              textAlign={'center'}
              fontSize={30}
              zIndex={1}
            >
              2022 Philip C. Jessup International Law Moot Court Competition
              National Round
            </Heading>
            <Text fontSize={20}>~ NationalRound（国内予選） ~</Text>
            <HStack alignItems={'baseline'}>
              <Text fontSize={20}>総合結果</Text>
              <Text fontSize={32} pl={4}>
                優勝
              </Text>
              <Text as="span" fontSize={20}>
                （国際大会進出）
              </Text>
            </HStack>
          </VStack>
          <Stack w={'40%'} spacing={8} position={'relative'}>
            <Heading
              fontFamily={'serif'}
              letterSpacing={2}
              size={'2xl'}
              textAlign={'right'}
              textShadow={'6px 4px 1px rgb(0, 255, 177, 0.6)'}
            >
              Awards
            </Heading>
            <Text fontSize={18} lineHeight={2}>
              現代国際法研究会は、国内外の大会に数多く参加し、多くの実績を残してきています。
            </Text>
            <SectionButton
              position={'absolute'}
              bottom={0}
              onClick={() => router.push('/awards')}
            >
              全ての成績を見る
            </SectionButton>
          </Stack>
        </Stack>
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
          w={'100%'}
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
