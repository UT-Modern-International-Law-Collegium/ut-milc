import React, { ReactElement } from 'react';
import type { GetStaticProps } from 'next';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';
import { AxiosResponse } from 'axios';
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
import { News } from '../lib/type/page';
import SectionButton from '../components/top/SectionButton';
import NewsCard from '../components/news/NewsCard';
import { NextPageWithLayout } from './_app';
import Layout from '../components/layout/Layout';
import { TopRes } from '../lib/type/api';

type Props = {
  data: { aboutUs: string; award: string; joinUs: string; news: News[] };
};

const Page: NextPageWithLayout<Props> = ({ data }) => {
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
        px={{ base: 5, md: 0, lg: 82, xl: 200 }}
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
            spacing={{ base: 2, md: 8 }}
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
            <Text fontSize={18} lineHeight={2}>
              {data.aboutUs}
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
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          spacing={{ base: 4, md: 20 }}
        >
          {!isLargerThan768px && (
            <SectionButton
              display={{ base: 'flex', md: 'none' }}
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
            spacing={{ base: 2, md: 8 }}
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
              {data.award}
            </Text>
            {isLargerThan768px && (
              <SectionButton
                position={'absolute'}
                display={{ base: 'none', md: 'flex' }}
                bottom={{ md: 0 }}
                onClick={() => router.push(`/awards/${moment().year()}`)}
              >
                全ての成績を見る
              </SectionButton>
            )}
          </Stack>
        </Stack>
        {/* news */}
        <Stack spacing={{ base: 0, md: 8 }}>
          <Heading
            fontFamily={'serif'}
            letterSpacing={2}
            size={'2xl'}
            textShadow={{
              base: 'none',
              md: '6px 4px 1px rgb(0, 255, 177, 0.6)',
            }}
          >
            News
          </Heading>
          <HStack
            spacing={{ md: 8 }}
            overflowX={{ base: 'scroll', md: 'unset' }}
          >
            {data.news.map((item: News, index) => {
              if (index > 2) return;
              return (
                <NewsCard
                  key={item.id}
                  item={item}
                  maxW={{ base: 'unset', md: '30%' }}
                />
              );
            })}
            {isLargerThan768px ? (
              <LinkBox
                as={VStack}
                minW={{ md: 'unset', lg: 100 }}
                _hover={{ textDecoration: 'underline' }}
              >
                <IconContext.Provider value={{ size: '24px' }}>
                  <NextLink href={'/news'} passHref>
                    <LinkOverlay>
                      <BsFillCaretRightFill />
                    </LinkOverlay>
                  </NextLink>
                </IconContext.Provider>
                <Text display={{ md: 'none', lg: 'block' }}>全て見る</Text>
              </LinkBox>
            ) : (
              <IconContext.Provider value={{ size: '36px' }}>
                <IconButton
                  aria-label="news"
                  icon={<BsArrowRightShort />}
                  bg={'none'}
                  onClick={() => router.push('/news')}
                />
              </IconContext.Provider>
            )}
          </HStack>
        </Stack>
      </Stack>
      {/* join us ~ footer */}
      <Stack
        bg={'#092025'}
        position={'relative'}
        h={{ base: 500, md: 700 }}
        pt={{ base: 100, md: 200 }}
      >
        {/* arrow */}
        <Stack
          position={'absolute'}
          bg={'#fff'}
          // NOTE: 親要素のbgが表示されないように、topをマイナスに指定している。
          top={{ base: -0.4, md: -0.3 }}
          left={0}
          clipPath={'polygon(0 0, 50% 38%, 100% 0)'}
          h={{ base: 100, md: 200 }}
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
          <Text
            fontSize={18}
            color={'#fff'}
            w={{ base: '80%', md: '40%' }}
            textAlign={'center'}
          >
            {data.joinUs}
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
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const topRes: AxiosResponse<any, any> = await axiosInstance.get('/top');
    const topResData: TopRes = topRes.data;
    const newsRes: AxiosResponse<any, any> = await axiosInstance.get(
      '/news?count=5'
    );
    const data = {
      aboutUs: topResData.aboutUs,
      award: topResData.awards,
      joinUs: topResData.joinUs,
      news: newsRes.data as News[],
    };
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    throw new Error(`err: ${err}`);
  }
};

export default Page;
