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
        <DesktopContent data={data} />
        {/* <MobileContent data={data} /> */}
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
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack spacing={{ base: 12, md: 4 }}>
      {/* ファーストビュー */}
      <Firstview />
      {/* about us ~ news */}
      <Stack
        position={{ base: 'static', md: 'relative' }}
        spacing={{ base: 12, md: 140 }}
        pt={{ base: 0, md: 20 }}
        pb={{ base: 16, md: 20 }}
        px={{ lg: 82, xl: 200 }}
        sx={{ h2: { fontFamily: 'serif', letterSpacing: 2 } }}
      >
        {/* about */}
        <Stack
          spacing={{ base: 0, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
        >
          {/* タイトルとテキスト */}
          <Stack
            position={{ base: 'static', md: 'relative' }}
            spacing={{ base: 0, md: 8 }}
            px={{ base: 12, md: 0 }}
          >
            <Heading
              size={'2xl'}
              textShadow={{
                base: 'none',
                md: '6px 4px 1px rgb(0, 255, 177, 0.6)',
              }}
            >
              About us
            </Heading>
            <Text fontSize={18} lineHeight={2} px={{ base: 4, md: 0 }}>
              {data.top[0].about}
            </Text>
            <SectionButton
              position={{ base: 'static', md: 'absolute' }}
              bottom={{ md: 0 }}
              onClick={() => router.push('/about-us')}
            >
              団体紹介はこちら
            </SectionButton>
          </Stack>
          {/* 画像 */}
          <Box display={{ base: 'none', md: 'block' }}>
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
          // px={{ base: 12, md: 0, lg: 82, xl: 200 }}
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          spacing={{ base: 4, md: 20 }}
        >
          {!isLargerThan768px && (
            <SectionButton
              display={{ base: 'block', md: 'none' }}
              onClick={() => router.push('/awards')}
            >
              全ての成績を見る
            </SectionButton>
          )}
          <VStack
            w={{ base: 'none', md: '60%' }}
            spacing={{ base: 2, md: 4 }}
            py={{ base: 4, md: 8 }}
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
              w={{ base: 100, md: 140 }}
              h={{ base: 100, md: 140 }}
            />
            <Heading
              fontWeight={'light'}
              textAlign={'center'}
              fontSize={{ base: 22, md: 30 }}
              zIndex={1}
            >
              2022 Philip C. Jessup International Law Moot Court Competition
              National Round
            </Heading>
            <Text fontSize={{ base: 18, md: 20 }}>
              ~ NationalRound（国内予選） ~
            </Text>
            <HStack alignItems={'baseline'}>
              <Text fontSize={{ base: 18, md: 20 }}>総合結果</Text>
              <Text fontSize={{ base: 24, md: 32 }} pl={{ base: 2, md: 4 }}>
                優勝
              </Text>
              <Text as="span" fontSize={{ base: 18, md: 20 }}>
                （国際大会進出）
              </Text>
            </HStack>
          </VStack>
          {/* タイトルとテキスト */}
          <Stack
            w={{ base: '100%', md: '40%' }}
            spacing={{ base: 0, md: 8 }}
            position={'relative'}
          >
            <Heading
              fontFamily={'serif'}
              letterSpacing={2}
              size={'2xl'}
              textAlign={{ base: 'inherit', md: 'right' }}
              textShadow={{
                base: 'none',
                md: '6px 4px 1px rgb(0, 255, 177, 0.6)',
              }}
            >
              Awards
            </Heading>
            <Text fontSize={18} lineHeight={2}>
              現代国際法研究会は、国内外の大会に数多く参加し、多くの実績を残してきています。
            </Text>
            {isLargerThan768px && (
              <SectionButton
                position={'absolute'}
                display={{ base: 'none', md: 'block' }}
                bottom={{ md: 0 }}
                onClick={() => router.push('/awards')}
              >
                全ての成績を見る
              </SectionButton>
            )}
          </Stack>
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
