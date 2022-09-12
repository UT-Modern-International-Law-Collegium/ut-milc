import React, { useEffect, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import moment from 'moment';
import { motion, useScroll } from 'framer-motion';
import { useForm } from 'react-hook-form';
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
  FormLabel,
  Input,
  Textarea,
  Button,
  Center,
  keyframes,
  useMediaQuery,
} from '@chakra-ui/react';
import Firstview from '../components/top/Firstview';
import { axiosInstance } from '../lib/axios';
import { Article } from '../lib/type';
import SectionButton from '../components/top/SectionButton';
import NextChakraLink from '../components/utils/NextChakraLink';
import { fakeData } from '../lib/fakeData';

type TopPageProps = {
  data: { top: any[]; news: Article[] };
};

type ContactForm = {
  email: string;
  content: string;
};

const TopPage: NextPage<TopPageProps> = ({ data }) => {
  const router: NextRouter = useRouter();
  const [isDisplayingFirstview, setIsDisplayingFirstview] =
    useState<boolean>(true);
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');
  const [isLargerThan1280px] =
    useMediaQuery(
      '(min-width:1280px)'
    ); /* NOTE: animationは1280px以上の時に限る。 */
  const { scrollY } = useScroll();

  const animationKeyFrame = isLargerThan768px
    ? keyframes`from{opacity:0;transform:translateY(0px);}to{opacity:1;transform:translateY(-400px)}`
    : keyframes`from{opacity:0;transform:translateY(-200px);}to{opacity:1;transform:translateY(-650px);}`;
  const fadeUpAnimation: string = `${animationKeyFrame} 1.4s ease-out 1 forwards`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

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

  const doContactFormSubmit = (data: ContactForm): void => {};

  return (
    <Stack spacing={isLargerThan768px ? 4 : 0}>
      {/* ファーストビュー */}
      <Firstview opacity={isDisplayingFirstview ? 1 : 0} transition={'0.2s'} />
      {/* ファーストビュー以下 */}
      <Stack
        as={motion.div}
        animation={isDisplayingFirstview ? '' : fadeUpAnimation}
        spacing={isLargerThan768px ? 0 : 20}
        pt={isLargerThan768px ? 0 : 20}
        pl={isLargerThan768px ? 500 : 10}
        pr={isLargerThan768px ? 0 : 10}
        sx={
          isLargerThan768px
            ? {
                '.section-wrapper': {
                  minH: '400px',
                  w: '48vw',
                },
              }
            : {}
        }
      >
        {/* about */}
        {data.top.length !== 0 && (
          <Stack spacing={8} className={'section-wrapper'}>
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
        <Stack className={'section-wrapper'} spacing={8}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            News
          </Heading>
          {data.news.length === 0 ? (
            <Text>活動報告はありません。</Text>
          ) : (
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
          )}
          <SectionButton onClick={() => router.push('/news')}>
            全て見る
          </SectionButton>
        </Stack>
        {/* join us */}
        <Stack className={'section-wrapper'} spacing={8}>
          <Heading fontFamily={'serif'} letterSpacing={2} size={'2xl'}>
            Join us
          </Heading>
          <Text fontSize={18}>
            現代国際法研究会に入会を希望される方は、以下のボタンから申し込み専用ページへ進み、フォームを送信してください。
          </Text>
          <Center>
            <IconContext.Provider value={{ size: '20px' }}>
              <Button
                bg={'teal.200'}
                fontWeight={'normal'}
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
        </Stack>
        {/* contact */}
        <Stack spacing={8} className={'section-wrapper'}>
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
          <Stack sx={{ span: { color: 'red' } }}>
            <FormLabel fontSize={18} m={0}>
              メールアドレス<span>*</span>
            </FormLabel>
            <Input
              {...register('email', {
                required: 'メールアドレスは必須項目です。',
                pattern: {
                  value:
                    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                  message: 'メールアドレスの形式が違います。',
                },
              })}
            />
            <span>{errors.email?.message}</span>
          </Stack>
          <Stack sx={{ span: { color: 'red' } }}>
            <FormLabel fontSize={18} m={0}>
              お問い合わせ内容<span>*</span>
            </FormLabel>
            <Textarea
              minH={200}
              {...register('content', {
                required: 'お問い合わせ内容を入力してください。',
              })}
            />
            <span>{errors.content?.message}</span>
          </Stack>
          <Center>
            <Button
              w={200}
              // m={'0 0 0 auto'}
              bg={'blue.100'}
              onClick={handleSubmit(doContactFormSubmit)}
            >
              送信する
            </Button>
          </Center>
        </Stack>
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
