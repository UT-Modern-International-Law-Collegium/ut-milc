'use client';

import React, { FC } from 'react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { BsTwitter, BsInstagram, BsLine } from 'react-icons/bs';
import {
  Button,
  Center,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
  Icon,
} from '@chakra-ui/react';

type ContactForm = {
  email: string;
  content: string;
};

const Footer: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const doContactFormSubmit = (data: ContactForm): void => {};

  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      py={12}
      px={{ base: 8, lg: 40 }}
      bg={'gray.200'}
      gap={{ base: 8, md: 0 }}
    >
      <GridItem colSpan={{ base: 2, md: 1 }}>
        {/* pages */}
        <Stack textAlign={{ base: 'center', md: 'inherit' }} mb={10}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>pages</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <Link as={NextLink} href={'/'}>
            Top
          </Link>
          <Link as={NextLink} href={'/about-us'}>
            About us
          </Link>
          <Link as={NextLink} href={`/awards?year=${moment().year()}`}>
            Awards
          </Link>
          <Link as={NextLink} href={'/news'}>
            News
          </Link>
          <Link as={NextLink} href={'/join-us'}>
            Join us
          </Link>
        </Stack>
        {/* links */}
        <Stack spacing={8} mb={10}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>links</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <HStack spacing={12} justifyContent={'center'}>
            <VStack
              as={Link}
              href={'https://www.instagram.com/kokusai_law_2023/'}
            >
              <Icon as={BsInstagram} h={9} w={9} />
              <Text>Instagram</Text>
            </VStack>
            <VStack as={Link} href={'https://twitter.com/utmilc_2023'}>
              <Icon as={BsTwitter} h={9} w={9} />
              <Text>Twitter</Text>
            </VStack>
            <VStack as={Link} href={'https://lin.ee/gwVPQY5'}>
              <Icon as={BsLine} h={9} w={9} />
              <Text>Line</Text>
            </VStack>
          </HStack>
        </Stack>
      </GridItem>
      {/* contact */}
      <GridItem colSpan={{ base: 2, md: 1 }} px={{ base: 0, md: 10 }}>
        <Stack spacing={5}>
          <HStack>
            <Divider borderColor={'#000'} />
            <Text>contact</Text>
            <Divider borderColor={'#000'} />
          </HStack>
          <Text>
            ご質問等は以下フォームから送信をお願いします。
            <br />
            ※当団体に参加を希望される方は、
            <Link as={NextLink} href={'/join-us'} textDecoration={'underline'}>
              こちら
            </Link>
            からご応募ください。
          </Text>
          {/* メアド */}
          <Stack sx={{ span: { color: 'red' } }}>
            <FormLabel>
              メールアドレス<span>*</span>
            </FormLabel>
            <Input
              bg={'#fff'}
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
          {/* 内容 */}
          <Stack sx={{ span: { color: 'red' } }}>
            <FormLabel fontSize={18} m={0}>
              お問い合わせ内容<span>*</span>
            </FormLabel>
            <Textarea
              bg={'#fff'}
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
              bg={'blue.100'}
              onClick={handleSubmit(doContactFormSubmit)}
            >
              送信する
            </Button>
          </Center>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
