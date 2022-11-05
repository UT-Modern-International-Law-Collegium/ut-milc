import React, { ReactElement } from 'react';
import type { GetStaticProps } from 'next';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';
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

type TopPageProps = {
  data: { about: string; award: string; join_us: string; news: News[] };
};

const TopPage: NextPageWithLayout<TopPageProps> = () => {
  const router: NextRouter = useRouter();
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack>
      <p>hello</p>
    </Stack>
  );
};
TopPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TopPage;
