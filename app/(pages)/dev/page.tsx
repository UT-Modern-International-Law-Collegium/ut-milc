'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BsArrowRight, BsCheckCircle } from 'react-icons/bs';
import moment from 'moment';
import {
  Heading,
  Stack,
  Text,
  Button,
  Center,
  VStack,
  HStack,
  Icon,
  Box,
  Divider,
} from '@chakra-ui/react';

import AwardCard from '../../components/AwardCard';
import Firstview from '../../components/FirstView';
import SectionButton from '../../components/SectionButton';

const Page = () => {
  const router = useRouter();

  return (
    <Box>
      <Firstview />
      <Box w={{ base: '90%', md: '60%' }} mx={'auto'}>
        {/* about us */}
        <Box textAlign={'center'} pt={20}>
          <Heading size={'2xl'} fontFamily={'serif'}>
            About us
          </Heading>
          <Divider borderColor={'gray.500'} w={'20%'} mx={'auto'} my={5} />
          <Text lineHeight={2} fontSize={18}>
            東京大学現代国際法研究会は、筒井若水先生（東京大学名誉教授）が開講されていた「昭和43年度筒井ゼミナール」を前身とし、50年以上の歴史を持つサークルです。
          </Text>
          <SectionButton onClick={() => router.push('/about-us')}>
            団体紹介はこちら
          </SectionButton>
        </Box>
        {/* awards */}
        <Box textAlign={'center'} py={20}>
          <Heading size={'2xl'} fontFamily={'serif'}>
            Awards
          </Heading>
          <Divider borderColor={'gray.500'} w={'20%'} mx={'auto'} my={5} />
          <Text lineHeight={2} fontSize={18}>
            現代国際法研究会は、国内外の大会に数多く参加し、多くの実績を残してきています。
          </Text>
          <Center my={14}>
            <AwardCard />
          </Center>
          <SectionButton
            onClick={() => router.push(`/awards?year=${moment().year()}`)}
          >
            活動実績はこちら
          </SectionButton>
        </Box>
        {/* news */}
        <Box textAlign={'center'} py={20}>
          <Heading size={'2xl'} fontFamily={'serif'}>
            News
          </Heading>
          <Divider borderColor={'gray.500'} w={'20%'} mx={'auto'} my={5} />
          <Text lineHeight={2} fontSize={18}>
            現代国際法研究会は、note.comを利用した情報発信を行なっております。
          </Text>
          <SectionButton isExternal={true} href={'https://note.com/utmilc'}>
            noteはこちら
          </SectionButton>
        </Box>
      </Box>
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
          <Text
            fontSize={18}
            color={'#fff'}
            w={{ base: '80%', md: '40%' }}
            textAlign={'center'}
          >
            現代国際法研究会に入会を希望される方は、以下のボタンから申し込み専用ページへ進み、フォームを送信してください。
          </Text>
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
    </Box>
  );
};

export default Page;
