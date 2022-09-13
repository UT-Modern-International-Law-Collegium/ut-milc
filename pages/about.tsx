import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Heading, HStack, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { IconContext } from 'react-icons/lib';
import { BsFillSquareFill } from 'react-icons/bs';
import PageTitle from '../components/utils/PageTitle';
import { axiosInstance } from '../lib/axios';
import { AboutPageData } from '../lib/type';
import { fakeData } from '../lib/fakeData';

type AboutPageProps = { data: AboutPageData[] };

const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  const [isLargerThan768px] = useMediaQuery('(min-width:768px)');

  return (
    <Stack>
      <Stack
        pl={isLargerThan768px ? 400 : 10}
        pr={isLargerThan768px ? 0 : 10}
        spacing={10}
      >
        <PageTitle minW={200}>団体紹介</PageTitle>
        {data.map((item) => {
          return (
            <Stack
              key={item.id}
              maxW={850}
              w={isLargerThan768px ? '82%' : '100%'}
            >
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    if (process.env.ENV_VAR === 'development') {
      return { props: { data: fakeData.about } };
    } else {
      const res = await axiosInstance.get('/api/about');
      return { props: { data: res.data } };
    }
  } catch (err) {
    throw new Error(`err at about page: ${err}`);
  }
};

export default AboutPage;
