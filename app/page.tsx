'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';
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
} from '@chakra-ui/react';

import { prefix } from '../lib/prefix';
import { TopData } from '../lib/type/topData';
import AwardCard from './components/AwardCard';
import Firstview from './components/FirstView';
import SectionButton from './components/SectionButton';
import { NewsData } from '../lib/type/newsData';
import NewsCard from './news/NewsCard';

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
            <Heading
              size={'2xl'}
              textShadow={{
                base: 'none',
                md: '6px 4px 1px rgb(0, 255, 177, 0.6)',
              }}
            >
              About us
            </Heading>
            {topData && (
              <Text
                fontSize={18}
                lineHeight={2}
                dangerouslySetInnerHTML={{ __html: topData?.aboutUs }}
              />
            )}
            <SectionButton
              position={{ base: 'static', md: 'absolute' }}
              bottom={{ md: 0 }}
              onClick={() => router.push('/about-us')}
            >
              団体紹介はこちら
            </SectionButton>
          </Stack>
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
          <AwardCard />
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
            {topData && (
              <Text
                fontSize={18}
                lineHeight={2}
                textAlign={'right'}
                dangerouslySetInnerHTML={{ __html: topData?.awards }}
              />
            )}
            {isLargerThan768px && (
              <SectionButton
                position={'absolute'}
                display={{ base: 'none', md: 'flex' }}
                bottom={{ md: 0 }}
                // onClick={() => router.push(`/awards/${moment().year()}`)}
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
