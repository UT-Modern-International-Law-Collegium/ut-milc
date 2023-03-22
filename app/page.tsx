'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import {
  BsArrowRight,
  BsArrowRightShort,
  BsCheckCircle,
  BsFillCaretRightFill,
} from 'react-icons/bs';
import moment from 'moment';
import {
  Heading,
  Stack,
  Text,
  Button,
  Center,
  useMediaQuery,
  VStack,
  HStack,
  Icon,
  Box,
  LinkBox,
  IconButton,
} from '@chakra-ui/react';

import { prefix } from '../lib/prefix';
import { TopData } from '../lib/type/topData';
import AwardCard from './components/AwardCard';
import Firstview from './components/FirstView';
import SectionButton from './components/SectionButton';
import { NewsData } from '../lib/type/newsData';
import NewsCard from './(pages)/news/NewsCard';

const Page = () => {
  const router = useRouter();
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  const [topData, setTopData] = useState<TopData>();
  const [news, setNews] = useState<NewsData[]>([]);

  useEffect(() => {
    const f1 = async () => {
      const res = await fetch(`${prefix()}/top`);
      const data: { data: TopData } = await res.json();
      setTopData(data.data);
    };
    f1();

    const f2 = async () => {
      const res = await fetch(`${prefix()}/news?count=5`);
      const data: NewsData[] = await res.json();
      setNews(data);
    };
    f2();
  }, []);

  if (!topData) {
    return <Box bg={'#092025'} minH={'100vh'} />;
  }

  return (
    <Stack spacing={{ base: 12, md: 4 }}>
      <Firstview />
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
          <Stack
            position={{ base: 'static', md: 'relative' }}
            spacing={{ base: 2, md: 8 }}
          >
            <Heading size={'2xl'}>About us</Heading>
            <Text
              fontSize={18}
              lineHeight={2}
              pl={{ md: 5 }}
              borderLeft={{ md: '1px solid #ccc' }}
              dangerouslySetInnerHTML={{ __html: topData?.aboutUs }}
            />
            <SectionButton
              position={{ base: 'static' }}
              bottom={{ md: 0 }}
              onClick={() => router.push('/about-us')}
            >
              団体紹介はこちら
            </SectionButton>
          </Stack>
        </Stack>
        {/* awards */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          spacing={{ base: 4, md: 20 }}
        >
          <Stack
            w={{ base: '100%', md: '40%' }}
            spacing={{ base: 2, md: 8 }}
            position={'relative'}
          >
            <Heading
              fontFamily={'serif'}
              letterSpacing={2}
              size={'2xl'}
              textAlign={{ base: 'inherit' }}
            >
              Awards
            </Heading>
            <Text
              fontSize={18}
              lineHeight={2}
              pl={{ md: 5 }}
              borderLeft={{ md: '1px solid #ccc' }}
              dangerouslySetInnerHTML={{ __html: topData?.awards }}
            />
            <SectionButton
              position={'absolute'}
              display={{ base: 'none', md: 'flex' }}
              bottom={{ md: 0 }}
              onClick={() => router.push(`/awards/${moment().year()}`)}
            >
              全ての成績を見る
            </SectionButton>
          </Stack>
          <AwardCard />
          {!isLargerThan768px && (
            <SectionButton
              display={{ base: 'flex', md: 'none' }}
              onClick={() => router.push(`/awards/${moment().year()}`)}
            >
              全ての成績を見る
            </SectionButton>
          )}
        </Stack>
        {/* news */}
        <Stack spacing={{ base: 0, md: 8 }}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            News
          </Heading>
          <HStack
            spacing={{ md: 8 }}
            overflowX={{ base: 'scroll', md: 'unset' }}
          >
            {news.map((item: NewsData, index) => {
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
                <NextLink href={'/news'}>
                  <Icon as={BsFillCaretRightFill} h={6} w={6} />
                </NextLink>
                <Text
                  display={{ md: 'none', lg: 'block' }}
                  _hover={{ cursor: 'pointer' }}
                >
                  全て見る
                </Text>
              </LinkBox>
            ) : (
              <IconButton
                aria-label="news"
                icon={<Icon as={BsArrowRightShort} h={10} w={10} />}
                bg={'none'}
                onClick={() => router.push('/news')}
              />
            )}
          </HStack>
        </Stack>
      </Stack>
      <Stack
        bg={'#092025'}
        position={'relative'}
        h={{ base: 500, md: 700 }}
        pt={{ base: 100, md: 200 }}
      >
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
            <Icon as={BsCheckCircle} h={10} w={10} color={'#81E6D9'} />
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
          {topData && (
            <Text
              fontSize={18}
              color={'#fff'}
              w={{ base: '80%', md: '40%' }}
              textAlign={'center'}
              dangerouslySetInnerHTML={{ __html: topData?.joinUs }}
            />
          )}
          <Center>
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
          </Center>
        </VStack>
      </Stack>
    </Stack>
  );
};

export default Page;