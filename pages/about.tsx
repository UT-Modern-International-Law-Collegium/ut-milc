import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Divider, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';
import { AboutPageData } from '../lib/type';

type AboutPageProps = { data: AboutPageData[] };

const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  return (
    <Stack>
      <Stack pl={400} spacing={10}>
        <PageTitle minW={200}>団体紹介</PageTitle>
        {data.map((item) => {
          return (
            <Stack key={item.id} maxW={850} w={'82%'}>
              <Heading>{item.title}</Heading>
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axiosInstance.get('/api/about');
    return { props: { data: res.data } };
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;
