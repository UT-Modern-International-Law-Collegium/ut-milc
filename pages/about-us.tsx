import React, { ReactElement } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { IconContext } from 'react-icons/lib';
import { BsFillSquareFill } from 'react-icons/bs';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';
import { AboutPageData } from '../lib/type';
import { fakeData } from '../lib/fakeData';
import { NextPageWithLayout } from './_app';
import Layout from '../components/layout/Layout';

type AboutPageProps = { data: AboutPageData[] };

const AboutPage: NextPageWithLayout<AboutPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack
        pl={{ base: 10, md: 400 }}
        pr={{ base: 10, md: 0 }}
        spacing={{ base: 10 }}
      >
        <PageTitle minW={200}>団体紹介</PageTitle>
        {data.map((item) => {
          return (
            <Stack key={item.id} maxW={850} w={{ base: '100%', md: '82%' }}>
              <HStack alignItems={'center'} spacing={2}>
                <IconContext.Provider value={{ size: '18', color: '#4A5568' }}>
                  <BsFillSquareFill />
                  <Heading size={'lg'}>{item.title}</Heading>
                </IconContext.Provider>
              </HStack>
              <HStack spacing={4} borderLeft={'1px solid #ccc'} pl={5}>
                <Text>{item.content}</Text>
              </HStack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    if (process.env.ENV_VAR === 'development') {
      return { props: { data: fakeData.about } };
    } else {
      const res = await axiosInstance.get('/api/about-us');
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;
